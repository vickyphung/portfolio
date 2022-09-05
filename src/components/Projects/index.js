import React from "react";
import "./style.css";
import { motion } from "framer-motion";
import { ArrowUpIcon } from "@chakra-ui/icons";

export default function Projects() {
const projects = [
{
    title: "📍 Places",
    description: "Places to go in the DMV",
    github:
    "https://github.com/vickyphung/places-frontend , https://github.com/vickyphung/places_backend",
    demo: "xxxx",
    tech: `Users can view, search, post, favorite, and review places to go. Search and add places using Google Maps Places API. Full-CRUD MERN app.`,
    id: 1,
    },
    {
    title: "🪐 APOD",
    description: "Astronomy Picture of the Day",
    github: "https://github.com/vickyphung/APOD",
    demo: "http://apodwithbear.herokuapp.com/",
    tech: `View daily APOD, a random number of posts, or pick by date. React SPA, NASA APOD API.`,
    id: 2,
    },
    {
    title: "🂡 Blackjack",
    description: "Blackjack Card Game",
    github: "https://github.com/vickyphung/blackjack",
    demo: "http://blackjackwithbear.netlify.com/",
    tech: "Players have a $1,000 bankroll. Vanilla JS.",

    id: 3,
    },
    {
    title: "🌞 Weather",
    description: "Current, Hourly, Weekly Weather",
    github: "https://github.com/vickyphung/weather-react",
    demo: "http://weatherwithbear.herokuapp.com/",
    tech: "View weather by zipcode search, provides geolocation info., dark mode option. React SPA, openweather API.",
    id: 4,
    },
    {
    title: "🂡 Baccarat",
    description: "Baccarat Card Game",
    github: "https://github.com/vickyphung/baccarat",
    demo: "http://baccaratwithbear.netlify.com/",
    tech: "Players have a $10,000 bankroll. Still in development. Vanilla JS.",
    id: 5,
    },
    {
    title: "👾 USS Pinkybear",
    description: "Space Battle Console Game",
    github: "https://github.com/vickyphung/spacebattle",
    demo: "http://usspinkybear.netlify.com/",
    tech: "OOP, vanilla JS.",
    id: 6,
},
];

const container = {
visible: {
    opacity: 1,
    scale: 1,
    transition: {
    delayChildren: 0.25,
    staggerChildren: 0.35,
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
<div className="container">
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
            <span className="projectTitle">{project.title}</span>
        </h2>

        <motion.li
            variants={item}
            project={project}
            key={project.id}
            className="projectItem"
        >
            <div>{project.description}</div>
            <p>{project.demo}</p>
            <div>{project.tech}</div>
        </motion.li>
        </motion.li>
    ))}
    </motion.ul>
</div>
);
}
