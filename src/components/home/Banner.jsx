import React from 'react';
import { PHOTOS } from '../../data/Photos'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import '../../styles/Banner.css';
import { EffectFade, Autoplay} from 'swiper/modules';

function Banner() {

  const selectedPhotos = PHOTOS.filter((photo) =>
    [80, 81, 58].includes(photo.id)
  );

  return (
    <Swiper
      spaceBetween={30}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Autoplay]}
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
            <div className='legend-banner'>
              <p id="banner-picture-category"><strong>{photo.category}</strong></p>
              <p id='banner-picture-name'>{photo.name}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Banner;
