import React from 'react'
import './Body.css'

export default function Body({ data }) {
  return (
    <div className='mainBody'>
      <div className='booksContainer'>
        {data.map((book) => (

          <div className='eachBook'>
            <img className='cover' src={book.cover}></img>
            <div className='info'>
              <p className='title'>{book.name.substring(0, 40)}</p>
              <p className='author'>{book.author}</p>
            </div>
          </div>
        ))}

      </div>
      <div>buttons</div>
    </div>
  )
}
