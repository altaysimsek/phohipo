import React, { useState, useEffect, useContext } from 'react'
import PhotoContext from '../../Context/PhotosContext'
import { ImageCard, ErrorBox } from '../../components'
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
    <section className="content">
      {images.length > 0 ? (
        <ResponsiveMasonry columnsCount={3} gutter="10px">
          <Masonry>
            {images.map((image) => (
              <ImageCard key={image.id} imageData={image}></ImageCard>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      ) : (
        <ErrorBox iconName="sad" color="rgba(10,6,161,0.6)" text="Nothing to see here"></ErrorBox>
      )}
    </section>
  )
}

export default Favorites
