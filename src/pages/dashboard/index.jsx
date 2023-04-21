import { useContext } from "react";
import { Link } from "react-router-dom";
import { AddTechs } from "../../components/modais/AddTechs";
import { Techs } from "../../components/techs";
import { TechContext } from "../../providers/TechContext";
import { UserContext } from "../../providers/UserContext";
import { DashboardContainer, SectionTechs, Navbar, Header } from "./style";
import { UpdateOrDelete } from "../../components/modais/UpdateTeachs";

export const DashboardPage = () => {
  const { logout, user } = useContext(UserContext);
  const { addTechs, addMoreTechs, updateTech } = useContext(TechContext);

  return (
    <DashboardContainer>
      <Navbar>
        <div>
          <h2>Kenzie Hub</h2>
          <button>
            <Link to={"/"} onClick={logout}>
              Sair
            </Link>
          </button>
        </div>
      </Navbar>
      <Header>
        <div>
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </div>
      </Header>
      <SectionTechs>
        <div>
          <h3>Tecnologias</h3>
          <button onClick={addMoreTechs}>+</button>
        </div>

        <Techs />
      </SectionTechs>
      {addTechs && <AddTechs />}

      {updateTech && <UpdateOrDelete />}
    </DashboardContainer>
  );
};
