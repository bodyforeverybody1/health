import { Container } from "../../styled.root.ts";
import {
  Section,
  Image,
  Button,
  Title,
  WrapperTitle,
  Description,
  DescriptionWrap,
  Block,
  MobileButton,
} from "./styled.ts";

const Consultation = () => {
  return (
    <Section>
      <Container>
        <div>
          <Block>
            <Image src="/ConsultIconArrow.png" alt="arrow" />
            <DescriptionWrap>
              <Description>
                Я внимательно работаю с клиентами, предлагая индивидуальные
                программы тренировок, соответствующие их физическим возможностям
                и целям. Я понимаю, что у каждого свои цели и ритм жизни,
                поэтому адаптирую программы так, чтобы вы чувствовали себя
                комфортно и могли без давления достигать результатов. Сделайте
                шаг к своей идеальной фигуре!
              </Description>
              <Button>Консультация</Button>
            </DescriptionWrap>
          </Block>
        </div>
        <WrapperTitle>
          <Title>Запись</Title>
          <Title>
            на&nbsp;&nbsp;&nbsp;&nbsp;бесплатную&nbsp;&nbsp;&nbsp;&nbsp;консультацию
          </Title>
        </WrapperTitle>
        <MobileButton>Консультация</MobileButton>
      </Container>
    </Section>
  );
};

export default Consultation;
