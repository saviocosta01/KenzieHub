import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/input";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { FormContainer } from "./style";

export const Form = () => {
  const { onSubmitRegister } = useContext(UserContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatorio"),
    email: yup.string().required("email Obrigatorio").email("Email invalido"),
    password: yup
      .string()
      .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
      .matches(/(\d)/, "Deve conter ao menos 1 numero")
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/(\W|_)/, "Deve conter no minimo 1 caracter especial")
      .matches(/.{8,}/, "Deve conter no minimo 8 caracters"),
    bio: yup.string().required("Biografia Obrigatoria"),
    contact: yup.string().required("Contato Obrigatorio"),
    course_module: yup.string().required("Módulo Obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitRegister)}>
      <h2>Crie sua conta</h2>
      <h3>Rapido e grátis, vamos nessa</h3>
      <Input
        label="nome"
        id="name"
        type="text"
        placeholder="Digite aqui seu nome"
        {...register("name")}
        error={errors.name?.message}
      />

      <Input
        label="email"
        id="email"
        type="email"
        placeholder="Digite aqui seu email"
        {...register("email")}
        error={errors.email?.message}
      />

      <Input
        label="senha"
        id="password"
        type="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
        error={errors.password?.message}
      />
      <Input
        label="Confirmar senha"
        id="password"
        type="password"
        placeholder="Digite novamente sua senha"
        error={errors.password?.message}
      />

      <Input
        label="Bio"
        id="bio"
        type="text"
        placeholder="Fale sobre voçê"
        {...register("bio")}
        error={errors.bio?.message}
      />

      <Input
        label="contato"
        id="contact"
        type="text"
        placeholder="Opção de contato"
        {...register("contact")}
        error={errors.contact?.message}
      />
      <div>
        <label>Selecionar módulo</label>
        {errors.course_module && <p>{errors.course_module.message}</p>}
        <select {...register("course_module")}>
          <option value="" hidden>
            Primeiro Módulo
          </option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>
      </div>

      <button type="Submit">Cadastrar</button>
    </FormContainer>
  );
};
