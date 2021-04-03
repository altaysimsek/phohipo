import React from 'react'

function ErrorBox({ iconName, color, text }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '20vh',
        fontWeight: '600',
        color: 'rgba(0,0,0,.45)',
        fontSize: '24px'
      }}
    >
      <box-icon
        name={iconName}
        animation="tada"
        color={color}
        style={{ width: '56px', height: '56px' }}
      ></box-icon>
      {text}
    </div>
  )
}

export default ErrorBox
