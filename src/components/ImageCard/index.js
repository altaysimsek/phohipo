import React, { useContext, useState, useEffect } from 'react'
import PhotoContext from '../../Context/PhotosContext'

import './ImageCard.css'

function ImageCard({ imageData }) {
  const [isFavorite, setFavorite] = useState(false)
  const { favoritePhoto, addFavoritePhoto, removeFavoritePhoto } = useContext(PhotoContext)

  const toggleFavoritePhoto = () => {
    if (isFavorite) {
      removeFavoritePhoto(imageData.id)
      setFavorite(false)
    } else {
      addFavoritePhoto(imageData)
      setFavorite(true)
    }
  }
  useEffect(() => {
    if (favoritePhoto.includes(imageData.id)) {
      setFavorite(true)
    } else {
      setFavorite(false)
    }
  }, [])
  return (
    <div className="imageCard">
      <div className={isFavorite ? 'iconactive' : 'iconBox'} onClick={toggleFavoritePhoto}>
        <box-icon name="heart" class="icon"></box-icon>
      </div>
      <a target="blank" href={imageData.links.html}>
        <img
          src={imageData.urls.regular}
          style={{ width: '100%', display: 'block' }}
          alt={imageData.alt_description}
        ></img>
      </a>
    </div>
  )
}

export default ImageCard
