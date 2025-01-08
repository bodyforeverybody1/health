import { Container } from "../../styled.root.ts";
import {
  Column,
  FooterBottom,
  Links,
  PersonalTrainer,
  PersonalTrainerFirstName,
  PersonalTrainerLastName,
  Section,
  Wrapper,
  WrapperColumn,
} from "./styled.ts";

import IconTelegram from "../../../public/telegram.svg";
import IconInstagram from "../../../public/insta.svg";
import IconMail from "../../../public/mailIcon.svg";
import IconPhone from "../../../public/phoneIcon.svg";
import useScreenSize from "../../hooks/useScreenSize";

const Footer = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize.width <= 900;
  return (
    <Section>
      <Container>
        <Wrapper>
          {isMobile ? (
            <>
              <Column>
                <a href="/">
                  <PersonalTrainer>Персональный тренер</PersonalTrainer>
                  <PersonalTrainerFirstName>Дмитрий</PersonalTrainerFirstName>
                  <PersonalTrainerLastName>Зайцев</PersonalTrainerLastName>
                </a>
              </Column>
              <WrapperColumn>
                <Column style={{ fontSize: 14 }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    <div>
                      <a
                        href="https://t.me/TrainerDima"
                        target="_blank"
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          gap: 8,
                        }}
                      >
                        <img src={IconTelegram} alt="telegram" />
                        Telegram
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.instagram.com/dim.zaitsev"
                        target="_blank"
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          gap: 8,
                        }}
                      >
                        <img src={IconInstagram} alt="instagram" />
                        Instagram
                      </a>
                    </div>

                    <div>
                      <a
                        target="_blank"
                        href="tel:+995598108149"
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          gap: 8,
                        }}
                      >
                        <img src={IconPhone} alt="phone" />
                        +995-598-108-149
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="mailto: zaitsevdmitri96@gmail.com"
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          gap: 8,
                        }}
                      >
                        <img src={IconMail} alt="mail" />
                        zaitsevdmitri96@gmail.com
                      </a>
                    </div>
                  </div>
                </Column>
              </WrapperColumn>
            </>
          ) : (
            <>
              <Column>
                <a href="/">
                  <PersonalTrainer>Персональный тренер</PersonalTrainer>
                  <PersonalTrainerFirstName>Дмитрий</PersonalTrainerFirstName>
                  <PersonalTrainerLastName>Зайцев</PersonalTrainerLastName>
                </a>
              </Column>
              <Column>
                <Links>
                  <div>
                    <a href="/#about-me">Обо мне</a>
                  </div>
                  <div>
                    <a href="/#result">Результаты</a>
                  </div>
                  <div>
                    <a href="/#faq">FAQ</a>
                  </div>
                </Links>
              </Column>
              <Column>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 15 }}
                >
                  <div>
                    <a
                      target="_blank"
                      href="mailto: zaitsevdmitri96@gmail.com"
                      style={{ display: "flex", gap: 15 }}
                    >
                      <img src={IconMail} alt="mail" />
                      zaitsevdmitri96@gmail.com
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="tel:+995598108149"
                      style={{ display: "flex", gap: 15 }}
                    >
                      <img src={IconPhone} alt="phone" />
                      +995-598-108-149
                    </a>
                  </div>
                </div>
              </Column>
              <Column>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 15 }}
                >
                  <div>
                    <a
                      href="https://t.me/TrainerDima"
                      target="_blank"
                      style={{ display: "flex", gap: 15 }}
                    >
                      Telegram <img src={IconTelegram} alt="telegram" />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/dim.zaitsev"
                      target="_blank"
                      style={{ display: "flex", gap: 15 }}
                    >
                      Instagram <img src={IconInstagram} alt="instagram" />
                    </a>
                  </div>
                </div>
              </Column>{" "}
            </>
          )}
        </Wrapper>
        <FooterBottom>
          <div>
            <a href="/approve.pdf" target="_blank">
              Согласие на обработку персональных данных
            </a>
            <a href="/polity.pdf" target="_blank">
              Политика защиты персональных данных
            </a>
            <a href="/oferta.pdf" target="_blank">
              Публичная оферта
            </a>
          </div>
          <div>
            <a>ИП Зайцев Дмитрий (დმიტრიი ზაიცსევ) и/н 322766967</a>
          </div>

          {/*<div>*/}
          {/*  2024 by{" "}*/}
          {/*  <a href="https://www.behance.net/helenmarquise" target="_blank">*/}
          {/*    Elena Zakrevskaya*/}
          {/*  </a>*/}
          {/*</div>*/}
        </FooterBottom>
      </Container>
    </Section>
  );
};

export default Footer;
