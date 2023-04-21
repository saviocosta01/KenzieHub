import styled from "styled-components";

export const MainContainerLogin = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: var(--Grey-4);
  font-family: "Inter", sans-serif;

  h2 {
    margin: 0;
    color: var(--Color-primary);
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 1.3rem;
    font-weight: bold;
  }

  button {
    width: 79.54px;
    height: 31.95px;
    background-color: var(--Grey-3);
    display: flex;

    padding: 0px 12.9865px;
    gap: 8.12px;
    border-radius: 3.19812px;
    border: 1px solid var(--Grey-3);
    cursor: pointer;
    display: none;

    a {
      text-decoration: none;
      color: var(--Grey-0);
    }
  }

  @media (min-width: 850px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const LoginForm = styled.form`
  width: 80%;
  height: auto;
  background-color: var(--Grey-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--Grey-0);
  padding: 17.6477px;
  gap: 17.65px;
  background: #212529;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;

  span {
    font-size: 12px;
    color: var(--Grey-1);
  }
  h3 {
    margin: 0;
    font-weight: 700;
    font-size: 1.1rem;
  }

  button {
    width: 93%;
    height: 38.5px;
    min-height: 38.5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;
    border-radius: 4.06066px;
    box-sizing: border-box;
    background-color: var(--Grey-1);
    border: 1.2182px solid var(--Grey-1);
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
  }

  a {
    color: var(--Grey-0);
    text-decoration: none;
    width: 93%;
    height: 38.5px;
    min-height: 38.5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;
    border-radius: 4.06066px;
    box-sizing: border-box;
    background-color: var(--Grey-1);
    border: 1.2182px solid var(--Grey-1);
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
  }

  #button-Enter {
    background-color: var(--Color-primary);
    border: 1.2182px solid #ff577f;
    color: #fff;
  }

  @media (min-width: 850px) {
    width: 30%;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 36px 22px;
    gap: 17.65px;

    h3 {
      font-size: 1.2rem;
    }

    button {
      font-size: 1rem;
    }
  }
`;
