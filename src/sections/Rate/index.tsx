import { Container } from "../../styled.root.ts";
import {
  Card,
  CardDescription,
  CardsWrapper,
  CardTitle,
  CardWrapper,
  Title,
  Type,
  CardFooter,
} from "./styled.ts";

const Rate = () => {
  return (
    <Container>
      <Title>
        Выбери&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;свой&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;тариф
      </Title>
      <CardsWrapper>
        <CardWrapper>
          <Card>
            <CardTitle>Базовый</CardTitle>
            <CardDescription>
              Ведение по рациону питания/обучение на 1 месяц
            </CardDescription>
            <ul>
              <li>Составление сбалансированного рациона, корректировки</li>
              <li>
                Обучение по средствам обратной связи (текст, голосовые,
                видео-встречи)
              </li>
              <li>Общие рекомендации по активности и образу жизни</li>
            </ul>
            <CardFooter>
              <button>ОФОРМИТЬ</button>
              <button>$320</button>
            </CardFooter>
          </Card>
          <Type>
            <span>Серебро</span>
          </Type>
        </CardWrapper>
        <CardWrapper>
          <Card>
            <CardTitle>Полный</CardTitle>
            <CardDescription>
              Ведение по фитнесу (полное сопровождение) на 1 месяц
            </CardDescription>
            <ul>
              <li>Составление плана на каждый тренировочный день</li>
              <li>Составление, корректировка рациона</li>
              <li>
                Корректировка техники выполнения упражнений по средствам
                обратной связи (текст, голосовые, видео-встречи)
              </li>
              <li>Ведение тренировочного дневника</li>
              <li>Обучение</li>
              <li>Заморозка ведения: до семи дней болезни в месяц</li>
            </ul>
            <CardFooter>
              <button>ОФОРМИТЬ</button>
              <button>$440</button>
            </CardFooter>
          </Card>
          <Type>
            <span>Золото</span>
          </Type>
        </CardWrapper>
      </CardsWrapper>
    </Container>
  );
};

export default Rate;
