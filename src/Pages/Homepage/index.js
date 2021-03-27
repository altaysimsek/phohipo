import { useEffect, useState } from 'react'
import axios from 'axios'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import InfiniteScroll from 'react-infinite-scroll-component'
import './Homepage.css'

function Homepage() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchPhotos()
  }, [])

  function fetchPhotos() {
    setLoading(true)
    axios
      .get(
        `https://api.unsplash.com/photos/random?count=15&client_id=${process.env.REACT_APP_TOKEN}`
      )
      .then((response) => {
        setImages(images.concat(...response.data))
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="content">
      <InfiniteScroll
        dataLength={images.length}
        next={fetchPhotos}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <ResponsiveMasonry columnsCount={3} gutter="10px">
          <Masonry>
            {images.map((image) => (
              <img
                key={image.id}
                src={image.urls.regular}
                style={{ width: '100%', display: 'block' }}
                alt={image.alt_description}
              ></img>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </InfiniteScroll>
    </div>
  )
}

export default Homepage
