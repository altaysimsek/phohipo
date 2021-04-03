import { useEffect, useState } from 'react'
import './Search.css'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { ImageCard, ErrorBox } from '../../components'
import axios from 'axios'
import ReactPaginate from 'react-paginate'

function SearchPage() {
  const [images, setImages] = useState([])
  const [pageCount, setPageCount] = useState(1)
  const [activePage, setActivePage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  //Parsing the url first and getting querys
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
      return `https://api.unsplash.com/collections/${topic}/photos?per_page=9&client_id=${process.env.REACT_APP_TOKEN}`
    } else if (topic && query) {
      return `https://api.unsplash.com/search/photos?query=${query}&collections=${topic}&page=${page}&per_page=9&client_id=${process.env.REACT_APP_TOKEN}`
    } else {
      return false
    }
  }
  const fetchPhotos = () => {
    setLoading(true)
    setError('')
    const url = generateUrl(activePage)
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
    }, 2000)
  }
  return (
    <div className="content">
      {validateQueries(query, topic) ? (
        <>
          {!loading ? (
            !error ? (
              <>
                {images.length > 0 ? (
                  <>
                    <ResponsiveMasonry columnsCount={3} gutter="10px">
                      <Masonry>
                        {images.map((image) => (
                          <ImageCard key={image.id} imageData={image}></ImageCard>
                        ))}
                      </Masonry>
                    </ResponsiveMasonry>
                  </>
                ) : (
                  <ErrorBox
                    iconName="sad"
                    color="rgba(10,6,161,0.6)"
                    text="I couldn't find anything to show."
                  ></ErrorBox>
                )}
              </>
            ) : (
              <ErrorBox
                iconName="error"
                text="Something went wrong."
                color="rgba(255,0,0,0.45)"
              ></ErrorBox>
            )
          ) : (
            <ErrorBox
              iconName="meteor"
              color="rgba(0, 0, 0, 0.45)"
              text="Photos are falling."
            ></ErrorBox>
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
        </>
      ) : (
        <ErrorBox
          iconName="error-alt"
          color="rgba(0,0,0,0.45)"
          text="Plese enter keyword or select topic."
        ></ErrorBox>
      )}
    </div>
  )
}

export default SearchPage
