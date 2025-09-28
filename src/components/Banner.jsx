import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import '../styles/Banner.css';

// Swiper modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

function Banner() {
  const photo1 = {
    id: 30,
    name: "image00032",
    category: "Laos",
    url: "https://res.cloudinary.com/dqscokb6w/image/upload/v1759003867/portfolio/image00032_rpbtsn.jpg"
  };

  const photo2 = {
    id: 19,
    name: "image00020",
    category: "Indonésie",
    url: "https://res.cloudinary.com/dqscokb6w/image/upload/v1759003837/portfolio/image00020_v3ed6p.jpg"
  };

  const photo3 = {
    id: 72,
    name: "image00085",
    category: "Thailande",
    url: "https://res.cloudinary.com/dqscokb6w/image/upload/v1759003983/portfolio/image00085_bz2pof.jpg"
  };

  return (
    <Swiper
      spaceBetween={30}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      centeredSlides={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="photo-slider" src={photo1.url} alt={photo1.name} />
      </SwiperSlide>
      <SwiperSlide>
        <img className="photo-slider" src={photo2.url} alt={photo2.name} />
      </SwiperSlide>
      <SwiperSlide>
        <img className="photo-slider" src={photo3.url} alt={photo3.name} />
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner;
