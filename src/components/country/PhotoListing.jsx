import { PHOTOS } from '../../data/Photos';
import '../../styles/PhotoListing.css'

function PhotoListing ({category}){
  const selectedCountryPhotos = PHOTOS.filter(
    (photo) =>
      photo.category.toLowerCase() === category.toLowerCase() &&
      ![80, 81, 82].includes(photo.id)
  );

  return <div className='photo-listing'>
    {selectedCountryPhotos.map((CountryPhoto) =>
    <div key={CountryPhoto.id} className='photo-item'>
      <img src={CountryPhoto.url} alt={CountryPhoto.name} width="200"/>
    </div>
    )}
  </div>
}

export default PhotoListing
