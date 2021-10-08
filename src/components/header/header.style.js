import styled from "styled-components";

export const Header = styled.header`
  background-color: rgb(0, 0, 0, 0.8);
  color: white;
  border: 1px solid black;
  display: flex;
  align-items: center;

  & h1 {
    font-size: 1rem;
    flex-grow: 1;
    text-align: left;
    padding-left: 10px;
  }

  & h1:hover,
  h2:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  & h2 {
    font-size: 0.6rem;
    margin: 0 7px;
  }
  @media (min-width: 500px) {
    & h1 {
      font-size: 1.3rem;
    }
    & h2 {
      font-size: 0.9rem;
    }
  }
  @media (min-width: 720px) {
    padding: 0 calc(calc(100vw - 720px) / 2);
  }
`;
