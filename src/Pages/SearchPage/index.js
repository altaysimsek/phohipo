import { useEffect, useState } from 'react'
import './Search.css'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { ImageCard } from '../../components'
import axios from 'axios'

function SearchPage() {
  const [images, setImages] = useState([])
  const params = new URLSearchParams(window.location.search)
  const query = params.get('query')
  const topic = params.get('topic')

  useEffect(function () {
    fetchPhotos()
    // eslint-disable-next-line
  }, [])

  const fetchPhotos = () => {
    setTimeout(() => {
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_TOKEN}`
        )
        .then((response) => {
          console.log(response.data)
          setImages(images.concat(...response.data.results))
        })
        .catch((err) => console.log(err))
    }, 5000)
  }
  return (
    <div>
      <ResponsiveMasonry columnsCount={3} gutter="10px">
        <Masonry>
          {images.map((image) => (
            <ImageCard key={image.id} imageData={image}></ImageCard>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}

export default SearchPage
