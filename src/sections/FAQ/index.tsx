import { Container, RootTitle } from "../../styled.root.ts";
import {
  Number,
  WrapperLine,
  PlusBtn,
  TitleLine,
  Description,
  MainLine,
  Section,
} from "./styled.ts";
import { FAQ, IFaq } from "../../consts";
import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleOpen = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <Section id="faq">
      <Container>
        <RootTitle>Часто задаваемые вопросы</RootTitle>
        <div style={{ borderBottom: "1px solid rgba(90, 90, 90, 1)" }}>
          {FAQ.map((el: IFaq, index) => {
            return (
              <MainLine key={el.title} $isActive={activeIndex === index}>
                <WrapperLine onClick={() => handleOpen(index)}>
                  <Number>/{index + 1}</Number>
                  <TitleLine>{el.title}</TitleLine>
                  <PlusBtn>{activeIndex === index ? "-" : "+"}</PlusBtn>
                </WrapperLine>

                <Description $isShow={activeIndex === index}>
                  {el.description}
                </Description>
              </MainLine>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Faq;
