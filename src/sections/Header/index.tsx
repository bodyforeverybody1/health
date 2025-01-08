import {
  Section,
  StyledElement,
  StyledTitle,
  StyledWrapper,
  StyledBlock,
  StyledPhotoBlock,
  StyledName,
  StyledDescription,
  Arrow,
} from "./styled.ts";
import { Container } from "../../styled.root.ts";
import { useRef, useState } from "react";

const Header = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPause, setIsPause] = useState(true);

  const handleClick = () => {
    setIsPause((prevState) => !prevState);
  };

  const handleClickArrow = () => {
    videoRef.current?.play();
    setIsPause(true);
  };

  return (
    <Section>
      <Container>
        <StyledWrapper>
          <StyledBlock>
            <StyledElement>
              <StyledTitle>
                <span>Похудей до 10 кг за 30 дней,</span>занимаясь дома!
              </StyledTitle>
              <div>
                Бесплатная пробная тренировка и план питания для новичков!
              </div>
            </StyledElement>
            <StyledElement>
              <StyledTitle>
                Запишись на пробную тренировку и получи{" "}
                <span>план питания в подарок</span>
              </StyledTitle>
              <div>после знакомства с онлайн-тренером!</div>
            </StyledElement>
            <StyledElement>
              <StyledTitle>
                Попробуй <span>бесплатную тренировку</span>
              </StyledTitle>
            </StyledElement>
          </StyledBlock>
          <StyledPhotoBlock>
            <div className="photo" onClick={handleClick}>
              {isPause && <Arrow onClick={handleClickArrow} />}
              <video
                ref={videoRef}
                style={{ transform: "scale(1.8)" }}
                width="100%"
                height="100%"
                controls
              >
                <source src="/video/video2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <StyledName>Дмитрий Зайцев</StyledName>
            <StyledDescription>
              Твоё тело — это отражение твоих усилий
            </StyledDescription>
          </StyledPhotoBlock>
        </StyledWrapper>
      </Container>
    </Section>
  );
};

export default Header;
