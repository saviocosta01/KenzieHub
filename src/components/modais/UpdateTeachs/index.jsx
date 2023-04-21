import {
  Modal,
  ModalSection,
  ModalHeader,
  ModalForm,
  DivButons,
} from "./style";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export const UpdateOrDelete = () => {
  const { register, handleSubmit } = useForm();

  const { userTech, updateStatus, deleteTech, setUpdateTech } =
    useContext(TechContext);

  return (
    <Modal>
      <ModalSection>
        <ModalHeader>
          <h3>Tecnologia Detalhada</h3>
          <IoIosClose
            className="close-modal"
            onClick={() => setUpdateTech(false)}
          />
        </ModalHeader>
        <ModalForm>
          <div className="div-form-input">
            <label htmlFor="title">Nome Do projeto</label>
            <div>
              <p>{userTech.title}</p>
            </div>
          </div>

          <div className="div-form-input">
            <label htmlFor="staus">Status</label>
            <select
              name="status"
              id=""
              defaultValue={userTech.status}
              {...register("status")}
            >
              <option value="Iniciante" hidden>
                Iniciante
              </option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediario">Intermediario</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>

          <DivButons>
            <button type="submit" onClick={handleSubmit(updateStatus)}>
              Salvar Alterações
            </button>
            <button className="btn-delte" onClick={deleteTech}>
              Excluir
            </button>
          </DivButons>
        </ModalForm>
      </ModalSection>
    </Modal>
  );
};
