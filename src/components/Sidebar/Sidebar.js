import React from 'react'
import './Sidebar.css'

export default function Sidebar({ years, formats, languages, genres }) {
  return (
    <div className='sidebar'>
      <p className='sideSubTitle'>Content</p>
      <ul>
        {genres.map((item) =>
          <li className='filterItem'><label><input className='checkbox' type='checkbox' name={item} value={item}></input>{item}</label></li>
        )}
      </ul>
      <p className='sideSubTitle'>Languages</p>
      <ul className='list'>
        {languages.map((item) =>
          <li className='filterItem'><label><input className='checkbox' type='checkbox' name={item} value={item}></input>{item}</label></li>
        )}
      </ul>
      <p className='sideSubTitle'>Formats</p>
      <ul className='list'>
        {formats.map((item) =>
          <li className='filterItem'><label><input className='checkbox' type='checkbox' name={item} value={item}></input>{item}</label></li>
        )}
      </ul>
      <p className='sideSubTitle'>Years</p>
      <ul className='list'>
        {years.map((item) =>
          <li className='filterItem'><label><input className='checkbox' type='checkbox' name={item} value={item}></input>{item}</label></li>
        )}
      </ul>
    </div>
  )
}
