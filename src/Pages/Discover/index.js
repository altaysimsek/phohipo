import { useEffect, useState } from 'react'
import axios from 'axios'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import InfiniteScroll from 'react-infinite-scroll-component'
import './Discover.css'

function Homepage() {
  const [images, setImages] = useState([])

  useEffect(function () {
    fetchPhotos()
    // eslint-disable-next-line
  }, [])

  const fetchPhotos = () => {
    setTimeout(() => {
      axios
        .get(
          `https://api.unsplash.com/photos/random?count=10&client_id=${process.env.REACT_APP_TOKEN}`
        )
        .then((response) => {
          setImages(images.concat(...response.data))
        })
        .catch((err) => console.log(err))
    }, 2500)
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
