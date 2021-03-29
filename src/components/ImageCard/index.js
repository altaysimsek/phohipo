import React from 'react'

import './ImageCard.css'

function ImageCard({ imageData }) {
  return (
    <div className="imageCard">
      <div className="iconBox">
        <box-icon name="heart" class="icon"></box-icon>
      </div>
      <a target="blank" href={imageData.links.html}>
      <img
        src={imageData.urls.regular}
        style={{ width: '100%', display: 'block' }}
        alt={imageData.alt_description}
      ></img></a>
    </div>
  )
}

export default ImageCard
