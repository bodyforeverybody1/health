import { Container } from "../../styled.root.ts";
import {
  Title,
  Number,
  WrapperLine,
  PlusBtn,
  TitleLine,
  Description,
  MainLine,
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
    <section>
      <Container>
        <Title>FAQ</Title>
        <div>
          {FAQ.map((el: IFaq, index) => {
            return (
              <MainLine key={el.title} isActive={activeIndex === index}>
                <WrapperLine isActive={activeIndex === index}>
                  <Number>/{index + 1}</Number>
                  <TitleLine>{el.title}</TitleLine>
                  <PlusBtn onClick={() => handleOpen(index)}>
                    {activeIndex === index ? "-" : "+"}
                  </PlusBtn>
                </WrapperLine>

                <Description isShow={activeIndex === index}>
                  {el.description}
                </Description>
              </MainLine>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Faq;
