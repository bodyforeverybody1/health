import styled from "styled-components";

export const ModalStyles = styled.div<{ isopen: string }>`
  position: fixed;
  top: ${({ isopen }) => (isopen === "true" ? 0 : "-500px")};
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  transition: all 0.3s;
  height: ${({ isopen }) => (isopen === "true" ? "100vh" : 0)};
  opacity: ${({ isopen }) => (isopen === "true" ? "1" : "0")};

  form {
    display: flex;
    flex-direction: column;
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
  width: 300px;
  text-align: center;
  min-width: 500px;
  position: relative;
  border: 1px solid white;

  @media (max-width: 768px) {
    min-width: 80%;
    padding: 20px;
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

  & input:not([type="checkbox"]),
  textarea {
    background: transparent;
    border: 1px solid rgba(90, 90, 90, 1);
    padding: 20px;
    border-radius: 10px;
    color: white;
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
`;

export const FieldSet = styled.div`
  & label {
    display: grid;
    grid-template-columns: 25px 1fr;
    gap: 20px;
    text-align: left;

    input[type="checkbox"] {
      appearance: none; /* Убираем стандартный стиль браузера */
      width: 25px;
      height: 25px;
      background-color: black;
      border: 1px solid white;
      border-radius: 4px;
      position: relative;
      cursor: pointer;
    }

    input[type="checkbox"]:checked {
      background-color: black; /* Черный фон при активном состоянии */
    }

    input[type="checkbox"]:checked::before {
      content: "";
      position: absolute;
      top: 2px;
      left: 5px;
      width: 6px;
      height: 12px;
      border: solid white; /* Белая галочка */
      border-width: 0 2px 2px 0;
      transform: rotate(45deg); /* Галочка под углом */
    }

    & a {
      color: rgba(155, 155, 155, 1);
      text-decoration: none;
    }
  }
`;
