import {
  Section,
  WrapperText,
  DescriptionName,
  Block,
  FirstName,
  LastName,
  ButtonConsult,
  CircleText,
  BlockWrapper,
  WrapperCircle,
} from "./styled.ts";
import { Container } from "../../styled.root.ts";

import { useModal } from "../../hooks/useModal.ts";

const Header = () => {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal();
  };
  return (
    <Section>
      <Container>
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
