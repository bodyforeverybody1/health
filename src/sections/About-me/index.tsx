import { Container, StyledTitle } from "../../styled.root.ts";
import Photo from "../../../public/photo.png";
import Sertificate1 from "../../../public/Sertificate-1.png";
import Sertificate2 from "../../../public/Sertificate-2.png";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2vw;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
  & .photo {
    width: 100%;
  }
`;

const StyledArrow = styled.div`
  background-image: url("/ConsultIconArrow.png");
  width: 47px;
  height: 30px;
  background-size: contain;
  transform: rotate(90deg);
`;

const StyledWrapperText = styled.div`
  max-width: 29vw;
  font-size: 1.7vw;
  text-transform: uppercase;
  text-align: center;
  margin: 3vw auto 4.5vw;
  display: flex;
  flex-direction: column;
  gap: 2vw;

  @media (max-width: 1023px) {
    max-width: 100%;
    font-size: 5vw;
    gap: 5vw;
  }

  p {
    margin: 0;
    line-height: 2vw;

    @media (max-width: 1023px) {
      line-height: 5vw;
    }
  }

  span {
    color: #ffbe0b;
  }
`;

const StyledWrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSertificat = styled.div`
  display: flex;
  gap: 2vw;
  padding-top: 3vw;

  @media (max-width: 1023px) {
    width: 100%;
    padding-top: 5vw;
  }
  & img {
    max-width: 17vw;
    @media (max-width: 1023px) {
      max-width: 50%;
    }
  }
`;

export const AboutMe = () => {
  return (
    <section id="about-me">
      <Container>
        <StyledTitle>Обо мне</StyledTitle>
        <StyledWrapper>
          <div>
            <img src={Photo} alt="photo" className="photo" />
          </div>
          <StyledWrapperInfo>
            <StyledWrapperText>
              <p>
                Персональный фитнес тренер с опытом работы <span>7 лет.</span>
              </p>
              <p>
                С моей помощью <span>свыше 100 человек</span> обрели фигуру
                мечты и удержали результат.
              </p>
              <p>
                Поддержка 24/7 и качественная обратная связь на каждом этапе
                превратят <span>ваш путь к стройности</span> в увлекательное
                путешествие!
              </p>
            </StyledWrapperText>
            <StyledArrow />
            <StyledSertificat>
              <img src={Sertificate1} alt="" />
              <img src={Sertificate2} alt="" />
            </StyledSertificat>
          </StyledWrapperInfo>
        </StyledWrapper>
      </Container>
    </section>
  );
};
