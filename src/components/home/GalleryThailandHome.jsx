import React from 'react';

import { PHOTOS } from '../../data/Photos';
import "../../styles/GalleryThailandHome.css";

function GalleryThailandHome() {
  const selectedThailandPhotos1 = PHOTOS.filter((photo) =>
    [71].includes(photo.id)
  );

  const selectedThailandPhotos2 = PHOTOS.filter((photo) =>
    [65, 83].includes(photo.id)
  );

  return (
    <div className='sectionGalleryThailand'>

      <div className='collage1'>
        {selectedThailandPhotos1.map((ThailandPhoto1) => (
          <img
            key={ThailandPhoto1.id}
            src={ThailandPhoto1.url}
            alt={ThailandPhoto1.name}
            className="collage-img"
          />
        ))}
      </div>

      <div className='collage2'>
        {selectedThailandPhotos2.map((ThailandPhoto2) => (
          <img
            key={ThailandPhoto2.id}
            src={ThailandPhoto2.url}
            alt={ThailandPhoto2.name}
            className="collage-img"
          />
        ))}
      </div>

      <div className='thailand-text'>
        <h1>À la une</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis convallis erat vel congue. Nulla dignissim quam bibendum nibh feugiat condimentum. Aliquam vel lorem egestas, eleifend lectus sed, feugiat dui. Aliquam hendrerit a nisi a sagittis. Integer dignissim justo dio, ac.
        </p>
        <button className='button'>
          <a className='btn-home' href='/thailande'>En savoir plus</a>
        </button>
      </div>
    </div>
  );
}

export default GalleryThailandHome
