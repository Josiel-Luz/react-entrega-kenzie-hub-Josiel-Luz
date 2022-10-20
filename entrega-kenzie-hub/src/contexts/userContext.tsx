import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { iCreateUser } from "../pages/RegisterPage";
import { iLogin } from "../pages/LogPage";
import { Api } from "../services/apis/api";
import { iTech } from "./techsContext";

interface iUserContextProps {
  children: ReactNode;
}

interface iUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  contact: string;
  techs: iTech[];
}

interface iUserContext {
  user: iUser;
  techs: iTech[];
  addNewTech(data: iTech): void;
  createUser(data: iCreateUser): Promise<void>;
  login(data: iLogin): Promise<void>;
  quit(): void;
  removeTech(elem: iTech): void;
}

export const userContext = createContext<iUserContext>({} as iUserContext);

export function UserProvider({ children }: iUserContextProps) {
  const [user, setUser] = useState<iUser>({} as iUser);
  const [techs, setTechs] = useState<iTech[]>([]);
  const [isLog, setIsLog] = useState(false);

  const navigate = useNavigate();

  async function createUser(data: iCreateUser) {
    await Api.post("/users", data)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  }

  async function login(data: iLogin) {
    await Api.post("/sessions", data)
      .then((res) => {
        setIsLog(true);
        setUser(res.data.user);
        setTechs(res.data.user.techs);
        navigate("/home");
        localStorage.setItem("@TOKEN", res.data.token);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    async function verifiUser() {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        await Api.get("/profile", {
          headers: {
            auth: `Bearer ${token}`,
          },
        })
          .then((res) => {
            setUser(res.data);
            setTechs(res.data.techs);
            navigate("/home");
          })
          .catch((err) => console.log(err));
      } else {
        navigate("/");
        localStorage.removeItem("@TOKEN");
      }
    }

    verifiUser();
  }, [isLog]);

  function quit() {
    localStorage.removeItem("@TOKEN");
    setIsLog(false);
    navigate("/");
  }

  function addNewTech(data: iTech) {
    setTechs([...techs, data]);
  }

  function removeTech(elem: iTech) {
    setTechs(techs.filter((tech) => tech.title !== elem.title));
  }

  return (
    <userContext.Provider
      value={{ user, techs, addNewTech, createUser, login, quit, removeTech }}
    >
      {children}
    </userContext.Provider>
  );
}
