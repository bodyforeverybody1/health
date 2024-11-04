import styled from "styled-components";

export const Section = styled.div`
  background: rgba(29, 29, 29, 1);
  padding: 80px 0 0;

  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

export const Image = styled.img`
  width: 121px;
  height: 76px;
  @media (max-width: 768px) {
    width: 80px;
    height: 51px;
  }
`;

export const Button = styled.button`
  background: rgba(255, 190, 11, 1);
  font-size: 1.1vw;
  padding: 30px 150px;
  position: relative;
  z-index: 5;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  color: black;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.div`
  font-family: "BebasNeueBold", sans-serif;
  font-size: 8.3vw;
  text-transform: uppercase;
  font-weight: bold;
`;

export const WrapperTitle = styled.div`
  position: relative;
  top: -4vw;
  font-family: "BebasNeueBold", sans-serif;
  font-size: 8.3vw;

  ${Title}:last-child {
    position: relative;
    top: -5.2vw;
  }
`;

export const Description = styled.div`
  font-size: 1.8vw;
  font-weight: bold;
  margin-bottom: 40px;
  line-height: 2vw;

  @media (max-width: 768px) {
    font-size: 3.5vw;
    margin-bottom: 0;
    line-height: 4vw;
  }
`;

export const DescriptionWrap = styled.div`
  max-width: 44vw;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    gap: 8vw;
  }
`;

export const MobileButton = styled.button`
  background: rgba(255, 190, 11, 1);
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 60px;
  position: relative;
  top: -6vw;
  cursor: pointer;
  color: black;
  @media (min-width: 768px) {
    display: none;
  }
`;
