import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { PHOTOS } from '../../data/Photos';
import '../../styles/Menu.css';

function Menu() {
  const selectedMenuPhotos = PHOTOS.filter((photo) =>
    [77, 74, 55, 53, 38, 22, 12].includes(photo.id)
  );

  return (
    <div className="menu-container">
      <div className="menu-links">
        <h1 className="menu-title">Works</h1>
        <ul className="menu-list">
          <li><a href="/thailande">Thaïlande</a></li>
          <li><a href="/philippines">Philippines</a></li>
          <li><a href="/singapour">Singapour</a></li>
          <li><a href="/vietnam">Vietnam</a></li>
          <li><a href="/laos">Laos</a></li>
          <li><a href="/indonesie">Indonésie</a></li>
          <li><a href="/japon">Japon</a></li>
        </ul>
      </div>

      <div className="menu-slider">
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
          className="swiper-menu"
        >
          {selectedMenuPhotos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <img
                src={photo.url}
                alt={photo.name}
                className="menu-slider-photo"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Menu
