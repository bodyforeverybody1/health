import { useModal } from "../../hooks/useModal.ts";
import { ModalStyles, ModalContentStyles, CloseBtn } from "./styled.ts";
import { useState } from "react";
import { getDate } from "../../helper";
import { token } from "../../consts";

const Modal = () => {
  const [user, setUser] = useState<string>();
  const [typeMessage, setTypeMessage] = useState<string>();
  const [textArea, setTextArea] = useState<string>();

  const { closeModal, isOpen } = useModal();

  const sendOrder = async (e: any) => {
    e.preventDefault();

    try {
      const obj = {
        // chat_id: "518174528", // home
        chat_id: "-4545168563", // work
        text: `
📆 ${getDate()}
Имя: ${user}
Мессенджер: ${typeMessage}
${textArea}

`,
      };
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      closeModal();
      setUser("");
      setTypeMessage("");
      setTextArea("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ModalStyles isOpen={isOpen} onClick={() => closeModal()}>
      <ModalContentStyles onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={() => closeModal()}>X</CloseBtn>
        <form onSubmit={sendOrder}>
          <h2>Оставьте заявку</h2>
          <p>и я свяжусь с вами в ближайшее время</p>

          <input
            placeholder="Ваше имя"
            required
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            required
            placeholder="Мессенджер"
            value={typeMessage}
            onChange={(e) => setTypeMessage(e.target.value)}
          />
          <textarea
            required
            placeholder="Напишите сообщение... "
            value={textArea}
            onChange={(e) => setTextArea(e.target.value)}
          />
          <button type="submit">Отправить</button>
        </form>
      </ModalContentStyles>
    </ModalStyles>
  );
};

export default Modal;
