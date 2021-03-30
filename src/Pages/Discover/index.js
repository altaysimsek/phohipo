import { useEffect, useState } from 'react'
import axios from 'axios'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ImageCard } from '../../components'
import 'boxicons'
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
          `https://api.unsplash.com/photos/random?count=9&client_id=${process.env.REACT_APP_TOKEN}`
        )
        .then((response) => {
          setImages(images.concat(...response.data))
        })
        .catch((err) => console.log(err))
    }, 10000)
  }

  return (
    <div className="content">
      <div>
        <InfiniteScroll
          dataLength={images.length}
          next={fetchPhotos}
          hasMore={true}
          loader={
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
                name="meteor"
                animation="tada"
                color="rgba(0,0,0,0.45)"
                style={{ width: '64px', height: '64px' }}
              ></box-icon>
              Photos are falling
            </div>
          }
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <ResponsiveMasonry columnsCount={3} gutter="10px">
            <Masonry>
              {images.map((image) => (
                <ImageCard key={image.id} imageData={image}></ImageCard>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default Homepage
