import { Container, RootTitle } from "../../styled.root.ts";
import {
  Wrapper,
  Button,
  Content,
  CardWrapper,
  Card,
  BlockPhoto,
  BlockWithoutPhoto,
  Element,
} from "./styled.ts";
import { useEffect, useState } from "react";

import OneBefore from "/find/1Before.png";
import OneAfter from "/find/1After.png";

import TwoBefore from "/find/2Before.png";
import TwoAfter from "/find/2After.png";

import ThreeBefore from "/find/3Before.png";
import ThreeAfter from "/find/3After.png";

import FourBefore from "/find/4Before.png";
import FourAfter from "/find/4After.png";

import FiveBefore from "/find/5Before.png";
import FiveAfter from "/find/5After.png";

import SixBefore from "/find/6Before.png";
import SixAfter from "/find/6After.png";

interface IItem {
  name: string;
  imageBefore: string;
  imageAfter: string;
  textFirst: string;
  textSecond: string;
  textThird: string;
  textQuadruple: string;
}

const FindMe = () => {
  const items: IItem[] = [
    {
      name: "Ольга",
      imageBefore: OneBefore,
      imageAfter: OneAfter,
      textFirst:
        "Я вижу, как мой вес медленно растёт, и это меня беспокоит. У меня просто нет времени на себя. Да и сладкое помогает справляться со стрессом, но только на время. Я знаю, что мне нужно измениться, но как это вписать в мой бешеный график?",
      textSecond:
        "Я правда пыталась похудеть сама, но в интернете столько противоречивых советов, что просто опускаются руки. Вот бы найти настоящего специалиста, кто поможет мне…",
      textThird:
        "Каждый раз, когда вижу свою прежнюю форму или читаю о чужих успехах, меня охватывает чувство, что я подвела себя. Мне нужен кто-то, кто поможет мне найти баланс между работой и личной жизнью. План питания и тренировок, который я действительно смогу соблюдать, — это моя мечта. Но ещё важнее — поддержка и мотивация, чтобы я не опускала руки.",
      textQuadruple:
        "Теперь я не читаю истории успешного похудения, а написала свою историю! Спасибо тренеру, он составил индивидуальную программу под мой загруженный график. Он помог мне достичь отличных изменений!",
    },
    {
      name: "Иван",
      imageBefore: TwoBefore,
      imageAfter: TwoAfter,
      textFirst:
        "С тех пор как я перешёл на удалёнку, заметил, что начинаю набирать вес. И мне не нравится, как я выгляжу. Но что делать? Я привык к своему ритму жизни, и менять его очень сложно. Честно говоря, я интроверт, и мне гораздо комфортнее дома.",
      textSecond:
        "В спортзале я прямо чувствую себя неловко. Эти тренажёры и люди заставляют меня сомневаться, правильно ли я тренируюсь и не делаю ли что-то не так. Самостоятельно заниматься дома просто не могу себя заставить...",
      textThird:
        "Цели по похудению остались только мечтами. Я не смог найти правильный подход и потерял веру в себя. Даже если вернусь в зал, кажется, что уже поздно что-то менять.",
      textQuadruple:
        "Тренировки и правильное питание под контролем тренера дали отличные результаты! Стресс и разочарование остались в прошлом, теперь радуюсь каждому достижению. Жду занятий с нетерпением, и отражение в зеркале стало радовать!",
    },
    {
      name: "Анна",
      imageBefore: ThreeBefore,
      imageAfter: ThreeAfter,
      textFirst:
        "Я человек-движение, и каждый мой день не похож на предыдущий. Я быстро загораюсь новыми идеями, но так же быстро остываю, если что-то становится рутиной. Хочу всегда выглядеть хорошо и на пляже не стесняться лежать в бикини.",
      textSecond:
        "Однотипные тренировки и диеты меня просто убивают. Я пробовала уже столько всего, но мне всегда не хватает терпения довести дело до конца.",
      textThird:
        "Моя идеальная фигура на пляже осталась лишь мечтой. Все усилия не принесли ожидаемого эффекта, и теперь я переживаю из-за своего внешнего вида, вместо того чтобы наслаждаться отпуском.",
      textQuadruple:
        "Заниматься с тренером - это всегда что-то новое и интересное, такие тренировки меня вдохновляют, а не заставляли скучать. У меня отличный прогресс, и теперь я ловлю восхищенные взгляды, когда загораю в открытом купальнике.",
    },
    {
      name: "Максим",
      imageBefore: FourBefore,
      imageAfter: FourAfter,
      textFirst:
        "Я привык быть лучшим в своём деле, но вот семейная жизнь и работа иногда вытягивают все силы. Я раньше был в отличной форме, но стал  менее энергичным. Мне не нравится, как я выгляжу сейчас и я боюсь, что не смогу вернуться в ту форму, в которой раньше был.",
      textSecond:
        "Я пошёл в зал и после месяца тренировок не увидел никаких результатов, что меня очень расстроило. Я ожидал, что изменения будут заметны, а вместо этого получил только разочарование.",
      textThird:
        "Теперь годовой абонемент пылится на полке. Похудение кажется непосильной задачей. Не знаю, как вернуться к этому и стоит ли вообще пытаться. Хочу знать, что именно делать, чтобы вернуть уверенность в себе. И, конечно, мне нужна поддержка — чтобы я не остановился на полпути.",
      textQuadruple:
        "Заниматься с тренером - совсем другое дело. Он составил для меня индивидуальный план, и результаты пришли даже быстрее, чем я надеялся. Еще никогда я не был в такой подтянутой форме как сейчас!",
    },
    {
      name: "Елена",
      imageBefore: FiveBefore,
      imageAfter: FiveAfter,
      textFirst:
        "Я всегда стремлюсь к идеалу и умею организовать своё время, но иногда дел наваливается слишком много... Я чувствую вину, если что-то идёт не по плану. Понимаю, что мне нужно сбросить вес, но так трудно совмещать всё: работу, личную жизнь и спорт.",
      textSecond:
        "Я хотела накачать попу и улучшить фигуру, но не знала, какие упражнения для этого подходят. Попробовала разные тренажёры и программы, но без чётких рекомендаций было сложно понять, что действительно работает.",
      textThird:
        "Тренировки и диета не принесли желаемого результата, и я просто устала от постоянных пропусков и неудач. Мотивация пропала, и даже думать о возвращении в спортзал не хочется. Мне нужен чёткий план, чтобы я точно понимала что делать.",
      textQuadruple:
        "Тренировки стали продуктивнее, пропуски исчезли, а улучшения налицо. Мотивация не пропала, потому что результаты реально вдохновляют. Комплексный подход от тренера - это именно то, что мне было нужно.",
    },
    {
      name: "Алексей",
      imageBefore: SixBefore,
      imageAfter: SixAfter,
      textFirst:
        "Я обожаю свободу в своей работе на фрилансе, но мой график часто хаотичен — работа по ночам, еда на ходу. Сложно найти баланс. Мой режим настолько непостоянен, что я просто не знаю, как начать заботиться о своём здоровье.",
      textSecond:
        "Я решил тренироваться до изнеможения, но это было, мягко говоря, ошибкой. Не знал, как распределять нагрузку, и в первый же день сильно перенапряг мышцы. Это оставило после себя только неприятные ощущения.",
      textThird:
        "Вместо пользы ухудшил состояние и теперь боюсь снова пробовать. Боль в мышцах и суставах стала постоянным напоминанием, что что-то пошло не так.",
      textQuadruple:
        "Хороший специалист помог мне, и теперь боль в мышцах — это результат упорной работы, а не травм. Я научился правильно тренироваться, вдобавок к этому перестали болеть суставы.",
    },
  ];

  const ContentComponent = () => {
    return (
      <Content>
        <CardWrapper>
          <Card index="1">
            <BlockPhoto>
              <img src={activeItem?.imageBefore} alt="before" />
              <div>{activeItem?.textFirst}</div>
            </BlockPhoto>
          </Card>
          <Card index="2">
            <BlockWithoutPhoto>
              <img src="/Elements.png" alt="elements" />
              <div>{activeItem?.textSecond}</div>
            </BlockWithoutPhoto>
          </Card>
          <Card index="3">
            <BlockWithoutPhoto>
              <img src="/Elements.png" alt="elements" />
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  height: "100%",
                }}
              >
                {activeItem?.textThird}
              </div>
            </BlockWithoutPhoto>
          </Card>
          <Card index="4">
            <BlockPhoto>
              <img src={activeItem?.imageAfter} alt="after" />
              <div>{activeItem?.textQuadruple}</div>
            </BlockPhoto>
          </Card>
        </CardWrapper>
      </Content>
    );
  };
  const [activeItem, setActiveItem] = useState<IItem | null>();
  const handleClick = (item: IItem) => {
    if (activeItem?.name === item.name) {
      setActiveItem(null);
    } else {
      setActiveItem(item);
    }
  };

  const isMobile = window.innerWidth < 768;
  useEffect(() => {
    setActiveItem(items[0]);
  }, []);
  return (
    <section id="findme">
      <Container>
        <RootTitle>Найди себя</RootTitle>
        <div style={{ display: isMobile ? "" : "flex" }}>
          {items.map((item: IItem) => {
            return isMobile ? (
              <Wrapper key={item.name}>
                <Button
                  key={item.name}
                  active={activeItem?.name === item.name ? "true" : "false"}
                  onClick={() => handleClick(item)}
                >
                  {item.name}
                </Button>
                {activeItem?.name === item.name ? (
                  <Element>
                    <ContentComponent />
                  </Element>
                ) : null}
              </Wrapper>
            ) : (
              <Wrapper key={item.name}>
                <Button
                  key={item.name}
                  active={activeItem?.name === item.name ? "true" : "false"}
                  onClick={() => handleClick(item)}
                >
                  {item.name}
                </Button>
              </Wrapper>
            );
          })}
        </div>
        {!isMobile ? <ContentComponent /> : null}
      </Container>
    </section>
  );
};

export default FindMe;
