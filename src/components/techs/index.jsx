import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { UserContext } from "../../providers/UserContext";
import { ListTechs } from "..//../pages/dashboard/style";

export const Techs = () => {
  const { techs } = useContext(UserContext);
  const { TechFound } = useContext(TechContext);

  return (
    <>
      {techs.length > 0 ? (
        <ListTechs>
          {techs.map((tech, index) => {
            return (
              <li
                key={index}
                onClick={() => TechFound(tech.id)}
                className={tech.status === "Avançado" ? "card-advanced " : null}
              >
                <h3>{tech.title}</h3>
                <p>{tech.status}</p>
              </li>
            );
          })}
        </ListTechs>
      ) : (
        <h4 className="noTech">Nenhuma Tecnologia criada</h4>
      )}
    </>
  );
};
