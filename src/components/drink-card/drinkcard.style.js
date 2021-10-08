import styled from "styled-components";

export const DrinkCardContainer = styled.div`
  & img {
    width: 50px;
    object-fit: contain;
  }
  & p {
    font-size: 0.8rem;
  }

  @media (min-width: 500px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    & h3,
    h4,
    p {
      padding: 0 20px;
    }

    & h3,
    h4 {
      width: 30%;
    }

    & h4 {
      font-size: 0.9rem;
    }

    & p {
      width: 100%;
    }
    & img {
      padding: 15px;
    }
  }
  @media (min-width: 720px) {
    & h3 {
      font-size: 1.5rem;
    }
    & h4 {
      font-size: 1.3rem;
    }
    & p {
      font-size: 1rem;
    }
  }
`;
