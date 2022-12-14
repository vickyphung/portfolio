import React from "react";
import { motion } from "framer-motion";
import "./style.css";

export default function Contact() {
  const socialLinks = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      url: "https://github.com/vickyphung",
      alt: "github",
      title: "https://github.com/vickyphung",

    },

    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png",
      url: "https://www.linkedin.com/in/vicky-phung/",
      alt: "linked in",
      title:"https://www.linkedin.com/in/vicky-phung/",

    },

    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/2048px-Circle-icons-mail.svg.png",
      url: "mailto:vicky@vicky.wtf",
      email: "vicky@vicky.wtf",
      alt: "email",
      title:"vicky@vicky.wtf",
        },
  ];

  return (


<div className="projectContainer">
    <h1><span className="title">Contact</span></h1>

        <div className="contact">



          {socialLinks.map((socialLink) => (
            <motion.div
              className="box"
              whileHover={{ scale: 1.20 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <a href={socialLink.url}>
                  <img
                    className="socialIcon"
                    src={socialLink.img}
                    alt={socialLink.alt}
                    title={socialLink.title}
                  ></img>
                </a>
            </motion.div>
          ))}

    </div>
    </div>
  );
}
