import { Container } from "../../styled.root.ts";
import { Title } from "./styled.ts";
import { useEffect, useRef } from "react";

const Video: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      {
        threshold: 0.5, // Воспроизведение начнется, когда хотя бы 50% видео будет в зоне видимости
      },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section id="video">
      <Container>
        <div>
          <Title>проморолик</Title>
          <div>
            <video ref={videoRef} width="100%" height="100%" controls>
              <source src="/video/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Video;
