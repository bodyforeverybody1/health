import styled from "styled-components";

export const Section = styled.div`
  font-size: 0.9vw;
  color: rgba(255, 255, 255, 1);
  background: #1e1e1e;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1vw;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    margin-top: 3vw;
  }
`;

export const Line = styled.div`
  background: rgba(90, 90, 90, 1);
  height: 1px;
  margin-bottom: 0.5vw;
`;

export const Elements = styled.div`
  display: flex;
  gap: 1.5vw;

  a {
    text-decoration: none;
    color: white;
    transition: all 0.3s;
    font-size: 0.9vw;
    &:hover {
      color: rgba(255, 190, 11, 1);
    }
    @media (max-width: 1023px) {
      font-size: 18px;
    }
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
    display: none;
  }
  @media (min-width: 768px) {
    font-size: 0.9vw;
  }
`;

export const StyledElement = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5.4vw;
  position: relative;

  &:before {
    content: "";
    background-image: url("/ConsultIconArrow.png");
    background-size: contain;
    background-position: center;
    width: 4.4vw;
    height: 2.8vw;
    position: absolute;
    left: 0;
  }

  @media (max-width: 1023px) {
    font-size: 3vw;
  }
`;

export const StyledTitle = styled.h2`
  font-family: "BebasNeueBold", sans-serif;
  font-size: 3.1vw;
  text-transform: uppercase;
  margin: 0;
  line-height: 2.7vw;

  & span {
    color: #ffbe0b;
  }

  @media (max-width: 1023px) {
    line-height: 5vw;
    font-size: 5.1vw;
  }
`;

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 33.5vw;
  padding: 100px 0;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    padding: 20px 0;
  }
`;

export const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.7vw;
  padding-top: 5vw;
`;

export const StyledPhotoBlock = styled.div`
  & .mobile {
    display: none;

    @media (max-width: 1023px) {
      display: block;
      padding: 20px 0;
      margin-bottom: 20px;
    }
  }
  & .photo {
    width: 33.5vw;
    height: 33.5vw;
    border-radius: 50%;
    margin-bottom: 40px;
    overflow: hidden;
    position: relative;

    @media (max-width: 1023px) {
      display: none;
    }
    //@media (max-width: 1023px) {
    //  width: 90vw;
    //  height: 90vw;
    //  margin-top: 15px;
    //}
  }
`;

export const StyledName = styled.div`
  font-family: "BebasNeueBold", sans-serif;
  font-size: 5.1vw;
  text-align: center;
  line-height: 5vw;

  @media (max-width: 1023px) {
    font-size: 15vw;
    margin-bottom: 10px;
  }
`;

export const StyledDescription = styled.div`
  font-size: 1vw;
  text-align: center;
  text-transform: uppercase;
  width: 18vw;
  margin: 0 auto;

  @media (max-width: 1023px) {
    width: 100%;
    font-size: 3vw;
  }
`;

export const Arrow = styled.div`
  background-image: url("/Arrow.svg");
  width: 30px;
  height: 40px;
  position: absolute;
  left: 49%;
  top: 49%;
  z-index: 1;
`;
