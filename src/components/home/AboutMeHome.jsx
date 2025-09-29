import React from 'react';
import { PHOTOS } from '../../data/Photos';
import '../../styles/AboutMeHome.css';


function AboutMeHome() {
  const selectedAboutMePhotos = PHOTOS.filter((photo) =>
    [84].includes(photo.id)
  );

  return (
    <div className='aboutme-home'>
      <div className="aboutme-section-text">
        <h1>Qui suis-je ?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          convallis convallis erat vel congue. Nulla dignissim quam bibendum
          nibh feugiat condimentum. Aliquam vel lorem egestas, eleifend lectus
          sed, feugiat dui. Aliquam hendrerit a nisi a sagittis. Integer
          dignissim justo dio, ac.
        </p>
        <button className='button'>En savoir plus</button>
      </div>

      <div className="aboutme-section-photo">
        {selectedAboutMePhotos.map((AboutMePhoto) => (
          <div key={AboutMePhoto.id}>
            <img src={AboutMePhoto.url} alt={AboutMePhoto.name} className='aboutme-photo' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMeHome;
