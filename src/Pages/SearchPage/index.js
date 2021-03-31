import { useEffect, useState } from 'react'
import './Search.css'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { ImageCard } from '../../components'
import axios from 'axios'
import ReactPaginate from 'react-paginate'

function SearchPage() {
  const [images, setImages] = useState([])
  const [pageCount, setPageCount] = useState(1)
  const [activePage, setActivePage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const params = new URLSearchParams(window.location.search)
  const query = params.get('query')
  const topic = params.get('topic')

  const handlePageClick = (data) => {
    setActivePage(data.selected + 1)
  }

  useEffect(
    function () {
      fetchPhotos()
      // eslint-disable-next-line
    },
    //eslint-disable-next-line
    [activePage]
  )
  const validateQueries = (query, topic) => {
    if (query || topic) {
      return true
    }
    return false
  }
  const generateUrl = (page) => {
    if (query && !topic) {
      return `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=7&client_id=${process.env.REACT_APP_TOKEN}`
    } else if (topic && !query) {
      return `https://api.unsplash.com/topics/${topic}/photos?per_page=18&client_id=${process.env.REACT_APP_TOKEN}`
    } else if (topic && query) {
      return `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=9&client_id=${process.env.REACT_APP_TOKEN}`
    } else {
      return false
    }
  }
  const fetchPhotos = () => {
    setLoading(true)
    setError('')
    const url = generateUrl(activePage)
    console.log(url)
    setTimeout(() => {
      axios
        .get(url)
        .then((response) => {
          if (response.data.results) {
            setImages(response.data.results)
            setPageCount(response.data.total_pages)
          } else {
            setImages(response.data)
          }
          setLoading(false)
        })
        .catch((err) => setError(err.message))
    }, 5000)
  }
  return (
    <div>
      {validateQueries(query, topic) ? (
        <div>
          {!loading ? (
            !error ? (
              <div>
                {images.length > 0 ? (
                  <div>
                    <ResponsiveMasonry columnsCount={3} gutter="10px">
                      <Masonry>
                        {images.map((image) => (
                          <ImageCard key={image.id} imageData={image}></ImageCard>
                        ))}
                      </Masonry>
                    </ResponsiveMasonry>
                  </div>
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
                    I couldn't find anything to show
                  </div>
                )}
              </div>
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
                  name="error"
                  animation="tada"
                  color="rgba(255,0,0,0.45)"
                  style={{ width: '64px', height: '64px' }}
                ></box-icon>
                Something went wrong
                <p>{error}</p>
              </div>
            )
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
                name="meteor"
                animation="tada"
                color="rgba(0,0,0,0.45)"
                style={{ width: '64px', height: '64px' }}
              ></box-icon>
              Photos are falling
            </div>
          )}
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={0}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </div>
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
