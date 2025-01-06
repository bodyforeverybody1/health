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
            <FullName>
              <a href="/">ДМИТРИЙ ЗАЙЦЕВ</a>
            </FullName>
            <Elements>
              <a href="/">Результаты</a>
              <a href="/#faq">FAQ</a>
              <a href="/">Отзывы</a>
            </Elements>

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
