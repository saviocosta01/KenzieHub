import { createContext, useContext, useState } from "react";
import { UserContext } from "../providers/UserContext";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const token = localStorage.getItem("@TOKEN");
  const { setTechs, techs } = useContext(UserContext);

  const [addTechs, setAddTechs] = useState(false);
  const [updateTech, setUpdateTech] = useState(false);
  const [userTech, setUserTech] = useState({});

  const addMoreTechs = (event) => {
    event.preventDefault();
    setAddTechs(true);
  };

  const onSubmitAddTech = async (data) => {
    try {
      api.defaults.headers.common["Authorization"] = "Bearer " + token;
      const response = await api.post("/users/techs", data);
      setTechs([...techs, response.data]);
      toast.success("Tecnologia criada com sucesso");
      setAddTechs(false);
    } catch (error) {
      toast.error("não foi possivel ciar a tecnologia");
    }
  };

  const updateStatus = async (data) => {
    try {
      api.defaults.headers.common["Authorization"] = "Bearer " + token;
      const response = await api.put(`/users/techs/${userTech.id}`, data);

      const newTech = techs.map((tech) => {
        if (userTech.id === tech.id) {
          return { ...tech, ...response.data };
        } else {
          return tech;
        }
      });
      setTechs(newTech);
      setUpdateTech(false);

      toast.success("tecnologia atualizada com sucesso");
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };

  const deleteTech = async (event) => {
    event.preventDefault();
    try {
      api.defaults.headers.common["Authorization"] = "Bearer " + token;
      const response = await api.delete(`/users/techs/${userTech.id}`);
      const itemRemove = techs.filter((tech) => {
        return tech.id !== userTech.id;
      });
      setUpdateTech(false);
      setTechs(itemRemove);
      toast.error("tecnologia excluída");
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };

  const TechFound = (id) => {
    const TechnologyFound = techs.find((Element) => {
      return Element.id === id;
    });

    setUpdateTech(true);
    setUserTech(TechnologyFound);
  };

  return (
    <TechContext.Provider
      value={{
        addMoreTechs,
        onSubmitAddTech,
        setAddTechs,
        addTechs,
        updateStatus,
        deleteTech,
        TechFound,
        updateTech,
        userTech,
        setUpdateTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
