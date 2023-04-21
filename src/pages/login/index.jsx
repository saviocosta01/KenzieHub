import { Input } from "../../components/input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { MainContainerLogin, LoginForm } from "./style";

export const LoginPage = () => {
  const { onSubmitLogin } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatorio").email("email invalido"),
    password: yup.string().required("Senha Obrigatoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <MainContainerLogin>
      <h2>Kenzie Hub</h2>
      <LoginForm onSubmit={handleSubmit(onSubmitLogin)}>
        <h3>Login</h3>

        <Input
          label="Email"
          id="Email"
          type="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          label="Senha"
          id="password"
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
          error={errors.password?.message}
        />

        <button type="submit" id="button-Enter">
          Entrar
        </button>
        <span>Ainda não possui uma conta?</span>

        <Link to={"/register"}>Cadastre-se</Link>
      </LoginForm>
    </MainContainerLogin>
  );
};
