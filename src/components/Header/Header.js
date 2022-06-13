import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='wrapper'>
      <div className='header'>
        <img className='logo' src="FakeBookstore.png" />
        <div className='navigation'>
          <input placeholder="Search for a book, genre or author" className='search' type='text'></input>
          <button className='searchButton'><i class="fa-solid fa-magnifying-glass"></i></button>
          <button className='cart'><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
      </div>
      <div className='subHeader'>
        <div className='nav-wrapper'>
          <p className='nav'>GENRES</p>
        </div>
        <div className='nav-wrapper'>
          <p className='nav'>AUTHORS</p>
        </div>
        <div className='nav-wrapper'>
          <p className='nav'>LANGUAGE</p>
        </div>
        <div className='nav-wrapper'>
          <p className='nav'>FORMAT</p>
        </div>
        <div className='nav-wrapper'>
          <p className='nav'>YEAR</p>
        </div>
        <div className='nav-wrapper'>
          <p className='nav'>ABOUT</p>
        </div>
      </div>
    </div>

  )
}
