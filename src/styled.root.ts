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
  text-align: center;
  @media (max-width: 1280px) {
    font-size: 30px;
    margin-bottom: 10vw;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 4.1vw;
  text-transform: uppercase;
  font-family: "BebasNeueBold", sans-serif;
  text-align: center;
  margin: 0 0 2.5vw;

  @media (max-width: 1023px) {
    font-size: 7.6vw;
    margin: 15vw 0;
  }
`;
