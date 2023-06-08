import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
export function Home() {
  return (
    <>
      <div className=''>
        <div>
          <ul>
            <li>
            <FontAwesomeIcon icon={faHeart} size="lg" style={{color: "#ff0000",}} />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
