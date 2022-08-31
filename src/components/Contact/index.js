import React from 'react'
import './style.css'

export default function Contact () {
  return (
    <div className='container'>

      <div className='content'>
        <div className='contactIcons'>
        <h2><span className='contactTitle'>Contact</span></h2>
          <a href="https://github.com/vickyphung"><img className="socialIcon" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github"></img></a>
        
          <a href="https://www.linkedin.com/in/vicky-phung/"><img className="socialIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="linkedin"></img></a>
        
          <a href="mailto:vicky@vicky.wtf"><img className="socialIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/2048px-Circle-icons-mail.svg.png" alt="email"></img></a>
        
        </div>
      </div>
    </div>
  )
}
