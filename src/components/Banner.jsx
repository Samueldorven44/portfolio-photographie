import React from 'react';
import { PHOTOS } from '../data/Photos'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import '../styles/Banner.css';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

function Banner() {

  const selectedPhotos = PHOTOS.filter((photo) =>
    [80, 81, 82].includes(photo.id)
  );

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
      className="mySwiperBanner"
    >

      {selectedPhotos.map((photo) => (
        <SwiperSlide key={photo.id}>
          <div>
            <img
              src={photo.url}
              alt={photo.name}
              className="photo-slider"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Banner;
