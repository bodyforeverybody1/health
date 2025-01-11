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
  const [isPause, setIsPause] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    if (videoRef.current && !isLoading) {
      if (isPause) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPause(!isPause);
    }
  };

  const handleLoadedData = () => {
    setIsLoading(false);
    videoRef.current?.pause(); // Убедимся, что видео на паузе при загрузке
    setIsPause(true);
  };

  const handlePlay = () => {
    setIsPause(false); // Синхронизация состояния с началом воспроизведения
  };

  const handlePause = () => {
    setIsPause(true); // Синхронизация состояния с паузой
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
            <div
              className={`photo ${isLoading ? "loading" : ""}`}
              onClick={handleClick}
              style={{
                position: "relative",
                cursor: isLoading ? "not-allowed" : "pointer",
                opacity: isLoading ? 0.5 : 1,
              }}
            >
              {isLoading && <p>Загрузка видео...</p>}
              <video
                ref={videoRef}
                onLoadedData={handleLoadedData}
                // style={{ transform: "scale(1.8)", zIndex: 1 }}
                width="100%"
                height="100%"
                onPlay={handlePlay} // Событие при воспроизведении
                onPause={handlePause} // Событие при паузе
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
