import styled from "styled-components";

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
    min-height: auto;
  }
`;
export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & ul {
    list-style-type: none;
    padding: 0;
    & li {
      display: flex;
      margin-bottom: 5px;
      padding-left: 20px;
      position: relative;
      @media (max-width: 768px) {
        font-size: 12px;
      }

      &:before {
        content: "";
        width: 16px;
        height: 18px;
        background-image: url("/ArrowIconLi.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        display: inline-block;
        margin-right: 5px;
        position: absolute;
        top: 4px;
        left: 0;
      }
    }
  }
`;
export const Type = styled.div`
  width: 160px;
  background: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 10px 10px 0;

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

  @media (max-width: 768px) {
    font-size: 22px;
    margin: 0;
  }
`;
export const CardDescription = styled.div`
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const CardFooter = styled.div`
  height: 85px;
  display: flex;
  margin-top: auto;

  @media (max-width: 1280px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 768px) {
    height: auto;
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
      padding: 25px;
    }
  }
  & button:first-child {
    background: rgba(255, 190, 11, 1);
    color: rgba(20, 20, 20, 1);
    font-family: Inter, sans-serif;
    font-weight: bold;
    border-radius: 0 0 0 10px;
    cursor: pointer;
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
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 1.5vw;

    @media (max-width: 1280px) {
      font-size: 20px;
      border: none;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`;
