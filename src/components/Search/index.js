import { useState, useEffect } from 'react'
import axios from 'axios'
import './Search.css'

function Search() {
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
    <div className="search">
      <select className="customSelect" onChange={(e) => setOptionSelect(e.target.value)}>
        <option default  value="null">
          Select a topic
        </option>
        {topics.map((item) => (
          <option key={item.id} value={item.slug}>
            {item.title}
          </option>
        ))}
      </select>
      <input
        className="customInput"
        placeholder="Type your interest"
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <box-icon class="icon" name="search" color="rgba(0,0,0,0.6)"></box-icon>
    </div>
  )
}

export default Search
