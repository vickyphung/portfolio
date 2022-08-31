import React from 'react'
import './style.css'
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
        description: 'Blackjack Card Game',
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
        {
        title: '🂡 Baccarat',
        description: 'Baccarat Card Game',
        github: 'https://github.com/vickyphung/baccarat',
        demo: 'http://baccaratwithbear.netlify.com/',
        tech: 'Vanilla JavaScript',
        id: 5,
        },
        {
        title: '👾 USS Pinkybear',
        description: 'Space Battle Console Game',
        github: 'https://github.com/vickyphung/spacebattle',
        demo: 'http://usspinkybear.netlify.com/',
        tech: 'Vanilla JavaScript',
        id: 6,
        },
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


        {/* <div>{project.description}</div>
        <div>{project.demo}</div>
        <div>{project.tech}</div> */}



            <motion.li
                variants={item}
                project={project}
                key={project.id} 
                className="projectItem" 
            >
                <div>{project.description}</div>
                <div>{project.demo}</div>
                <div>{project.tech}</div>
            </motion.li>




        
    </motion.li>

))}        
</motion.ul>
        </div>
    )
}







