import { useEffect, useState } from 'react'
import axios from 'axios'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ImageCard, ErrorBox } from '../../components'
import 'boxicons'
import './Discover.css'

function Homepage() {
  const [images, setImages] = useState([])
  const [error, setError] = useState('')

  useEffect(function () {
    fetchPhotos()
    // eslint-disable-next-line
  }, [])

  const fetchPhotos = () => {
    setError('')
    setTimeout(() => {
      axios
        .get(
          `https://api.unsplash.com/photos/random?count=9&client_id=${process.env.REACT_APP_TOKEN}`
        )
        .then((response) => {
          setImages(images.concat(...response.data))
        })
        .catch((err) => setError(err.message))
    }, 2000)
  }

  return (
    <section className="content">
      {!error ? (
        <InfiniteScroll
          dataLength={images.length}
          next={fetchPhotos}
          hasMore={true}
          loader={
            <ErrorBox
              iconName="meteor"
              color="rgba(0, 0, 0, 0.45)"
              text="Photos are falling."
            ></ErrorBox>
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
      ) : (
        <ErrorBox
          iconName="error"
          text="Something went wrong."
          color="rgba(255,0,0,0.45)"
        ></ErrorBox>
      )}
    </section>
  )
}

export default Homepage
