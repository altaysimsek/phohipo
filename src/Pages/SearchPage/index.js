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
  const validateQueries = (query, topic) => {
    if (query || topic) {
      return true
    }
    return false
  }
  const generateUrl = () => {
    if (query && !topic) {
      return `https://api.unsplash.com/search/photos?query=${query}&page=1&per_page=9&client_id=${process.env.REACT_APP_TOKEN}`
    } else if (topic && !query) {
      return `https://api.unsplash.com/topics/${topic}/photos?per_page=18&client_id=${process.env.REACT_APP_TOKEN}`
    } else if (topic && query) {
      return `https://api.unsplash.com/search/photos?query=${query}&page=1&per_page=9&client_id=${process.env.REACT_APP_TOKEN}`
    } else {
      return false
    }
  }
  const fetchPhotos = () => {
    const url = generateUrl()
    console.log(url)
    setTimeout(() => {
      axios
        .get(url)
        .then((response) => {
          console.log(response.data)
          response.data.results
            ? setImages(images.concat(...response.data.results))
            : setImages(images.concat(...response.data))
        })
        .catch((err) => console.log(err))
    }, 5000)
  }
  return (
    <div>
      {validateQueries(query, topic) ? (
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
            height: '90vh',
            fontWeight: '600',
            color: 'rgba(0,0,0,.45)',
            fontSize: '24px'
          }}
        >
          <box-icon
            name="error-alt"
            animation="tada"
            color="rgba(0,0,0,0.45)"
            style={{ width: '64px', height: '64px' }}
          ></box-icon>
          Plese enter keyword or select topic
        </div>
      )}
    </div>
  )
}

export default SearchPage
