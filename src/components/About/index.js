import React from "react";
import "./style.css";
// import { motion } from "framer-motion";

// import mongoImage from "../../images/mongodb.svg";
// import nodeImage from "../../images/nodejs.png";
// import htmlImage from "../../images/html5.png";
// import reactImage from "../../images/react.png";
// import cssImage from "../../images/css3.png";
// import jsImage from "../../images/JSlogo.png";
// import exImage from "../../images/expressjs-icon.svg";

function About() {
  // const skillImage = [
  //   { image: reactImage },
  //   { image: jsImage },
  //   { image: nodeImage },
  //   { image: exImage },
  //   { image: mongoImage },
  //   { image: cssImage },
  //   { image: htmlImage },
  // ];

  // const container = {
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       delayChildren: 0.15,
  //       staggerChildren: 0.25,
  //     },
  //   },
  // };

  // const item = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //   },
  // };
  return (
    <div className="about">
      <div className="skills">
        <h1>
          <span className="intro">Software Engineer</span>
        </h1>
    
      </div>
{/* 
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
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img src={skillImage.image} className="skillSetIcon" />
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
*/}

      <p className="skillSet">
            React, JavaScript, Node.js, Express.js, MongoDB, CSS3, HTML5 <br />
            NoSQL, REST APIs; Technical Writing, Communication, Research, Conflict Resolution
        </p>

    </div>
  );
}

export default About;
