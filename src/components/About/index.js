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
          <motion.li variants={item}>
            <img src={htmlImage} className="skillSetIcon" alt="Logo" />
          </motion.li>
          <motion.li variants={item}>
            <img src={cssImage} className="skillSetIcon" alt="Logo" />
          </motion.li>
          <motion.li variants={item}>
            <img src={jsImage} className="skillSetIcon" alt="Logo" />
          </motion.li>
          <motion.li variants={item}>
            <img src={mongoImage} className="skillSetIcon" alt="Logo" />
          </motion.li>
          <motion.li variants={item}>
            <img src={exImage} className="skillsetIcon" alt="Logo" />
          </motion.li>
          <motion.li variants={item}>
            <img src={reactImage} className="skillSetIcon" alt="Logo" />
          </motion.li>
          <motion.li variants={item}>
            <img src={nodeImage} className="skillSetIcon" alt="Logo" />
          </motion.li>
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
