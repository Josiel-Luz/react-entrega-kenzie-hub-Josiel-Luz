import { Api } from "../services/apis/api";
import { userContext } from "./userContext";

const { createContext, useState, useContext } = require("react");

export const techsContext = createContext({});

export function TechsProvider({ children }) {
  const [newTech, setNewTech] = useState(false);

  const { setTechs, techs } = useContext(userContext);

  async function createNewTech(body) {
    await Api.post("/users/techs", body)
      .then((res) => {
        setTechs([...techs, res.data]);
        setNewTech(false);
      })
      .catch((err) => console.log(err));
  }

  async function deleteTech(id) {
    await Api.delete(`/users/techs/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <techsContext.Provider
      value={{ newTech, setNewTech, createNewTech, deleteTech }}
    >
      {children}
    </techsContext.Provider>
  );
}
