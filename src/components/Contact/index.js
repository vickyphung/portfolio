import React from 'react'
import './style.css'

export default function Contact () {
  return (
    <div className='container'>
      <div className='title'>
          <h1>Contact</h1>
      </div>
      <div className='content'>
        <div className='item'>
        
          <img className="socialIcon" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="javascript"></img>
        
          <img className="socialIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="javascript"></img>
        
          <img className="socialIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/2048px-Circle-icons-mail.svg.png" alt="javascript"></img>
        
        </div>
        {/* <div className="item">
          <h2>Leave a message</h2>
          <div className='detail'>
            <form>
              <input></input>
              <input type='submit'></input>
            </form>
          </div>
        </div>  */}
      </div>
    </div>
  )
}
