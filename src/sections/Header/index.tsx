import {
  Section,
  Wrapper,
  Line,
  WrapperText,
  DescriptionName,
  Block,
  FirstName,
  LastName,
  ButtonConsult,
  CircleText,
  Elements,
  FullName,
  Links,
  BlockWrapper,
  WrapperCircle,
} from "./styled.ts";
import { Container } from "../../styled.root.ts";
import IconTelegram from "../../../public/telegram.svg";
import IconInstagram from "../../../public/insta.svg";
import { useModal } from "../../hooks/useModal.ts";

const Header = () => {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal();
    console.log("open modal Order");
  };
  return (
    <Section>
      <Container>
        <Wrapper>
          <Elements>
            <a href="/">Найди себя</a>
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
        <WrapperText>
          <FirstName>
            <span className="name">ДМИТРИЙ</span>
            <span className="trainer">Персональный тренер</span>
          </FirstName>
          <DescriptionName>
            Индивидуальные программы тренировок и рекомендации по питанию для
            вашей идеальной фигуры в комфортной форме с поддержкой и мотивацией
          </DescriptionName>
          <LastName>
            <span className="name">ЗАЙЦЕВ</span>
            <span className="trainer">Дистанционное ведение</span>
          </LastName>
        </WrapperText>
      </Container>
      <BlockWrapper>
        <Block>
          <WrapperCircle>
            <CircleText />
            <a href="/#video">
              <img src="/Arrow.svg" alt="icon" />
            </a>
          </WrapperCircle>
        </Block>
      </BlockWrapper>
      <ButtonConsult onClick={() => handleClick()}>
        Бесплатная консультация
      </ButtonConsult>
    </Section>
  );
};

export default Header;
