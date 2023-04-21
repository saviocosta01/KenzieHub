import { api } from "../services/api";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProviders = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [techs, setTechs] = useState([]);

  const onSubmitRegister = async (data) => {
    try {
      const response = await api.post("/users", data);
      toast.success("Conta criada com sucesso");
      navigate("/");
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };

  const onSubmitLogin = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      setUser(response.data.user);
      setTechs(response.data.user.techs);
      localStorage.setItem("@TOKEN", response.data.token);
      navigate("/dashboard");
      toast.success("login realizado com sucesso");
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser("");
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      const autoLogin = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          setTechs(response.data.techs);
          navigate("/dashboard");
        } catch (error) {
          toast.error(`${error.response.data.message}`);
          localStorage.clear();
        }
      };
      autoLogin();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        onSubmitRegister,
        onSubmitLogin,
        setUser,
        user,
        techs,
        logout,
        setTechs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
