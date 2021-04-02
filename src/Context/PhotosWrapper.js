import React, { useState, useEffect } from 'react'

import PhotosContext from './PhotosContext'

export default function PhotoProvider({ children }) {
  const [favoritePhoto, setFavoritePhoto] = useState([])

  // Adding movie to global FavoritePhoto state and localStorage
  const addFavoritePhoto = async (object) => {
    setFavoritePhoto([...favoritePhoto, object])
    const data = JSON.parse(localStorage.getItem('favoritePhotos'))
    data.push(object)
    localStorage.setItem('favoritePhotos', JSON.stringify(data))
  }

  // Removing movie to global FavoritePhoto state and localStorage
  const removeFavoritePhoto = async (photoID) => {
    const newMovie = favoritePhoto.filter((photo) => photo.id !== photoID)
    setFavoritePhoto(newMovie)
    localStorage.setItem('favoritePhotos', JSON.stringify(newMovie))
  }

  // Getting the movies when the app loads
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favoritePhotos'))
    if (data) {
      setFavoritePhoto(JSON.parse(localStorage.getItem('favoritePhotos')))
    } else {
      localStorage.setItem('favoritePhotos', JSON.stringify([]))
    }
  }, [])

  return (
    <PhotosContext.Provider value={{ favoritePhoto, addFavoritePhoto, removeFavoritePhoto }}>
      {children}
    </PhotosContext.Provider>
  )
}
