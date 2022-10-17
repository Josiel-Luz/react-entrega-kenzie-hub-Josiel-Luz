import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../services/apis/api";

export const userContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [techs, setTechs] = useState([]);
  const [isLog, setIsLog] = useState(false);

  const navigate = useNavigate();

  function createUser(data) {
    Api.post("/users", data)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  }

  async function login(data) {
    await Api.post("/sessions", data)
      .then((res) => {
        setIsLog(true);
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

  return (
    <userContext.Provider
      value={{ user, techs, setTechs, createUser, login, quit }}
    >
      {children}
    </userContext.Provider>
  );
}
