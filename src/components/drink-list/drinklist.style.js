import styled from "styled-components";

export const DrinkListContainer = styled.div`
  color: white;

  & h2 {
    background-color: rgb(255, 255, 255, 0.5);
    line-height: 1.6;
  }

  & ul {
    padding: 0;
    list-style: none;
    width: 95%;
    max-width: 800px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
  }

  & li {
    margin: 30px auto 0;
  }

  & .input-drink {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 500px) {
    & ul {
      width: 90%;
    }

    & li {
      border: 2px solid white;
      padding: 5px;
    }
    & select {
      margin-right: 15px;
    }
  }
  @media (min-width: 720px) {
    & button,
    select {
      font-size: 1.2rem;
      line-height: 1.4;
    }
  }
`;
