import './Header.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Header() {
  const [inputValue, setInputValue] = useState('')
  const [optionSelect, setOptionSelect] = useState(null)
  const [topics, setTopics] = useState([])
  useEffect(() => {
    getTopics()
  }, [])
  const getTopics = () => {
    axios
      .get(`https://api.unsplash.com/topics?client_id=${process.env.REACT_APP_TOKEN}`)
      .then((response) => {
        setTopics(response.data)
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="header">
      <div className="logo">LOGO</div>
      <div className="search">
        <input className="customInput" onChange={(e) => setInputValue(e.target.value)}></input>
        <select onChange={(e) => setOptionSelect(e.target.value)} className="customInput">
          <option selected disabled hidden>
            Select a topic
          </option>
          {topics.map((item) => (
            <option key={item.id} value={item.slug}>
              {item.title}
            </option>
          ))}
        </select>
        <button className="customButton">Search</button>
      </div>
    </div>
  )
}

export default Header
