import './Homepage.css'
import { Link } from 'react-router-dom'
import { Search } from '../../components'

function Homepage() {
  return (
    <div className="banner">
      <div className="welcomer">
        <img src="./hipologo.png" width="50px" alt="hipologo"></img>
        <h1>
          Pho<span style={{ color: '#E11D39' }}>hipo</span>
        </h1>
        <p>
          In this web application, users will explore the photos published to Unsplash in a certain
          collection with a certain keyword. For example, someone might be interested in nature
          photography and want to explore photos taken in Istanbul. Then, he can type in `Istanbul`
          and select `Nature` from the dropdown to search Unsplash.
        </p>

        <Link to="/discover">
          <button className="discoverButton">
            <div className="centerialize">
              <box-icon name="right-arrow" class="arrowico"></box-icon>Discover
            </div>
          </button>
        </Link>
      </div>
      <div className="searchbanner">
        <h2 style={{ marginBottom: '2rem', marginTop: '3rem' }}>
          <span style={{ color: '#e11d39' }}>Search</span> by topic & keyword
        </h2>
        <Search></Search>
      </div>
    </div>
  )
}

export default Homepage
