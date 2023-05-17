import { ReactNode, useEffect } from "react";
import { Api } from "../services/apis/api";
import { userContext } from "./userContext";
import { createContext, useState, useContext } from "react";

interface iTechsProviderProps {
  children: ReactNode;
}

export interface iCreateNewTech {
  title: string;
  status: string;
}

export interface iTech {
  id: string;
  title: string;
  status: string;
}

interface iTechsContext {
  newTech: boolean;
  verifyNewTech(): void;
  createNewTech(body: iCreateNewTech): Promise<void>;
  deleteTech(id: string): Promise<void>;
}

export const techsContext = createContext<iTechsContext>({} as iTechsContext);

export function TechsProvider({ children }: iTechsProviderProps) {
  const [newTech, setNewTech] = useState(false);

  const { addNewTech } = useContext(userContext);

  function verifyNewTech(): void {
    setNewTech(!newTech);
  }

  async function createNewTech(data: iCreateNewTech): Promise<void> {
    await Api.post("/users/techs", data)
      .then((res) => {
        addNewTech(res.data);
        setNewTech(false);
      })
      .catch((err) => console.log(err));
  }

  async function deleteTech(id: string): Promise<void> {
    await Api.delete(`/users/techs/${id}`).catch((err) => console.log(err));
  }

  return (
    <techsContext.Provider
      value={{ newTech, verifyNewTech, createNewTech, deleteTech }}
    >
      {children}
    </techsContext.Provider>
  );
}
