import React from 'react'
import "../index.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMessage, faPerson } from '@fortawesome/free-solid-svg-icons'

export function Navbar() {
  return (
    <>
      <nav class="text-white bg-gray-900">
        <ul className='flex '>
          <li className=''><Link to="/">
        <FontAwesomeIcon icon={faHome}/>
            
            </Link></li>
          <li className=''><Link to="/inbox">
        <FontAwesomeIcon icon={faMessage}/>
            
            </Link></li>
          <li className=''><Link to="/profile">
        <FontAwesomeIcon icon={faPerson}/>
            </Link></li>
        </ul>
      </nav>
    </>
  )
}