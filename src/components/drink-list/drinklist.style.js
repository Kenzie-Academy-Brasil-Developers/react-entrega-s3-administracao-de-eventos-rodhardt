import styled from "styled-components";

export const DrinkListContainer = styled.div`
  color: white;

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
`;
