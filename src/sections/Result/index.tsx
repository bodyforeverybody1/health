import { Container, RootTitle } from "../../styled.root.ts";
import {
  Card,
  ImageWrapper,
  Title,
  Description,
  ButtonNext,
  ButtonPrev,
} from "./styled";

import ResultArrow from "../../components/ResultArrow";
import OneBefore from "/photos/1Before.png";
import OneAfter from "/photos/1After.png";

import TwoBefore from "/photos/2Before.png";
import TwoAfter from "/photos/2After.png";

import ThreeBefore from "/photos/3Before.png";
import ThreeAfter from "/photos/3After.png";

import FourBefore from "/photos/4Before.png";
import FourAfter from "/photos/4After.png";

import FiveBefore from "/photos/5Before.png";
import FiveAfter from "/photos/5After.png";

import SixBefore from "/photos/6Before.png";
import SixAfter from "/photos/6After.png";

import { useState } from "react";

const Result = () => {
  const [active, setActive] = useState(0);

  const images = [
    [
      OneBefore,
      OneAfter,
      "-32кг",
      "за 4.5 месяца",
      "Не было сильного чувства голода практически на всем\n" +
        "                      промежутке рекомпозиции.",
    ],
    [
      TwoBefore,
      TwoAfter,
      "-31кг",
      "за 10 месяцев",
      "Изменилось отношение к еде, стал с гордостью на себя смотреть в зеркале, приобрел навыки нутрициологии",
    ],
    [
      ThreeBefore,
      ThreeAfter,
      "-18кг",
      "за 4 месяца",
      "2 тренировки в неделю, в рационе присутствовали на регулярной основе пельмени, окрошка, картофель, молочный шоколад, панкейки, лаваши",
    ],
    [
      FourBefore,
      FourAfter,
      "-24кг",
      "за 9 месяцев",
      "Путь преображения сопровождался регулярным приемом алкоголя (по желанию подопечного),\n" +
        "в рационе были самые разнообразные продукты",
    ],
    [
      FiveBefore,
      FiveAfter,
      "-5,2кг",
      "за 12 месяцев",
      "Снижение веса и конкретный набор мышечной массы с акцентом на плечи. Сбалансированный рацион соответствующий вкусовым предпочтениям",
    ],
    [
      SixBefore,
      SixAfter,
      "-24кг",
      "за 3,5 месяца",
      "Всего лишь за 3,5мес талия уменьшилась в охвате на 26см. Рациональное и сбалансированное питание",
    ],
  ];

  const getCurrentBefore = () => {
    return images[active][0];
  };
  const getCurrentNext = () => {
    return images[active][1];
  };
  const getCurrentValue = () => {
    return [images[active][2], images[active][3], images[active][4]];
  };

  const Content = () => {
    const [weigth, month, description] = getCurrentValue();
    return (
      <div>
        <Title>
          <span>{weigth}</span> {month}
        </Title>
        <Description>
          <div>{description}</div>
        </Description>
      </div>
    );
  };

  return (
    <section id="result">
      <Container>
        <div>
          <RootTitle>Результаты</RootTitle>
          <div>
            <div>
              <Card>
                <ImageWrapper>
                  <img src={getCurrentBefore()} alt="Before" />
                  <img src={getCurrentNext()} alt="After" />
                </ImageWrapper>
                <Content />
              </Card>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  paddingTop: 20,
                }}
              >
                <ButtonPrev
                  disabled={active === 0}
                  onClick={() => setActive(active - 1)}
                >
                  <ResultArrow />
                </ButtonPrev>
                <ButtonNext
                  disabled={active + 1 === images.length}
                  onClick={() => setActive(active + 1)}
                >
                  <ResultArrow />
                </ButtonNext>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Result;
