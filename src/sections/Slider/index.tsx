import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ReactPlayer from "react-player";

export const Slider = () => {
  return (
    <section id="result">
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        grabCursor={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{ overflow: "hidden" }}>
          <ReactPlayer url="https://youtube.com/shorts/WQCtToUHQBg" />
        </SwiperSlide>
        <SwiperSlide style={{ overflow: "hidden" }}>
          <ReactPlayer url="https://youtube.com/shorts/Yb9vHL-LriY" />
        </SwiperSlide>
        <SwiperSlide style={{ overflow: "hidden" }}>
          <ReactPlayer url="https://www.youtube.com/shorts/QOJP8Iu8Keg" />
        </SwiperSlide>
        <SwiperSlide style={{ overflow: "hidden" }}>
          <ReactPlayer url="https://youtube.com/shorts/AWHyl_BP624" />
        </SwiperSlide>
        <SwiperSlide style={{ overflow: "hidden" }}>
          <ReactPlayer url="https://youtube.com/shorts/VuUqz0cCS8Y" />
        </SwiperSlide>
        <SwiperSlide style={{ overflow: "hidden" }}>
          <ReactPlayer url="https://youtube.com/shorts/zeOi4PBeYgE" />
        </SwiperSlide>
        <SwiperSlide style={{ overflow: "hidden" }}>
          <ReactPlayer url="https://youtube.com/shorts/7QYDA8LlYEc" />
        </SwiperSlide>
        <SwiperSlide style={{ overflow: "hidden" }}>
          <ReactPlayer url="https://youtube.com/shorts/jSHKYNE6BCI" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
