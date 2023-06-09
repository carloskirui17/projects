import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons'
import "../index.css"

export function Home() {
  return (
    <div className='flex '>
      <div id="video-container" className='w-full'>
        <div id="options">
          <div class="like">
            <FontAwesomeIcon icon={faHeart} size="2xl" />

          </div>
          <div class="comment">
            <FontAwesomeIcon icon={faCommentDots} size="2xl" style={{ color: "#ffffff", }} />
          </div>
          <div class="share">
            <FontAwesomeIcon icon={faShare} size="2xl" style={{ color: "#ffffff", }} />
          </div>
          
        </div>
      </div>

    </div>
  )
}