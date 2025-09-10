import styled from "styled-components";

export const Section = styled.div`
  background: rgba(29, 29, 29, 1);
  padding: 80px 0;
  margin-top: 50px;

  @media (max-width: 768px) {
    padding: 50px 0;
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

  transition: all 0.3s;
  &:hover {
    background: gray;
  }

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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 22vw;
  gap: 5vw;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
  & img.img {
    width: 100%;
    @media (max-width: 1023px) {
      display: none;
    }

    &.mobile {
      display: none;
      @media (max-width: 1023px) {
        display: block;
      }
    }
  }
`;

export const StyledHeaderForm = styled.div``;

export const Content = styled.div`
  h2 {
    margin: 0;
    font-size: 6.8vw;
    font-family: "BebasNeueBold", sans-serif;
    line-height: 6vw;
    @media (max-width: 1023px) {
      font-size: 9.5vw;
      line-height: 9vw;
    }
  }
`;

export const StyledWrapperForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }

  & form {
    display: flex;
    flex-direction: column;
    gap: 1vw;

    @media (max-width: 1023px) {
      gap: 20px;
    }

    & input {
      padding: 0 10px;
      color: white;
      border-radius: 5px;
      border: 1px solid #5a5a5a;
      background: rgba(29, 29, 29, 1);
      height: 58px;
    }
  }
`;

export const StyledTitle = styled.h3`
  margin: 0;
  text-transform: uppercase;
  font-size: 1vw;
  font-weight: 400;

  @media (max-width: 1023px) {
    font-size: 12px;
    text-align: center;
  }
`;

export const StyledContacts = styled.div`
  padding-top: 4vw;
  display: flex;
  gap: 2vw;

  @media (max-width: 1023px) {
    justify-content: center;
    margin-bottom: 30px;
  }
`;
