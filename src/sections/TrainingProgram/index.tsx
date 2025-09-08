import { Container, StyledTitle } from "../../styled.root.ts";
import styled from "styled-components";

const StyledSection = styled.section`
  padding: 100px 0;

  @media (max-width: 1023px) {
    padding: 20px 0;
  }
`;

const StyledWrapperBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4.5vw;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`;

const StyledCard = styled.div`
  background: #1d1d1d;
  padding: 2vw 2.5vw;
  border-radius: 5px;

  @media (max-width: 1023px) {
    padding: 20px;
  }
`;

const StyledCardTitle = styled.h3`
  color: #ffbe0b;
  font-size: 2vw;
  line-height: 2vw;
  text-align: center;
  margin: 0 0 1vw;

  @media (max-width: 1023px) {
    font-size: 5vw;
    line-height: 5vw;
  }
`;

const trainiers = [
  {
    title: "Бесплатная пробная тренировка",
    description:
      "Познакомьтесь с онлайн-занятиями: оцените свой уровень, попробуйте персональный подход и получите рекомендации по тренировкам и питанию. Ваш первый шаг к результату — бесплатно!",
  },
  {
    title: "Похудение",
    description:
      "Эффективная программа тренировок и питания для коррекции массы тела, устранения «проблемных зон», формирования эстетики и достижения легкости. Все это — в удобном онлайн-формате с постоянной поддержкой и индивидуальным подходом!",
  },
  {
    title: "Набор массы",
    description:
      "Программа для тех, кто хочет увеличить мышечную массу и построить сильное, подтянутое тело. Индивидуальные тренировки и план питания, разработанные с учетом вашего уровня подготовки и целей, помогут достичь результата в удобном онлайн-формате!",
  },
  {
    title: "Поддержание формы",
    description:
      "Идеальная программа для сохранения вашего тела в тонусе. Регулярные онлайн-тренировки, сбалансированный подход к питанию и гибкий график помогут вам оставаться в отличной форме, несмотря на плотный ритм жизни!",
  },
  {
    title: "Диетологическая поддержка",
    description:
      "Получите 24/7 сопровождение по вопросам питания: я подберу для вас рацион, отвечу на любые вопросы о продуктах, предложу альтернативы и способы приготовления блюд. Всё в балансе, без стресса и ограничений!",
  },
  {
    title: "Онлайн тренировки в спортзале/дома",
    description:
      "Тренируйтесь там, где вам удобно! Индивидуальные программы тренировок для фитнес-зала и дома. Эффективные программы с учётом ваших целей, наличия оборудования и уровня подготовки в формате обратной связи с ведением тренировочного дневника на основе системы субъективной оценки усилий",
  },
];

export const TrainingProgram = () => {
  return (
    <StyledSection>
      <Container>
        <StyledTitle>Программы тренировок</StyledTitle>
        <StyledWrapperBlock>
          {trainiers.map(({ title, description }) => {
            return (
              <StyledCard key={title}>
                <StyledCardTitle>{title}</StyledCardTitle>
                <div>{description}</div>
              </StyledCard>
            );
          })}
        </StyledWrapperBlock>
      </Container>
    </StyledSection>
  );
};
