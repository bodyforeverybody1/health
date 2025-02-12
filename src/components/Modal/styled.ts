import styled from "styled-components";

export const ModalStyles = styled.div<{ $isOpen: string }>`
  position: fixed;
  top: ${({ $isOpen }) => ($isOpen === "true" ? 0 : "-500px")};
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  transition: all 0.3s;
  height: ${({ $isOpen }) => ($isOpen === "true" ? "100vh" : 0)};
  opacity: ${({ $isOpen }) => ($isOpen === "true" ? "1" : "0")};

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
      max-height: 300px;
    }
    // TODO: на мобилке убирает маштабирование при фокусе на елементы
    //input,
    //textarea {
    //  font-size: 16px;
    //}
  }
`;

export const ModalContentStyles = styled.div`
  background-color: rgba(20, 20, 20, 1);
  padding: 0 80px 80px 80px;
  border-radius: 4px;
  width: 60%;
  text-align: center;
  min-width: 500px;
  position: relative;
  border: 1px solid white;

  @media (max-width: 768px) {
    min-width: 80%;
    padding: 30px;
  }

  & h2 {
    color: rgba(255, 190, 11, 1);
    font-size: 40px;
    margin-bottom: 0;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  & p {
    margin-top: -5px;
    font-size: 40px;
    font-weight: bold;
    line-height: 36px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  & input {
    background: transparent;
    border: 1px solid rgba(90, 90, 90, 1);
    padding: 20px;
    border-radius: 10px;
    color: white;
    width: 50%;
    //max-width: 400px;
    //margin: 0 auto;

    @media (max-width: 1023px) {
      width: 80%;
      padding: 10px 20px;
    }
  }
  button {
    background: rgba(255, 190, 11, 1);
    padding: 20px;
    border-radius: 10px;
    text-transform: uppercase;
    font-size: 22px;
    font-weight: bold;
    border: none;
    cursor: pointer;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
export const CloseBtn = styled.span`
  right: 25px;
  position: absolute;
  top: 25px;
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background: rgba(30, 30, 30, 1);
  color: rgba(155, 155, 155, 1);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1023px) {
    top: 10px;
  }
`;

export const StyledSubDescription = styled.span`
  color: rgba(255, 190, 11, 1);
  font-size: 1vw;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    align-items: flex-start;
    margin-bottom: 20px;
  }

  & li {
    font-size: 1vw;
    position: relative;

    @media (max-width: 768px) {
      font-size: 12px;
    }

    &:first-child:before {
      content: "";
      position: absolute;
      left: -35px;
      width: 24px;
      height: 24px;
      background-image: url("/award.svg");
    }
    &:nth-child(2):before {
      content: "";
      position: absolute;
      left: -35px;
      width: 24px;
      height: 24px;
      background-image: url("/task-square.svg");
    }
    &:nth-child(3):before {
      content: "";
      position: absolute;
      left: -35px;
      width: 24px;
      height: 24px;
      background-image: url("/gps.svg");
    }
  }
`;

export const StyledConnect = styled.div`
  display: flex;
  justify-content: center;
  gap: 2vw;
`;
export const Span = styled.span<{ $active: boolean }>`
  background: ${({ $active }) => ($active ? "rgba(255, 190, 11, 1)" : "gray")};
  padding: 15px 40px;
  display: inline-block;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

export const WrapperPhone = styled.div`
  & button {
    padding: 0;
  }
  & input {
    width: 100%;
  }
`;
