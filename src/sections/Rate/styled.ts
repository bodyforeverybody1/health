import styled from "styled-components";

export const Title = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 5.3vw;
  text-transform: uppercase;
  font-weight: bold;
  padding-top: 100px;
  padding-bottom: 15px;
  letter-spacing: -0.5vw;
`;

export const CardsWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
export const CardWrapper = styled.div`
  width: 50%;
  display: flex;
  min-height: 650px;
  background: #1d1d1d;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px;

  & ul li::marker {
    color: rgba(255, 190, 11, 1);
  }
`;
export const Type = styled.div`
  width: 160px;
  background: #333333;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1280px) {
    display: none;
  }

  & span {
    display: block;

    font-size: 5.2vw;
    font-family: "Bebas Neue", sans-serif;
    color: rgba(29, 29, 29, 1);
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: -8px;
    transform: rotate(-90deg);
  }
`;
export const CardTitle = styled.h3`
  font-size: 40px;
  margin-bottom: -10px;
`;
export const CardDescription = styled.div``;
export const CardFooter = styled.div`
  height: 85px;
  display: flex;
  margin-top: auto;

  @media (max-width: 1280px) {
    flex-direction: column-reverse;
  }

  & button {
    height: 100%;
    width: 50%;
    text-transform: uppercase;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 1.1vw;
    @media (max-width: 1280px) {
      width: 100%;
    }
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  & button:first-child {
    background: rgba(255, 190, 11, 1);
    color: rgba(20, 20, 20, 1);
    font-family: Inter, sans-serif;
    font-weight: bold;
    border-radius: 0 0 0 10px;
    @media (max-width: 1280px) {
      border-radius: 0 0 10px 10px;
    }
    &::before {
      content: "";
      display: block;
      width: 2.6vw;
      height: 1.6vw;
      background: url("/Elements.png") no-repeat center;
      background-size: cover;

      @media (max-width: 768px) {
        width: 30px;
        height: 19px;
      }
    }
    &:after {
      content: "";
      display: block;
      width: 2.6vw;
      height: 1.6vw;
      background: url("/Elements.png") no-repeat center;
      background-size: cover;
      transform: rotate(180deg);
      @media (max-width: 768px) {
        width: 30px;
        height: 19px;
      }
    }
  }
  & button:last-child {
    background: transparent;
    color: white;
    font-family: Inter, sans-serif;
    font-weight: bold;
    border: 1px solid black;

    @media (max-width: 1280px) {
      border: none;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`;
