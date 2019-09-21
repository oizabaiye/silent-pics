import React from 'react'
import './styles/Header.css'

function Header() {
  return (
    <header className="white vh-100 flex flex-column justify-center pa3">
      <h1 className="f-subheadline ttu">Noticer</h1>

      <h3 className="athelas f2">A simpler image search</h3>

      <p className="f5">Courtesy of <span><a href="http://www.pexels.com" className="link underline-hover white">Pexels.com</a></span></p>
    </header>
  )
}

export default Header