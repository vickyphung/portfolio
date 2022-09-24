import React from "react";
import "./style.css";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "📍 Places",
      // description: "Places to go in the DMV",
      github: "https://github.com/vickyphung/places_backend",
      githubTwo: "https://github.com/vickyphung/places-frontend",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      imgTwo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      demo: "https://placeswithbear.netlify.app/",
      demoTitle: "placeswithbear.netlify.com",
      tech: `View, post, edit, delete, like, and review places in the DMV. Search using Google Maps API and add places from search results. More features still in development. Full-CRUD MERN app.`,
      id: 1,
    },
    {
      title: "🪐 APOD",
      // description: "Astronomy Picture of the Day",
      github: "https://github.com/vickyphung/APOD",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      demo: "https://apodwithbear.herokuapp.com",
      demoTitle: "apodwithbear.herokuapp.com",
      tech: `View the daily astronomy picture of the day, pick a post by date input, or return a selected number of random pictures. Fetches from NASA's APOD API, React SPA.`,
      id: 2,
    },
    {
      title: "🃏 Blackjack",
      // description: "Blackjack Card Game",
      github: "https://github.com/vickyphung/blackjack",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      demo: "https://blackjackwithbear.netlify.com",
      demoTitle: "blackjackwithbear.netlify.com",
      tech: "Blackjack card game. Player vs. Dealer. Blackjack, a score of 21, or closest to 21 wins. Players have a $1,000 bankroll. Written in Vanilla JavaScript.",
      id: 3,
    },
    {
      title: "🌞 Weather",
      // description: "Current, Hourly, Weekly Weather",
      github: "https://github.com/vickyphung/weather-react",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      demo: "https://weatherwithbear.herokuapp.com",
      demoTitle: "weatherwithbear.herokuapp.com",
      tech: "View current weather and conditions by zip code search. Includes hourly and weekly forecast. Provides geolocation info and offers dark mode. Fetches from OpenWeather API, React SPA.",
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
      <h1><span className="title">Projects</span></h1>
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

            <div className="projectText">
            <div className="projectTitle">
              <h2>{project.title}</h2>
            </div>


           <div className="projInfo">
              <div className="projectLinkBox">
                <a className="projectLink" href={project.demo}>{project.demoTitle}</a>
              </div>

              <div className="projectDesc">
              {project.tech}
              </div>

              </div>
     
      
                <div className="githubIcon">
                    <a href={project.github}>
                        <img className="gitHubIcon" src={project.img} alt="githubIcon"></img>
                    </a>
                </div>
        </div>

          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
