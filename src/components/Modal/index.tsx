import { useModal } from "../../hooks/useModal.ts";
import {
  ModalStyles,
  ModalContentStyles,
  CloseBtn,
  StyledConnect,
  StyledSubDescription,
  StyledUl,
  Span,
} from "./styled.ts";
import { useState } from "react";
import { ContactType, getDate, initContact } from "../../helper";
import { useNavigate } from "react-router-dom";
import { token } from "../../consts";

const Modal = () => {
  const [user, setUser] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [isShowSuggestion, _] = useState(false);
  const [loading, setLoading] = useState(false);

  const [contacts, setContacts] = useState<ContactType>(initContact);

  const { closeModal, isOpen, type } = useModal();
  const navigate = useNavigate();

  const sendOrder = async (e: any) => {
    e.preventDefault();

    try {
      const obj = {
        // chat_id: "518174528", // home
        chat_id: "-4545168563", // work
        text: `
📆 ${getDate()}
${type}
👨‍🦰Имя: ${user}
💻Мессенджер: 
${contacts.WatsApp ? "WatsApp" : ""}
${contacts.Telegram ? "Telegram" : ""}
📞Телефон: ${phone}

`,
      };
      setLoading(true);
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      setLoading(false);
      closeModal();
      setContacts(initContact);
      setUser("");
      setPhone("");
      navigate("/thanks");
    } catch (err) {
      console.error(err);
    }
  };

  const handleClick = (value: string) => {
    setContacts((prevState) => ({
      ...prevState,
      [value]: !contacts[value],
    }));
  };
  return (
    <ModalStyles
      $isOpen={isOpen ? "true" : "false"}
      onClick={() => closeModal()}
    >
      <ModalContentStyles onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={() => closeModal()}>X</CloseBtn>
        {loading ? (
          <div style={{ paddingTop: 50 }}>Отправляю запрос ...</div>
        ) : isShowSuggestion ? (
          <div>
            <h2>Спасибо за доверие!</h2>
            <p>Я скоро свяжусь с вами и проконсультирую</p>
          </div>
        ) : (
          <>
            <h2>Попробуйте бесплатную тренировку</h2>
            <p>с онлайн тренером!</p>
            <StyledSubDescription>
              Оставьте свои контакты, чтобы:
            </StyledSubDescription>
            <StyledUl>
              <li>Испытать персональный подход к тренировкам</li>
              <li>Получить оценку вашего уровня подготовки</li>
              <li>Начать путь к своим фитнес-целям прямо сейчас</li>
            </StyledUl>
            <form onSubmit={sendOrder}>
              <input
                placeholder="Ваше имя"
                required
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <input
                placeholder="Номер телефона (начиная с +)"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <StyledSubDescription>
                Где с вами удобнее связаться
              </StyledSubDescription>
              <StyledConnect>
                <Span
                  $active={contacts["WatsApp"]}
                  onClick={() => handleClick("WatsApp")}
                >
                  WhatsApp
                </Span>
                <Span
                  $active={contacts["Telegram"]}
                  onClick={() => handleClick("Telegram")}
                >
                  Telegram
                </Span>
              </StyledConnect>

              <button type="submit">Отправить</button>
            </form>
          </>
        )}
      </ModalContentStyles>
    </ModalStyles>
  );
};

export default Modal;
