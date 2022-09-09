import React from 'react'
import './style.css'


import expressImage from "../../images/expressLogo.png";
import mongoImage from "../../images/mongodb.svg";
import stara from "../../images/mongodb.svg";
import nodeImage from "../../images/nodejs.png";
import htmlImage from "../../images/html5.png";
import reactImage from "../../images/react.png";
import cssImage from "../../images/css3.png";
import jsImage from "../../images/JSlogo.png";
import exImage from "../../images/expressjs-icon.svg"





function About() {

  return (
    <div className='about'>
      <div>
      <h2><span className='intro'>Hi, I'm a Software Engineer. Hire me!</span></h2>
      </div>
    
      <div className='skillsIcons'>
      <img src={htmlImage} className="skillSetIcon" alt="Logo" />
      <img src={cssImage} className="skillSetIcon" alt="Logo" />
      <img src={jsImage} className="skillSetIcon" alt="Logo" />
      <img src={mongoImage} className="skillSetIcon" alt="Logo" />
      <img src={exImage} className="skillsetIcon" alt="Logo" />
      <img src={reactImage} className="skillSetIcon" alt="Logo" />
      <img src={nodeImage} className="skillSetIcon" alt="Logo" />
      </div>

      <div>
      <p><span className='skillSet'>
        NoSQL, SQL, APIs;
        Technical Writing, Communication, Research, Conflict Resolution
      </span></p>
    </div>
    </div>
  )
}

export default About