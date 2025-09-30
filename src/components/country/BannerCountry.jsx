import React from 'react';
import { PHOTOS } from '../../data/Photos';
import '../../styles/BannerCountry.css'

function BannerCountry ({id}) {
  const image = PHOTOS.find(photo => photo.id === id);

  return <div>

    <div key={image.id} className='mySwiperBannerCountry'>
      <img src={image.url} alt={image.name} className='photo-slider' />
    </div>

    <div className='TitleCountry'>
      <h1>{image.category[0].toUpperCase() + image.category.slice(1)}</h1>
    </div>

  </div>
}

export default BannerCountry
