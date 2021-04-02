import './Header.css'

import Searchbar from '../Search'

function Header() {
  return (
    <navbar className="header">
      <div className="logo">
        <a href="/" style={{ marginRight: '2rem' }}>
          <img src={process.env.PUBLIC_URL + 'logo.png'} alt="phohipo logo" width="75px"></img>
        </a>
        <div className="navbarlist">
          <li>
            <ul>
              <a href="/">Homepage</a>
            </ul>
            <ul>
              <a href="/explore">Explore</a>
            </ul>
            <ul>
              <a href="/favorites">Favorites</a>
            </ul>
          </li>
        </div>
      </div>

      <Searchbar></Searchbar>
    </navbar>
  )
}

export default Header
