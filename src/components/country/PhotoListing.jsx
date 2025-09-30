import { useState } from 'react';
import { PHOTOS } from '../../data/Photos';
import '../../styles/PhotoListing.css'
import Modal from './Modal'

function PhotoListing ({category}){
  const selectedCountryPhotos = PHOTOS.filter(
    (photo) =>
      photo.category.toLowerCase() === category.toLowerCase() &&
      ![80, 81, 82].includes(photo.id)
  );

  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div className='photo-listing'>
      {selectedCountryPhotos.map((CountryPhoto) =>
      <div onClick={() => openModal(CountryPhoto)} key={CountryPhoto.id} className='photo-item'>
        <img src={CountryPhoto.url} alt={CountryPhoto.name} width="200" loading='lazy'/>
      </div>
      )}
      {showModal && <Modal image={selectedImage} onClose={closeModal} />}
    </div>
  )
}

export default PhotoListing
