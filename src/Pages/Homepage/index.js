import { useEffect } from 'react'
import './Homepage.css'

function Homepage() {
  useEffect(() => {
    console.log(process.env.REACT_APP_TOKEN)
  }, [])

  return <div className="content">Anasayfa</div>
}

export default Homepage
