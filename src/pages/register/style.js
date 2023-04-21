import styled from "styled-components";

export const RegisterMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--Grey-4);
  margin: 0;
  font-family: "Inter", sans-serif;

  .header-register {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10%;

    h2 {
      color: var(--Color-primary);
    }

    a {
      text-decoration: none;
      color: var(--Grey-0);
      width: 55px;
      height: 31.95px;
      font-size: 12px;
      font-weight: 500;
      background-color: var(--Grey-3);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 12.9865px;
      gap: 8.12px;
      border-radius: 3.19812px;
      border: 1px solid var(--Grey-3);
      cursor: pointer;
    }
  }
`;

export const SectionContainer = styled.section`
  width: 85%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 850px) {
    width: 30%;
  }
`;

export const RegisterForm = styled.form`
  background-color: var(--Grey-3);
  width: 95%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px 17.5897px;
  gap: 17.59px;
  color: var(--Grey-0);

  h2,
  h3 {
    margin: 0;
  }

  button {
    width: 95%;
    height: 38.38px;
    background-color: var(--Color-primary-Negative);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;
    border: 1.2182px solid var(--Color-primary-Negative);
    border-radius: 4px;
    color: #fff;
    cursor: pointer;

    :hover {
      background-color: var(--Color-primary);
    }
  }
`;
