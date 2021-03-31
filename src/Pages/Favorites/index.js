import React, { useState, useEffect, useContext } from 'react'
import PhotoContext from '../../Context/PhotosContext'
import { ImageCard } from '../../components'
import './Favorites.css'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

function Favorites() {
  const { favoritePhoto } = useContext(PhotoContext)
  const [images, setImages] = useState([])
  useEffect(() => {
    if (favoritePhoto.length >= 0) {
      setImages(favoritePhoto)
    }
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    if (favoritePhoto.length >= 0) {
      setImages(favoritePhoto)
    }
  }, [favoritePhoto])

  return (
    <div>
      <div>
        {images.length > 0 ? (
          <ResponsiveMasonry columnsCount={3} gutter="10px">
            <Masonry>
              {images.map((image) => (
                <ImageCard key={image.id} imageData={image}></ImageCard>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              height: '20vh',
              fontWeight: '600',
              color: 'rgba(0,0,0,.45)',
              fontSize: '24px'
            }}
          >
            <box-icon
              name="sad"
              animation="tada"
              color="rgba(10,6,161,0.6)"
              style={{ width: '64px', height: '64px' }}
            ></box-icon>
            Nothing to see here
          </div>
        )}
      </div>
    </div>
  )
}

export default Favorites
