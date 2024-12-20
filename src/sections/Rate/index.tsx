import { Container, RootTitle } from "../../styled.root.ts";
import {
  Card,
  CardDescription,
  CardsWrapper,
  CardTitle,
  CardWrapper,
  Type,
  CardFooter,
} from "./styled.ts";
import { useModal } from "../../hooks/useModal.ts";

const Rate = () => {
  const { openModal } = useModal();
  return (
    <Container>
      <RootTitle>Выбери свой тариф</RootTitle>
      <CardsWrapper>
        <CardWrapper>
          <Card>
            <div style={{ padding: 25, borderRadius: "10px 0 0 0" }}>
              <CardTitle>Базовый</CardTitle>
              <CardDescription>
                <div>Ведение по рациону питания/обучение</div>
                <div> на 1 месяц</div>
              </CardDescription>
              <ul>
                <li>Составление сбалансированного рациона, корректировки</li>
                <li>
                  Обучение по средствам обратной связи (текст, голосовые,
                  видео-встречи)
                </li>
                <li>Общие рекомендации по активности и образу жизни</li>
              </ul>
            </div>
            <CardFooter>
              <button onClick={() => openModal("Базовый")}>ОФОРМИТЬ</button>
              <button>$320</button>
            </CardFooter>
          </Card>
          <Type>
            <span>Серебро</span>
          </Type>
        </CardWrapper>
        <CardWrapper>
          <Card>
            <div
              style={{
                padding: 25,
                borderRadius: "10px 0 0 0",
              }}
            >
              <CardTitle>Полный</CardTitle>
              <CardDescription>
                <div>Ведение по фитнесу (полное сопровождение)</div>
                <div>на 1 месяц</div>
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
            </div>
            <CardFooter>
              <button onClick={() => openModal("Полный")}>ОФОРМИТЬ</button>
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
