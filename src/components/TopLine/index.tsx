import {
  Elements,
  FullName,
  Line,
  Links,
  Wrapper,
} from "../../sections/Header/styled.ts";
import IconTelegram from "../../../public/telegram.svg";
import IconInstagram from "../../../public/insta.svg";
import { Container } from "../../styled.root.ts";

const TopLine = () => {
  return (
    <div>
      <Container>
        <div>
          <Wrapper>
            <Elements>
              <a href="/#findme">Найди себя</a>
              <a href="/#result">Результаты</a>
              <a href="/#faq">FAQ</a>
            </Elements>
            <FullName>
              <a href="/">ДМИТРИЙ ЗАЙЦЕВ</a>
            </FullName>
            <Links>
              <div className="email">
                <a target="_blank" href="mailto: zaitsevdmitri96@gmail.com">
                  zaitsevdmitri96@gmail.com
                </a>
              </div>
              <div>
                <a href="https://t.me/TrainerDima" target="_blank">
                  <img src={IconTelegram} alt="telegram" />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/dim.zaitsev" target="_blank">
                  <img src={IconInstagram} alt="instagram" />
                </a>
              </div>
            </Links>
          </Wrapper>
          <Line />
        </div>
      </Container>
    </div>
  );
};

export default TopLine;
