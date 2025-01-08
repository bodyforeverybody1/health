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
                  <li>Контроль прогресса: еженедельная проверка отчёта.</li>
                  <li>Программа питания: общие рекомендации без меню.</li>
                  <li>
                    Поддержка: текстовые сообщения с тренером (по рабочим дням
                    9:00–18:00 GMT).
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
                  <li>Частота тренировок: 3 тренировки в неделю.</li>
                  <li>
                    Контроль прогресса: еженедельная корректировка плана и
                    обратная связь от тренера.
                  </li>
                  <li>
                    Программа питания: составление индивидуального рациона
                    питания с еженедельными корректировками.
                  </li>
                  <li>Аудиозвонки: ежедневно или по необходимости.</li>
                  <li>
                    Видеовстречи: 1 раз в неделю для обсуждения вопросов и
                    мотивации.
                  </li>
                  <li>
                    Поддержка: текстовые и голосовые сообщения с тренером (по
                    рабочим дням 9:00–18:00 GMT).
                  </li>
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
                    Контроль прогресса: ведение тренировочного дневника,
                    подробный анализ выполненных тренировок на основе системы
                    субъективной оценки усилий (RPE).
                  </li>
                  <li>
                    Разбор техники: прохождение зачетов по технике выполнения
                    упражнений по средствам видеозаписей или в режиме реального
                    времени.
                  </li>
                  <li>
                    Программа питания: индивидуальный план питания с учётом
                    целей и вкусовых предпочтений.
                  </li>
                  <li>
                    Обучение: элементы обучения сбалансированному рациональному
                    питанию и методикам тренировок.
                  </li>
                  <li>Аудиозвонки: не ограничено или по запросу.</li>
                  <li>Видеовстречи: не ограничено или по запросу.</li>
                  <li>
                    Поддержка: круглосуточная поддержка 24/7 через текстовые,
                    голосовые сообщения и видео.
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
