import styled from "styled-components";

export const ModalAddTechs = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0;
  margin: 0;
  position: fixed;
  left: 0;
  bottom: 0;
  overflow-x: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.section`
  width: 90%;
  height: 50%;
  background-color: var(--Grey-3);
  color: var(--Grey-1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: "Inter", sans-serif;
  border-radius: 4px;

  @media (min-width: 800px) {
    width: 30%;
    height: auto;
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
  background-color: var(--Grey-2);
  color: var(--Grey-0);
  height: 15%;

  h2 {
    margin: 0;
    font-size: 1rem;
    color: var(--Grey-0);
    font-weight: bold;
  }

  svg.close-modal {
    width: 32px;
    height: 38px;
    color: var(--Grey-1);
    cursor: pointer;

    :hover {
      color: #fff;
    }
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6.51467px 0px;
    gap: 13.92px;
    width: 85%;
    min-width: 10%;
    max-width: 90%;
  }

  label {
    color: #fff;
  }

  select {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 2.5%;
    gap: 8.14px;
    font-size: 1rem;
    font-weight: 500;

    width: 100%;
    height: 38.5px;

    background-color: var(--Grey-2);
    border: 0.9772px solid var(--Grey-0);
    border-radius: 3.20867px;
    color: var(--Grey-0);

    flex: none;
    order: 1;
    flex-grow: 0;
  }

  button {
    width: 85%;
    height: 38.5px;
    color: var(--Grey-0);
    background-color: var(--Color-primary);
    border: 1px solid var(--Color-primary);
    border-radius: 4px;
    cursor: pointer;
  }

  @media (min-width: 800px) {
    gap: 10px;
    padding: 15px 0;
  }
`;
