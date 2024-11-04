import styled from "styled-components";

const CardText = `
    text-transform: uppercase;
     font-family: "BebasNeueBold", sans-serif;
    color: rgba(29, 29, 29, 1);
    font-size: 7.2vw;
    line-height: 7.2vw;
    font-weight: bold;
    position: absolute;
`;

export const Card = styled.div`
  max-width: 550px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(29, 29, 29, 1);
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;

  &:before {
    content: "Трансформация";
    ${CardText};
    left: -35vw;
    top: 10vw;
    z-index: -1;
    letter-spacing: -0.4vw;
    @media (max-width: 768px) {
      display: none;
    }
  }
  &:after {
    content: "моих клиентов";
    ${CardText};
    top: 10vw;
    right: -32vw;
    z-index: -1;
    letter-spacing: -0.4vw;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & img {
    width: 100%;

    @media (max-width: 768px) {
      width: 50%;
    }
  }
`;

export const Title = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;
  }
  & span {
    font-size: 36px;
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 22px;
    }
  }
`;

export const Description = styled.div`
  font-size: 20px;
  line-height: 22px;
  min-height: 70px;

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 16px;
  }
`;

const Button = `
  width: 40px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  
`;
export const ButtonNext = styled.button<{ disabled: boolean }>`
  & svg path {
    fill: ${(props) =>
      props.disabled ? "rgba(255, 229, 157, 1)" : "rgba(255, 190, 11, 1)"};
    stroke: ${(props) =>
      props.disabled ? "rgba(255, 229, 157, 1)" : "rgba(255, 190, 11, 1)"};
  }
  ${Button};
`;
export const ButtonPrev = styled.button<{ disabled: boolean }>`
  & svg path {
    fill: ${(props) =>
      props.disabled ? "rgba(255, 229, 157, 1)" : "rgba(255, 190, 11, 1)"};
    stroke: ${(props) =>
      props.disabled ? "rgba(255, 229, 157, 1)" : "rgba(255, 190, 11, 1)"};
  }
  ${Button};
  transform: rotate(180deg);
`;
