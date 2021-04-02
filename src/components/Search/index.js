import { useState } from 'react'

import CustomDropdown from '../CustomDropdown'

import './Search.css'
const menu = [
  {
    value: 9568384,
    label: 'Patient'
  },
  {
    value: 1971015,
    label: 'Simplicity'
  },
  {
    value: 1020971,
    label: 'Halloween'
  },
  {
    value: 9717149,
    label: 'Covid19'
  },
  {
    value: 762960,
    label: 'Dark and Moody'
  },
  {
    value: 209138,
    label: 'Earth Tones'
  },
  {
    value: 209138,
    label: 'Happiness'
  },
  {
    value: 9248817,
    label: 'Watercolour'
  },
  {
    value: 433313,
    label: 'Holiday Mood'
  },
  {
    value: 219941,
    label: 'Architecture,Buildings'
  }
]

function Search() {
  const [inputValue, setInputValue] = useState('')
  const [optionSelect, setOptionSelect] = useState(null)

  //window.location is not recommended but we use this here because the router doesn't wrap the header component.
  function handleClick() {
    window.location = `/search${
      inputValue && optionSelect
        ? '?query=' + inputValue + '&topic=' + optionSelect
        : inputValue
        ? '?query=' + inputValue
        : optionSelect
        ? '?topic=' + optionSelect
        : ''
    }`
  }

  return (
    <div className="search">
      <CustomDropdown options={menu} getValue={(val) => setOptionSelect(val)}></CustomDropdown>

      <input
        className="customInput"
        placeholder="Type your interest"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? handleClick() : false)}
      ></input>
      <box-icon class="icon" name="search" color="rgba(0,0,0,0.6)" onClick={handleClick}>
        {' '}
      </box-icon>
    </div>
  )
}

export default Search
