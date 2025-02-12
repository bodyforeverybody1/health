import { Container } from "../../styled.root.ts";
import {
  Section,
  Grid,
  Content,
  StyledWrapperForm,
  StyledTitle,
  StyledContacts,
  StyledHeaderForm,
} from "./styled.ts";
import { ContactType, getDate, initContact } from "../../helper";
import { token } from "../../consts";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Span, WrapperPhone } from "../../components/Modal/styled.ts";
import Photo from "../../../public/photo-second.png";
import { PhoneComponent } from "./phone.tsx";

const Consultation = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState<string>();
  const [isValid, setIsValid] = useState(false);

  const [values, setValues] = useState({
    name: "",
    phone: "",
  });

  const [contacts, setContacts] = useState<ContactType>(initContact);
  const sendOrder = async (e: any) => {
    e.preventDefault();

    try {
      const obj = {
        // chat_id: "518174528", // home
        chat_id: "-4545168563", // work
        text: `
📆 ${getDate()}
Бесплатная 15-минутная
консультация
👨‍🦰Имя: ${values.name}
💻Мессенджер: 
${contacts.WatsApp ? "WatsApp" : ""}
${contacts.Telegram ? "Telegram" : ""}
📞Телефон: ${phone}

`,
      };
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      setContacts(initContact);
      navigate("/thanks");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleClick = (value: string) => {
    setContacts((prevState) => ({
      ...prevState,
      [value]: !contacts[value],
    }));
  };

  const handleCb = (phone: string, isValid: boolean) => {
    setPhone(phone);
    setIsValid(isValid);
  };

  return (
    <Section>
      <Container>
        <Grid>
          <div style={{ display: "flex", flexDirection: "column", gap: "3vw" }}>
            <Content>
              <h2>Бесплатная 15-минутная</h2>
              <h2>консультация с тренером</h2>
            </Content>
            <img className="img mobile" src={Photo} alt="image" />

            <StyledWrapperForm>
              <StyledHeaderForm>
                <StyledTitle>Где с вами удобнее связаться</StyledTitle>
                <StyledContacts>
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
                </StyledContacts>
              </StyledHeaderForm>

              <form onSubmit={sendOrder}>
                <input
                  required
                  placeholder="Ваше имя"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />

                <WrapperPhone>
                  <PhoneComponent cb={handleCb} />
                </WrapperPhone>

                {!isValid && (
                  <div style={{ color: "red" }}>Phone is not valid</div>
                )}
                <button className="btn" disabled={!isValid} type="submit">
                  Отправить
                </button>
              </form>
            </StyledWrapperForm>
          </div>
          <div>
            <img className="img" src={Photo} alt="image" />
          </div>
        </Grid>
      </Container>
    </Section>
  );
};

export default Consultation;
