import { Link } from "react-router-dom";
import { RegisterMain, SectionContainer } from "./style";
import { Form } from "../../components/form";

export const RegisterPage = () => {
  return (
    <RegisterMain>
      <SectionContainer>
        <header className="header-register">
          <h2>KenzieHub</h2>

          <Link to={-1}>Voltar</Link>
        </header>
        <Form />
      </SectionContainer>
    </RegisterMain>
  );
};
