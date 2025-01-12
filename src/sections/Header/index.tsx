import {
  Section,
  StyledElement,
  StyledTitle,
  StyledWrapper,
  StyledBlock,
  StyledPhotoBlock,
  StyledName,
  StyledDescription,
} from "./styled.ts";
import { Container } from "../../styled.root.ts";
import { useRef, useState } from "react";

const Header = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <Section>
      <Container>
        <StyledWrapper>
          <StyledBlock>
            <StyledElement>
              <StyledTitle>
                <span>Сбрось до 10 кг за 30 дней, </span>занимаясь дома!
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
              <div>после знакомства с тренером!</div>
            </StyledElement>
            <StyledElement>
              <StyledTitle>
                Попробуй <span>бесплатную тренировку</span>
              </StyledTitle>
            </StyledElement>
          </StyledBlock>
          <StyledPhotoBlock>
            <div className={`photo ${isLoading ? "loading" : ""}`}>
              {isLoading && <p>Загрузка видео...</p>}
              <video
                ref={videoRef}
                onLoadedData={handleLoadedData}
                width="100%"
                height="100%"
                controls
              >
                <source src="/video/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="mobile">
              <video
                ref={videoRef}
                width="100%"
                height="100%"
                controls
                poster="/placeholderVideo.png"
              >
                <source src="/video/video.mp4" type="video/mp4" />
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
