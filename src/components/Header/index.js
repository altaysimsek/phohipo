import './Header.css'

import Searchbar from '../Search'

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <a href="/" style={{ marginRight: '3rem' }}>
          <img src="./logo.png" alt="phohipo logo" width="75px"></img>
        </a>
        <div className="navbarlist">
          <li>
            <ul>
              <a href="/">Homepage</a>
            </ul>
            <ul>
              <a href="/discover">Discover</a>
            </ul>
            <ul>
              <a href="/favorites">Favorites</a>
            </ul>
          </li>
        </div>
      </div>

      <Searchbar></Searchbar>
    </div>
  )
}

export default Header
