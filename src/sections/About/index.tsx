import { Container } from "../../styled.root.ts";
import {
  Card,
  Content,
  Description,
  Title,
  TitleSection,
  Wrapper,
} from "./styled.ts";
import { ABOUT_TEXT } from "../../consts";

const About = () => {
  return (
    <section>
      <Container>
        <Wrapper>
          <TitleSection>О тренере</TitleSection>
          <Content>
            {ABOUT_TEXT.map((item, index) => (
              <Card key={item.titleFirst} left={index % 2 == 0}>
                <Title>
                  <span>{item.titleFirst}</span> {item.titleSecond}
                </Title>
                <Description>{item.description}</Description>
              </Card>
            ))}
          </Content>
        </Wrapper>
      </Container>
    </section>
  );
};

export default About;
