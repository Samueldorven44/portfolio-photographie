import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PHOTOS } from '../data/Photos';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/GalleryJaponHome.css';

import { EffectFade, Autoplay } from 'swiper/modules';

function GalleryJaponHome() {
  const selectedJapanPhotos = PHOTOS.filter((photo) =>
    [1, 2, 3, 4, 5, 6].includes(photo.id)
  );

  return (
    <div className="gallery-section">
      <div className='gallery-text'>
        <h1 className="gallery-title">Le pays du Soleil Levant</h1>
        <p className="gallery-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis convallis erat vel congue. Nulla dignissim quam bibendum nibh feugiat condimentum. Aliquam vel lorem egestas, eleifend lectus sed, feugiat dui. Aliquam hendrerit a nisi a sagittis. Integer dignissim justo dio, ac.
        </p>
      </div>

      <div className='gallery-slider' >
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
          className="mySwiperGalleryJapan"
        >
          {selectedJapanPhotos.map((JapanPhoto) => (
            <SwiperSlide key={JapanPhoto.id}>
              <img
                src={JapanPhoto.url}
                alt={JapanPhoto.name}
                className="gallery-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );

}

export default GalleryJaponHome;
