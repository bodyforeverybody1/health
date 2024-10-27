import { Container } from "../../styled.root.ts";
import { Card, ImageWrapper, Title, Description, TitleSection } from "./styled";

const Result = () => {
  return (
    <section>
      <Container>
        <div>
          <TitleSection>Результаты</TitleSection>
          <div>
            <div>
              <Card>
                <ImageWrapper>
                  <img src="/photos/1Before.png" alt="1Before" />
                  <img src="/photos/1After.png" alt="1After" />
                </ImageWrapper>
                <div>
                  <Title>
                    <span>-32кг</span> за 4.5 месяца
                  </Title>
                  <Description>
                    <div>
                      Не было сильного чувства голода практически на всем
                      промежутке рекомпозиции.
                    </div>
                    <div>Тренировки 3 раза в неделю</div>
                  </Description>
                </div>
              </Card>
              {/*<div>*/}
              {/*  <button>*/}
              {/*    <img src="/ResultArrowsPrev.svg" alt="prev" />{" "}*/}
              {/*  </button>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Result;
