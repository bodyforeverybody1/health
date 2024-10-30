import styled from "styled-components";

const CardText = `
    text-transform: uppercase;
    font-family: "Bebas Neue", sans-serif;
    color: rgba(29, 29, 29, 1);
    font-size: 3.2vw;
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
    left: -31vw;
    top: 10vw;
    @media (max-width: 768px) {
      display: none;
    }
  }
  &:after {
    content: "моих клиентов";
    ${CardText};
    top: 10vw;
    right: -28vw;
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

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 16px;
  }
`;

export const TitleSection = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 4.3vw;
  text-transform: uppercase;
  font-weight: bold;
  padding-top: 100px;
  padding-bottom: 15px;
  letter-spacing: -7px;
  line-height: 80px;

  @media (max-width: 768px) {
    font-size: 35px;
    letter-spacing: -3px;
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
