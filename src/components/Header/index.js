import './Header.css'

import Searchbar from '../Search'

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <a href="/" style={{ marginRight: '2rem' }}>
          <img src={process.env.PUBLIC_URL + 'logo.png'} alt="phohipo logo" width="75px"></img>
        </a>
        <div className="navbarlist">
          <ul>
            <li>
              <a href="/">Homepage</a>
            </li>
            <li>
              <a href="/explore">Explore</a>
            </li>
            <li>
              <a href="/favorites">Favorites</a>
            </li>
          </ul>
        </div>
      </div>

      <Searchbar></Searchbar>
    </div>
  )
}

export default Header
