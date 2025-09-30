import React from 'react';
import '../../styles/Modal.css'
import { CircleX } from 'lucide-react';

function Modal({ image, onClose }) {

  return (
    <div className='overlay'>
      <div className='content-overlay'>
        <button onClick={onClose} className='btn-overlay'><CircleX size={30}/></button>
        {image && (
          <div className="modal-content">
            <div className='content-img'>
              <img
                className='img-modal'
                src={image.url}
                alt={image.name}
                loading='lazy'
              />
            </div>
            {/* <div className='content-texte'>
              <h1>{image.name}</h1>
            </div> */}
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal
