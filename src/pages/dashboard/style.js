import styled from "styled-components";

export const DashboardContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  background-color: var(--Grey-4);
  color: var(--Grey-0);
  padding: 0;
  margin: 0;
  overflow-y: hidden;
  overflow-x: hidden;
  font-family: "Inter", sans-serif;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--Grey-3);
  padding: 0 2%;
  margin-top: 20px;
  height: 60px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;

    button {
      width: 55px;
      height: 32px;
      background-color: var(--Grey-3);
      border: 1px solid var(--Grey-3);
      border-radius: 4px;
      font-weight: 600;

      a {
        text-decoration: none;
        color: var(--Grey-0);
      }
    }

    h2 {
      color: var(--Color-primary);
      margin: 0;
      font-size: 1.3rem;
    }
  }

  @media (min-width: 850px) {
    width: 50%;

    div {
      width: 100%;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 130px;
  border-bottom: 1px solid var(--Grey-3);

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    height: 100%;
    gap: 20px;
    h2 {
      margin: 0;
      font-size: 1.2rem;
    }

    p {
      margin: 0;
      color: var(--Grey-1);
    }
  }

  @media (min-width: 850px) {
    width: 50%;

    div {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const SectionTechs = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  margin-top: 10px;
  gap: 20px;

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    h3 {
      margin: 0;
      font-size: 1.1rem;
    }
    button {
      width: 42px;
      height: 32px;
      font-size: 26px;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--Grey-3);
      border: 1px solid var(--Grey-3);
      color: #fff;
      cursor: pointer;
    }
  }

  .noTech {
    color: var(--Grey-1);
  }
  @media (min-width: 850px) {
    width: 50%;
    height: auto;
  }
`;

export const ListTechs = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--Grey-3);
  width: 95%;
  height: auto;
  padding: 3%;
  gap: 10px;
  border-radius: 4px;

  li {
    list-style: none;
    background-color: var(--Grey-4);
    width: 95%;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-radius: 4px;
    cursor: pointer;

    h3 {
      font-size: 1rem;
      margin: 0;
    }

    p {
      margin: 0;
      color: var(--Grey-1);
      font-size: 12px;
    }
  }

  .card-advanced {
    background-color: var(--Grey-2);

    p {
      color: var(--Grey-0);
    }
  }

  @media (min-width: 850px) {
    padding: 2%;
    width: 97%;
  }
`;
