import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  overflow-x: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalSection = styled.section`
  width: 90%;
  height: auto;
  background-color: var(--Grey-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Inter", sans-serif;
  border-radius: 4px;

  @media (min-width: 850px) {
    width: 30%;
    height: auto;
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 94%;
  background-color: var(--Grey-2);
  padding: 0 3%;

  h3 {
    font-size: 1rem;
    margin: 0;
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
  width: 100%;
  height: 100%;
  padding: 10px 0;

  .div-form-input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6.51467px 0px;
    width: 85%;
    gap: 13.92px;

    label {
      font-size: 12px;
      font-weight: 400;
    }

    input {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px 2.5%;
      gap: 8.14px;
      font-size: 1rem;
      font-weight: 500;

      width: 94%;
      height: 38.5px;

      background-color: var(--Grey-2);
      border: 0.9772px solid var(--Grey-0);
      border-radius: 3.20867px;
      color: var(--Grey-0);

      flex: none;
      order: 1;
      flex-grow: 0;
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

    div {
      width: 90%;
      border: 1px solid var(--Grey-2);
      padding: 0 5%;
      background-color: var(--Grey-2);
      height: 38.5px;
      border-radius: 3.20867px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const DivButons = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-bottom: 10px;

  button {
    width: 60%;
    height: 38px;
    border-radius: 4px;
    color: #ffffff;
    background-color: var(--Color-primary-Negative);
    border: 1px solid var(--Color-primary-Negative);
    cursor: pointer;

    :hover {
      background-color: var(--Color-primary);
    }
  }

  .btn-delte {
    width: 30%;
    background-color: var(--Grey-1);
    border: 1px solid var(--Grey-1);

    :hover {
      background-color: #e32636;
      border: 1px solid #e32636;
    }
  }
`;
