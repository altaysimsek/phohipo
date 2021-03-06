import './Header.css'

import Searchbar from '../Search'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/" style={{ marginRight: '2rem' }}>
          <img src={process.env.PUBLIC_URL + 'logo.png'} alt="phohipo logo" width="75px"></img>
        </a>
        <nav className="navbarlist">
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Searchbar></Searchbar>
    </header>
  )
}

export default Header
