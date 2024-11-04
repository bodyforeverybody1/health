import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;
export const Container = styled.div`
  max-width: 89.5vw;
  margin: 0 auto;
`;

export const RootTitle = styled.h2`
  font-size: 4.3vw;
  font-family: "BebasNeueBold", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0 0 15px;
  letter-spacing: -0.1vw;
  margin: 0;
  @media (max-width: 1280px) {
    font-size: 30px;
  }
`;
