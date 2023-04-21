import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import { ModalAddTechs, Modal, ModalHeader, ModalForm } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoIosClose } from "react-icons/io";
import { Input } from "../../input";

export const AddTechs = () => {
  const { onSubmitAddTech, setAddTechs } = useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo Obrigatorio"),
    status: yup.string().required("Campo Obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <ModalAddTechs>
      <Modal>
        <ModalHeader>
          <h2>Cadastrar Tecnologia</h2>

          <IoIosClose
            className="close-modal"
            onClick={() => setAddTechs(false)}
          />
        </ModalHeader>

        <ModalForm onSubmit={handleSubmit(onSubmitAddTech)}>
          <Input
            label="Nome"
            placeholder="Nome da tecnologia"
            {...register("title")}
            id="Nome"
            error={errors.title?.message}
          />

          <div>
            <label>Selecionar status</label>
            <select {...register("status")}>
              {errors.status && <p>{errors.status.message}</p>}
              <option value="Iniciante" hidden>
                Iniciante
              </option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediario">Intermediario</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>

          <button type="submit">Cadastrar Tecnologia</button>
        </ModalForm>
      </Modal>
    </ModalAddTechs>
  );
};
