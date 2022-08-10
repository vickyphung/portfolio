import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation'
import { motion } from "framer-motion";

export default function Projects () {


    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };

      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
    return (
        <div className='container'>
            <Navigation />
            <div className='title'>
                <h1>Projects</h1>
            </div>
                

            <motion.ul
                className="container"
                variants={container}
                initial="hidden"
                animate="visible"
            >
            {[0, 1, 2, 3].map((index) => (
                <motion.li key={index} className="item" variants={item} />
            ))}
            </motion.ul>



                <ul className="projectList">
                    <li className="projectListItem">
                        <a className="projectListLink" href="http://ndsgakjdsb.com/">
                           <h2><span>📍 Places</span></h2>
                        </a>
                        <div className="projectDetail">
                            <p>Places to go in the DMV </p>
                            <p>Full-stack CRUD web app</p>
                            <p>React Node Express MongoDB</p>
                            <p>https://github.com/vickyphung/places-frontend</p>
                            <p>https://github.com/vickyphung/places_backend</p>
                        </div>
                    </li>

                    <li className="projectListItem" >
                        <a className="projectListLink" href="http://apodwithbear.herokuapp.com/">
                            <h2>🪐 APOD</h2>
                        </a>
                        <div className="projectDetail">
                            <p>Astronomy Picture of the Day</p>
                            <p>React</p>
                            https://github.com/vickyphung/APOD
                        </div>
                    </li>
                    <li className="projectListItem">
                        <a className="projectListLink" href="http://weatherwithbear.herokuapp.com/">
                            <h2>🂡 Blackjack</h2> 
                        </a>
                        <div className="projectDetail">
                            Blackjack Card Game 
                            <p>Vanilla JS, HTML, CSS</p>
                            https://github.com/vickyphung/blackjack  
                        </div>
                    </li>
                    <li className="projectListItem">
                        <a className="projectListLink" href="http://weatherwithbear.herokuapp.com/">
                            <h2>🌞 Weather</h2> 
                        </a>
                        <div className="projectDetail">
                            <p>Weather: Current and Forecast</p>
                            <p>React</p>
                            <p>https://github.com/vickyphung/weather-react</p>
                        </div>
                    </li>
                    <li className="projectListItem">
                        <Link className="projectListLink" to="/todo">
                           <h2>📝 To-Do</h2> 
                        </Link>
                        <div className="projectDetail">
                            To-Do List
                            <p>React</p>
                        </div>
                    </li>                      
                </ul>
        </div>
    )
}
