import React from "react";
import "./style.css";
import { motion } from "framer-motion";

import expressImage from "../../images/expressLogo.png";
import mongoImage from "../../images/mongodb.svg";
import stara from "../../images/mongodb.svg";
import nodeImage from "../../images/nodejs.png";
import htmlImage from "../../images/html5.png";
import reactImage from "../../images/react.png";
import cssImage from "../../images/css3.png";
import jsImage from "../../images/JSlogo.png";
import exImage from "../../images/expressjs-icon.svg";

function About() {
  const skillImage = [
    { image: htmlImage },
    { image: cssImage },
    { image: jsImage },
    { image: mongoImage },
    { image: exImage },
    { image: nodeImage },
    { image: reactImage },
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
    <div className="about">
      <div>
        <h2>
          <span className="intro">Hi, I'm a Software Engineer. Hire me!</span>
        </h2>
      </div>

      <div className="skillsIcons">
        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="skillsIcons"
        >
          {skillImage.map((skillImage, index) => (
            <motion.li variants={item} skillImage={skillImage} key={index}>
                 <motion.div
              className="box"
              whileHover={{ scale: 1.20 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src={skillImage.image} className="skillSetIcon" />
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div>
        <p>
          <span className="skillSet">
            NoSQL, SQL, APIs; Technical Writing, Communication, Research,
            Conflict Resolution
          </span>
        </p>
      </div>
    </div>
  );
}

export default About;
