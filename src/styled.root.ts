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
  text-transform: uppercase;
  font-weight: bold;
  padding: 0 0 15px;
  letter-spacing: -0.1vw;
  margin: 0;
  @media (max-width: 1280px) {
    font-size: 30px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: "Bebas Neue", sans-serif;
  //font-size: 4.3vw;
  text-transform: uppercase;
  font-weight: bold;
  //padding-top: 100px;
  //padding-bottom: 15px;
  //letter-spacing: -0.5vw;

  & span {
    font-size: 4.1vw;
    line-height: 4.1vw;
    padding: 0;
    margin: 0;
    letter-spacing: -5px;

    @media (max-width: 768px) {
      font-size: 7.6vw;
      line-height: 7.6vw;
    }
  }
`;
