import './Homepage.css'
import { Link } from 'react-router-dom'

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
    </div>
  )
}

export default Homepage
