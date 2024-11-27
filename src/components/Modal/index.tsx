import { useModal } from "../../hooks/useModal.ts";
import {
  ModalStyles,
  ModalContentStyles,
  CloseBtn,
  FieldSet,
} from "./styled.ts";
import { useState } from "react";
import { getDate } from "../../helper";
import { useNavigate } from "react-router-dom";
import { token } from "../../consts";

const Modal = () => {
  const [user, setUser] = useState<string>();
  const [typeMessage, setTypeMessage] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [isPolitic, setIsPolitic] = useState<boolean>();
  const [isAge, setIsAge] = useState<boolean>();
  const [textArea, setTextArea] = useState<string>();
  const [isShowSuggestion, _] = useState(false);
  const [loading, setLoading] = useState(false);

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
${type === "Базовый" ? "Базовый" : type === "Полный" ? "Полный" : "Консультация"}
👨‍🦰Имя: ${user}
💻Мессенджер: ${typeMessage}
📞Телефон: ${phone}
${textArea}

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
      navigate("/thanks");
    } catch (err) {
      console.error(err);
    }
  };

  const handlePoliticChange = (value: any) => {
    setIsPolitic(value.target.checked);
  };
  const handleAgeChange = (value: any) => {
    setIsAge(value.target.checked);
  };
  return (
    <ModalStyles
      isopen={isOpen ? "true" : "false"}
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
            <h2>Оставьте заявку</h2>
            <p>и я свяжусь с вами в ближайшее время</p>
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
              <input
                required
                placeholder="Ник телеграм (начиная с @)"
                value={typeMessage}
                onChange={(e) => setTypeMessage(e.target.value)}
              />
              <textarea
                style={{ marginBottom: 20 }}
                required
                placeholder="Напишите сообщение... "
                value={textArea}
                onChange={(e) => setTextArea(e.target.value)}
              />
              <FieldSet>
                <label>
                  <input
                    required
                    type="checkbox"
                    checked={isPolitic}
                    onChange={handlePoliticChange}
                  />
                  <div>
                    Выражаю{" "}
                    <a href="/approve.pdf" target="_blank">
                      согласие на обработку моих персональных данных
                    </a>{" "}
                    в соответствии с{" "}
                    <a href="/polity.pdf" target="_blank">
                      Политикой защиты персональных данных.
                    </a>
                  </div>
                </label>
              </FieldSet>

              <FieldSet>
                <label>
                  <input
                    required
                    type="checkbox"
                    checked={isAge}
                    onChange={handleAgeChange}
                  />
                  <div>Мне уже есть 18 лет.</div>
                </label>
              </FieldSet>
              <button type="submit">Отправить</button>
            </form>
          </>
        )}
      </ModalContentStyles>
    </ModalStyles>
  );
};

export default Modal;
