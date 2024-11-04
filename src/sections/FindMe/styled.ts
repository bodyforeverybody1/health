import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1180px) {
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled.button<{ active: boolean }>`
  width: 100%;
  height: 64px;
    font-family: "BebasNeueBold", sans-serif;
    font-weight: bold;
    border-top-right-radius: 12px;
    
    &:hover {
        color: white
    }
    
    @media (max-width: 1180px) {
        width: 33%
    }
    @media (max-width: 768px) {
        width: 100%;
        font-size: 22px
    }
    
  background: ${({ active }) => (active ? "rgba(29, 29, 29, 1)" : "black")};
  color: ${({ active }) => (active ? "white" : "rgba(155, 155, 155, 1)")};
  font-size: 28px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;
  border:  ${({ active }) => (active ? "none" : "1px solid #5A5A5A")}
}
`;

export const Content = styled.div`
  background: #1d1d1d;
  padding: 60px 45px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  gap: 30px;
  font-size: 0.8vw;

  @media (max-width: 1180px) {
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow: hidden;
    font-size: 12px;
    overflow-x: scroll;
  }
`;

export const BlockPhoto = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;

  & img {
    width: 9.3vw;
    height: 20vw;
    @media (max-width: 768px) {
      width: 130px;
      height: 100%;
    }
  }
`;
export const Card = styled.div<{ index: string }>`
  background: black;
  padding: 20px;
  width: 25%;
  line-height: 0.7vw;
  align-items: flex-end;
  position: relative;
  border-radius: 12px;

  @media (max-width: 1180px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    min-width: 260px;
    line-height: 2.7vw;
    padding: 10px;
  }

  &::after {
    content: "/${(props) => props.index}";
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3vw;
    height: 3vw;
    background: #ffbe0b;
    color: black;
    font-size: 1vw;
    border-radius: 50%;
    font-weight: bold;
    position: absolute;
    top: 2vw;
    right: 0;

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      font-size: 14px;
    }
  }
`;

export const BlockWithoutPhoto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  & img {
    width: 85px;
  }
`;
