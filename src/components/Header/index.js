import './Header.css'
function Header() {
  return (
    <div className="header">
      <div className="logo">LOGO</div>
      <div className="search">
        <input className="customInput"></input>
        <select className="customInput">
          <option>Deneme1</option>
          <option>Deneme2</option>
          <option>Deneme3</option>
        </select>
        <button className="customButton">Search</button>
      </div>
    </div>
  )
}

export default Header
