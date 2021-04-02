import './Customdropdown.css'
import { useState } from 'react'

function CustomDropdown({ options, getValue }) {
  const [visible, setVisible] = useState(false)
  const [title, setTitle] = useState('Select a collection')
  return (
    <div>
      <button className="dropdown-button" onClick={(e) => setVisible(!visible)}>
        <span style={{ marginRight: 'auto' }}>{title}</span>
        <box-icon name="down-arrow" type="solid" color="rgba(0,0,0,0.6)" size="xs">
          {' '}
        </box-icon>
      </button>
      <div className="custom-dropdown" style={{ display: visible ? 'flex' : 'none' }}>
        {options.map((item, index) => (
          <span
            key={index}
            onClick={(e) => {
              setTitle(e.target.innerText)
              getValue(e.target.dataset.value)

              setVisible(false)
            }}
            className="option custom-dropdown-item"
            data-value={item.value}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default CustomDropdown
