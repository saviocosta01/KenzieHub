import styled from "styled-components";

export const FormContainer = styled.form`
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
  h3 {
    color: var(--Grey-1);
    font-size: 14px;
  }
  h2 {
    font-size: 1.3rem;
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

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 95%;

    padding: 8.12132px 0px;
    gap: 15px;

    select {
      width: 100%;
      height: 38.38px;
      display: flex;

      align-items: center;
      padding: 0px 6.9865px;
      gap: 8.12px;
      background: var(--Grey-2);

      border: 0.973988px solid var(--Grey-0);
      border-radius: 3.19812px;
      color: #fff;

      ::-webkit-input-placeholder {
        font-size: 1rem;
      }
    }

    p {
      margin: 0;
      font-size: 14px;
      color: #e83f5b;
    }
  }
`;
