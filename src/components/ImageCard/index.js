import React, { useContext, useState, useEffect } from 'react'
import PhotoContext from '../../Context/PhotosContext'

import './ImageCard.css'

function ImageCard({ imageData }) {
  const [isFavorite, setFavorite] = useState(false)
  const { addFavoritePhoto, removeFavoritePhoto } = useContext(PhotoContext)

  const toggleFavoritePhoto = () => {
    if (isFavorite) {
      removeFavoritePhoto(imageData.id)
      setFavorite(false)
    } else {
      addFavoritePhoto(imageData)
      setFavorite(true)
    }
  }
  // We are using useEffect for marking favorite photos for the first time.
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favoritePhotos'))
    const item = data.filter((item) => item.id === imageData.id)
    if (item.length !== 0) {
      setFavorite(true)
    } else {
      setFavorite(false)
    }
    // eslint-disable-next-line
  }, [])

  // Also we need to check when the favorite status is changed
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favoritePhotos'))
    const item = data.filter((item) => item.id === imageData.id)
    if (item.length !== 0) {
      setFavorite(true)
    } else {
      setFavorite(false)
    }
    // eslint-disable-next-line
  }, [isFavorite])

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
