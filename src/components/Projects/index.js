import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation'
import { motion } from "framer-motion";


export default function Projects () {

    const projects = [
        {
        title: '📍 Places',
        description: 'Places to go in the DMV',
        github: 'https://github.com/vickyphung/places-frontend , https://github.com/vickyphung/places_backend',
        demo: 'full crud',
        tech: 'React Node Express MongoDB',
        id: 1,
        },
        {
        title: '🪐 APOD',
        description: 'Astronomy Picture of the Day',
        github: 'https://github.com/vickyphung/APOD',
        demo: 'http://apodwithbear.herokuapp.com/',
        tech: 'React, JavaScript',
        id: 2,
        },
        {
        title: '🂡 Blackjack',
        description: 'Blackjack card game',
        github: 'https://github.com/vickyphung/blackjack',
        demo: 'http://blackjackwithbear.netlify.com/',
        tech: 'Vanilla JavaScript',

        id: 3,
        },
        {
        title: '🌞 Weather',
        description: 'Current, Hourly, Weekly Weather',
        github: 'https://github.com/vickyphung/weather-react',
        demo: 'http://weatherwithbear.herokuapp.com/',
        tech: 'React, JavaScript',
        id: 4,
        },
        // {
        // title: '🪐 APOD',
        // description: 'Astronomy Picture of the Day',
        // github: 'https://github.com/vickyphung/APOD',
        // demo: 'http://apodwithbear.herokuapp.com/',
        // tech: 'React, JavaScript',
        // id: 5,
        // },
        // {
        // title: '🪐 APOD',
        // description: 'Astronomy Picture of the Day',
        // github: 'https://github.com/vickyphung/APOD',
        // demo: 'http://apodwithbear.herokuapp.com/',
        // tech: 'React, JavaScript',
        // id: 6,
        // },
    ];

const container = {
    // hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
        delayChildren: 0.25,
        staggerChildren: 0.35
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
            {/* <Navigation /> */}
            <div className='title'>
                <h1>Projects</h1>
                <span><a href="/">home</a></span>
            </div>
                

            <motion.ul
                className="projectList"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {projects.map((project) => (
                    <motion.li
                        variants={item}
                        project={project}
                        key={project.id} 
                        className="projectListItem" 
                    >
                        <h2>
                            <span className='projectTitle'>
                                {project.title}
                            </span>
                        </h2>
                        <motion.ul
                            // className="container"
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            {projects.map((project) => (
                                <motion.li
                                    variants={item}
                                    project={project}
                                    key={project.id} 
                                    className="projectDetail" 
                                >        
                                    {project.id}
                                    {project.description}

                                </motion.li>
                            ))}          
                        </motion.ul>
                    </motion.li>
                ))}          
            </motion.ul>
        </div>
    )
}
