import { useEffect, useState } from 'react'
import axios from 'axios'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import './Homepage.css'

function Homepage() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_TOKEN}`)
      .then((response) => {
        console.log(response)
        setImages(response.data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="content">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {!loading ? (
            images.map((image, index) => (
              <img
                key={image.id}
                src={image.urls.regular}
                width="50%"
                alt={image.alt_description}
              ></img>
            ))
          ) : (
            <p>Loading</p>
          )}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}

export default Homepage
