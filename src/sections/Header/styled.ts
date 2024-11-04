import styled, { keyframes } from "styled-components";

export const Section = styled.div`
  font-size: 0.9vw;
  color: rgba(255, 255, 255, 1);
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1vw 0;
  @media (max-width: 768px) {
    margin-top: 3vw;
  }
`;

export const Line = styled.div`
  background: rgba(90, 90, 90, 1);
  height: 1px;
  margin-bottom: 0.5vw;
`;

const MixinName = `
  font-family: "BebasNeueBold", sans-serif;
  font-weight: bold;

    font-size: 11.9vw;
    line-height: 11.9vw;
    transform: scale(1, 1.2);
    position: relative;
    top: 10px;

  // @media (min-width: 768px) {
  //  font-size: 7.5vw;
  // }

  `;

export const FirstName = styled.div`
  display: flex;
  flex-direction: column;
  span.name {
    display: inline-block;
    ${MixinName}
  }
  span.trainer {
    display: inline-block;
    color: rgba(255, 255, 255, 0.5);
    font-size: 2vw;
    position: relative;
    top: 1.3vw;
    @media (min-width: 768px) {
      max-width: 6.5vw;
      margin-top: 16px;
      //margin-left: 16px;
      font-size: 1vw;
      line-height: 1vw;
      top: -1.1vw;
    }
  }
`;

export const LastName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span.name {
    display: inline-block;
    ${MixinName}
  }
  span.trainer {
    display: inline-block;
    color: rgba(255, 255, 255, 0.5);
    text-align: right;
    font-size: 2vw;
    position: relative;
    top: 1vw;
    @media (min-width: 768px) {
      max-width: 7.5vw;
      font-size: 1vw;
      line-height: 1vw;
      top: -1.3vw;
    }
  }
`;

export const WrapperText = styled.div`
  display: flex;
  gap: 4vw;
  padding-top: 2.6vw;
  justify-content: space-between;
  position: relative;

  @media (min-width: 768px) {
    justify-content: normal;
    position: relative;
    z-index: 1;
  }
`;

export const DescriptionName = styled.h1`
  //width: 19.7vw;
  font-size: 1vw;
  text-align: justify;
  text-transform: uppercase;
  line-height: 1.3vw;
  font-weight: normal;
  margin-top: 0;

  @media (max-width: 768px) {
    position: absolute;
    bottom: -15vw;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2.5vw;
    line-height: 3vw;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Circle = styled.a`
  display: flex;
  width: 1.5vw;
  height: 2vw;
  //background: url("../../../public/Arrow.svg");

  //clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  //background: white;
  //border-radius: 15%;
  //transform: translateX(-25px);
  //position: absolute;
  //left: 50%;
  //bottom: 4.5vw;
  transition: all 0.3s;
  &:hover {
    background: rgba(255, 190, 11, 1);
  }

  @media (max-width: 768px) {
    bottom: 12vw;
  }
`;

export const CircleText = styled.div`
  height: 135px;
  width: 135px;

  background: url("/Text.png") no-repeat center bottom;
  background-size: contain;
  animation: ${rotate} 10s linear infinite;

  //&:before {
  //  content: url("../../../public/Arrow.svg");
  //  height: 40px;
  //  width: 30px;
  //}
  @media (min-width: 768px) {
    width: 11.6vw;
    height: 11.6vw;
  }
`;

export const WrapperCircle = styled.div`
  position: relative;

  a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-12px, -17px);
  }
`;

export const Block = styled.div`
  height: 390px;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(247, 164, 26, 1) 48%,
    rgba(242, 225, 8, 1) 98%
  );
  border-radius: 21vw;
  &:before {
    content: "";
    position: absolute;
    background: url("/Photo.png") no-repeat center bottom;
    background-size: contain;
    height: 100%;
    width: 100%;
  }

  @media (min-width: 768px) {
    height: 38vw;
    background: linear-gradient(
      180deg,
      rgba(247, 164, 26, 1) 48%,
      rgba(242, 225, 8, 1) 98%
    );
    border-radius: 22vw;
    position: relative;
    top: -5.5vw;
    //z-index: -1;

    &:before {
      content: "";
      width: 34.3vw;
      background-size: contain;
      height: 35vw;
    }
  }
`;

export const Elements = styled.div`
  display: flex;
  gap: 1.5vw;

  a {
    text-decoration: none;
    color: white;
    transition: all 0.3s;
    &:hover {
      color: rgba(255, 190, 11, 1);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 1200px) {
    font-size: 1.8vw;
  }
`;

export const FullName = styled.div`
  a {
    text-decoration: none;
    color: white;
    transition: all 0.3s;
    //font-size: 0.9vw;
    &:hover {
      color: rgba(255, 190, 11, 1);
    }
  }
  @media (max-width: 768px) {
    font-size: 3.8vw;
  }
  @media (min-width: 768px) {
    font-size: 0.9vw;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    gap: 4.5vw;
  }
  @media (min-width: 768px) {
    gap: 1.5vw;
  }

  a {
    text-decoration: none;
    color: white;
    transition: all 0.3s;
    &:hover {
      color: rgba(255, 190, 11, 1);
    }
  }
  @media (max-width: 1200px) {
    font-size: 1.8vw;
  }

  & div.email {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const BlockWrapper = styled.div`
  padding-top: 20vw;
  @media (min-width: 768px) {
    max-width: 89.5vw;
    margin: 0 auto;
    padding-top: 0;
  }
`;

export const ButtonConsult = styled.button`
  background: rgba(255, 190, 11, 1);
  border-radius: 10px;
  border: none;
  height: 80px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-family: Inter, sans-serif;
  padding: 0 50px;
  margin: 0 auto;
  text-transform: uppercase;
  position: relative;
  top: -3vw;
  color: black;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: gray;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 16px;
    height: 60px;
    margin-left: 10px;
    margin-right: 10px;
  }
  &:before {
    content: "";
    width: 51px;
    height: 32px;
    background: url("/Elements.png") no-repeat center;
    background-size: contain;
  }
  &:after {
    content: "";
    width: 51px;
    height: 32px;
    background: url("/Elements.png") no-repeat center;
    background-size: contain;
    transform: rotate(180deg);
  }
`;
