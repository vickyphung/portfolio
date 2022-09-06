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




function About() {

  return (
    <div className='about'>
      <h2><span className='intro'>Hi, I'm a Software Engineer. Hire me!</span></h2>
      <p><span className='skillSet'>
      
        HTML5, CSS3, JavaScript, ES6, React, Node, Express, Mongo DB/
    
        NoSQL, SQL, APIs;
        Technical Writing, Communication, Research, Conflict Resolution

      </span></p>
    </div>
  )
}

export default About