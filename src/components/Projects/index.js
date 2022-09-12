import React from "react";
import "./style.css";
import { motion } from "framer-motion";
import {Link} from "react-router-dom"


export default function Projects() {
const projects = [
{
    title: "📍 Places",
    // description: "Places to go in the DMV",
    github:
    "https://github.com/vickyphung/places-frontend , https://github.com/vickyphung/places_backend",
    demo: "xxxxxxxx",
    demoTitle: "placeswithbear.herokuapp.com",
    tech: `Users can post, view, update, delete, like, and review places to go in the DMV. Users can also search using the Google Maps Places API and add places from the search results. Full-CRUD MERN app.`,
    id: 1,
    },
    {
    title: "🪐 APOD",
    // description: "Astronomy Picture of the Day",
    github: "github.com/vickyphung/APOD",
    demo: "https://apodwithbear.herokuapp.com",
    demoTitle: "apodwithbear.herokuapp.com",
    tech: `View the astronomy picture of the day, pick by date, or return a selected number of random posts. NASA APOD API, React SPA.`,
    id: 2,
    },
    {
    title: "🃏 Blackjack",
    // description: "Blackjack Card Game",
    github: "https://github.com/vickyphung/blackjack",
    demo: "https://blackjackwithbear.netlify.com",
    demoTitle: "blackjackwithbear.netlify.com",
    tech: "Blackjack card game. Player vs. Dealer. Players have a $1,000 bankroll. Vanilla JavaScript.",
    id: 3,
    },
    {
    title: "🌞 Weather",
    // description: "Current, Hourly, Weekly Weather",
    github: "https://github.com/vickyphung/weather-react",
    demo: "https://weatherwithbear.herokuapp.com",
    demoTitle: "weatherwithbear.herokuapp.com",
    tech: "View the current, hourly, and weekly weather by zipcode search, fetch geolocation info, offers dark mode. openWeather API, React SPA.",
    id: 4,
    },
    // {
    // title: "🂡 Baccarat",
    // description: "Baccarat Card Game",
    // github: "https://github.com/vickyphung/baccarat",
    // demo: "xxxxxxxx",
    // tech: "Players have a $10,000 bankroll. Still in development. Vanilla JS.",
    // id: 5,
    // },
//     {
//     title: "👾 Star Wars API",
//     description: "Star Wars API",
//     github: "https://github.com/vickyphung/xxxx",
//     demo: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//     tech: "",
//     id: 6,
// },
];

const container = {
visible: {
    opacity: 1,
    scale: 1,
    transition: {
    delayChildren: 0.35,
    staggerChildren: 0.45,
    },
},
};

const item = {
hidden: { y: 20, opacity: 0 },
visible: {
    y: 0,
    opacity: 1,
},
};
return (
<div className="projectContainer">
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

        <div className="projectTitle">
        <h2>
           {project.title}
        </h2>
        </div>
        
        {/* <motion.li
            variants={item}
            project={project}
            key={project.id}
            className="projectText"
        > */}

          

            <div className="projectInfo">
                {/* <div className="projectSubtitle">
                    {project.description}
                </div> */}

                <div className="projectLink">
                        <a href={project.demo}>
                            {project.demoTitle}
                        </a>
                </div>
          

                <div className="projectDesc">
                    {project.tech}
                </div>
               
                </div>
        {/* </motion.li> */}

        </motion.li>

    ))}
    </motion.ul>

</div>
);
}
