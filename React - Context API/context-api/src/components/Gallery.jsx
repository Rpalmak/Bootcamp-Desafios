import React, {useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import IconHeart from "../components/IconHeart.jsx";


const styleFotos = {}

function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('/photos.json');
        const data = await response.json();
        if (Array.isArray(data.photos)) {
          setPhotos(data.photos);
        } else {
          console.error('El archivo JSON no contiene un array de fotos:', data);
        }
      } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
      }
    };

    fetchPhotos();
  }, []);



  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo, index) => (
        <div key={index} className="photo-container">
          <img style={styleFotos} key={index} src={photo.src.tiny} alt={photo.alt} />
          <div onClick={() => togglePhoto(photo.id)} className="heart-like-dislike">
            <IconHeart filled={photo["liked"]} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;