import React from 'react'
import './Body.css'

export default function Body({ data, pageEntries, page, setPage }) {
  let pages = data.length / pageEntries;


  const leftArrow = () => {
    if (page <= 1) {
      setPage(1);
    }
    else {
      setPage(page - 1);
    }
  }
  const rightArrow = () => {
    if (page >= Math.ceil(pages)) {
      setPage(Math.ceil(pages));
    }
    else {
      setPage(page + 1);
    }
  }
  return (
    <div className='mainBody'>
      <div className='booksContainer'>
        {data.slice((pageEntries * page) - pageEntries, pageEntries * page).map((book) => (

          <div className='eachBook'>
            <img className='cover' src={book.cover}></img>
            <div className='info'>
              <p className='title'>{book.name.substring(0, 40)}</p>
              <p className='author'>{book.author}</p>
            </div>
          </div>
        ))}

      </div>
      <div className='pageButtons'>
        <button onClick={leftArrow} className='pages pages-first'> {'<'} </button>
        {[...Array(Math.ceil(pages))].map((item, idx) =>
          <button onClick={() => { setPage(idx + 1) }} className='pages' >{idx + 1}</button>
        )}
        <button onClick={rightArrow} className='pages pages-last'>{'>'}</button>
      </div>
    </div>
  )
}
