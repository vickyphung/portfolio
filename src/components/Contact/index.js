import React from 'react'
import { motion } from "framer-motion";
import './style.css'

export default function Contact () {

// const socialLinks = [
//   {img:https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg},
//   {img:https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png},
//   {img:https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/2048px-Circle-icons-mail.svg.png},
// ]




  return (
    <div className='container'>

      <div className='content'>
        <div className='contactIcons'>
        <h2><span className='contactTitle'>Contact</span></h2>

{/* 
        {socialLinks.map(() => (
          <img src=`{socialLink.img}`></img>
        )} */}


        <motion.div
          className="box"
          whileHover={{ scale: 1.25 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className='contactInfo'><a href="https://github.com/vickyphung"><img className="socialIcon" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github"></img></a></div>
        </motion.div>
          <div className='contactInfo'><a href="https://www.linkedin.com/in/vicky-phung/"><img className="socialIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="linkedin"></img></a></div>
        
          <div className='contactInfo'><a href="mailto:vicky@vicky.wtf"><img className="socialIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/2048px-Circle-icons-mail.svg.png" alt="email"></img></a> <p>vicky@vicky.wtf</p></div>
        
        </div>
      </div>
    </div>
  )
}
