import { useState } from 'react';
import '../../styles/Modal.css';
import { CircleX } from 'lucide-react';
import 'mapbox-gl/dist/mapbox-gl.css';

import Map from 'react-map-gl/mapbox';

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

function Modal({ image, onClose }) {
  const [viewState, setViewState] = useState({
    latitude: 28.6448,
    longitude: 77.226,
    zoom: 5,
  });

  return (
    <div className='overlay'>
      <div className='content-overlay'>
        <button onClick={onClose} className='btn-overlay'>
          <CircleX size={30} />
        </button>

        {image && (
          <div className="content-modal">
            <div className='content-img'>
              <img
                className='img-modal'
                src={image.url}
                alt={image.name}
                loading='lazy'
              />
            </div>
            <div className='content-text'>
              <h1>{image.name}</h1>
              <p>{image.description}</p>
              <div className="map-container">
                <Map
                  {...viewState}
                  onMove={evt => setViewState(evt.viewState)}
                  mapboxAccessToken={TOKEN}
                  mapStyle="mapbox://styles/mapbox/streets-v11"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
