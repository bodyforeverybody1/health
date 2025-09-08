import { Container, RootTitle } from "../../styled.root.ts";
import {
  Card,
  CardDescription,
  CardsWrapper,
  CardTitle,
  CardWrapper,
  Price,
  CardFooter,
} from "./styled.ts";
import { useModal } from "../../hooks/useModal.ts";

const Rate = () => {
  const { openModal } = useModal();
  return (
    <section>
      <Container>
        <RootTitle>Тарифы</RootTitle>
        <CardsWrapper>
          <CardWrapper>
            <Card>
              <div style={{ padding: 25, borderRadius: "10px 0 0 0" }}>
                <CardTitle>Первый шаг</CardTitle>
                <CardDescription>
                  Начни легко с базовыми тренировками и поддержкой!
                </CardDescription>
                <ul>
                  <li>Частота тренировок: 2 тренировки в неделю.</li>
                  <li>Контроль техники и прогресса: <br />
                  - Еженедельная проверка отчета и корректировка техники выполнения упражнений</li>
                  <li>Программа питания: <br />
                  - Общие рекомендации по питанию без составления меню</li>
                  <li>Аудиозвонки: 1 аудиозвонок в месяц
                  </li>
                  <li>
                    Поддержка: Текстовые сообщения в рабочее время
                  </li>
                </ul>
              </div>
              <Price>$150</Price>
              <CardFooter>
                <button onClick={() => openModal("Первый шаг")}>
                  записаться на пробную тренировку
                </button>
              </CardFooter>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card>
              <div style={{ padding: 25, borderRadius: "10px 0 0 0" }}>
                <CardTitle>Прокачай себя</CardTitle>
                <CardDescription>
                  Сбалансированная программа для тех, кто готов на большее!
                </CardDescription>
                <ul>
                  <li>Частота тренировок: 2-3 тренировки в неделю.</li>
                  <li>
                  Контроль техники и прогресса: <br />
                  - Проверка отчета и корректировка техники выполнения упражнений после каждой тренировки <br />
                  - Контроль техники в реальном времени в формате видеозвонка 2 раза в месяц
                  </li>
                  <li>
                    Программа питания: <br />
                    -Составление индивидуального рациона с еженедельной 
                  </li>
                  <li>Аудиозвонки: 4 аудиозвонка в месяц</li>
                  <li>
                    Видеовстречи: 2 видеозвонка в месяц.
                  </li>
                  <li>
                    Поддержка: Текстовые сообщения в рабочее время
                  </li>
                  <li>Заморозка программы: до 7 дней в месяц.</li>
                </ul>
              </div>
              <Price>$320</Price>
              <CardFooter>
                <button onClick={() => openModal("Прокачай себя")}>
                  записаться на пробную тренировку
                </button>
              </CardFooter>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card>
              <div style={{ padding: 25, borderRadius: "10px 0 0 0" }}>
                <CardTitle>Звёздный результат</CardTitle>
                <CardDescription>
                  Максимум внимания и индивидуальный подход для идеального
                  результата!
                </CardDescription>
                <ul>
                  <li>Частота тренировок: 2-4 тренировок в неделю.</li>
                  <li>
                  Контроль техники и прогресса: <br />
                  - Проверка отчета и корректировка техники выполнения упражнений после каждой тренировки<br />
                  - Контроль техники в реальном времени в формате видеозвонка - до 3-х раз в неделю<br />
                  - Обучение принципам и методикам тренировок
                  </li>
                  <li>
                    Разбор техники: прохождение зачетов по технике выполнения
                    упражнений посредством видеозаписей или в режиме реального
                    времени.
                  </li>
                  <li>
                    Программа питания: <br />
                    - Составление индивидуального рациона с корректировками с
                  </li>
                  <li>
                    Обучение: элементы обучения сбалансированному рациональному
                    питанию и методикам тренировок.
                  </li>
                  <li>Аудиозвонки: неограниченно по согласованию</li>
                  <li>Видеовстречи: неограниченно по согласованию</li>
                  <li>
                    Поддержка: 24/7 (текстовые, голосовые и видеосообщения)
                  </li>
                  <li>Заморозка программы: до 7 дней в месяц.</li>
                </ul>
              </div>
              <Price>$410</Price>
              <CardFooter>
                <button onClick={() => openModal("Звёздный результат")}>
                  записаться на пробную тренировку
                </button>
              </CardFooter>
            </Card>
          </CardWrapper>
        </CardsWrapper>
      </Container>
    </section>
  );
};

export default Rate;
