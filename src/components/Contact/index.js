import React from "react";
import { motion } from "framer-motion";
import "./style.css";

export default function Contact() {
  const socialLinks = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      url: "https://github.com/vickyphung",
    },

    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png",
      url: "https://www.linkedin.com/in/vicky-phung/",
    },

    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/2048px-Circle-icons-mail.svg.png",
      url: "mailto:vicky@vicky.wtf",
      email:"vicky@vicky.wtf"
    },
  ];

  return (
    <div className="contact">
      <div className="content">
        <div className="contactIcons">

          {socialLinks.map((socialLink) => (
            <motion.div
              className="box"
              whileHover={{ scale: 1.20 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="contactInfo">
                <a href={socialLink.url}>
                  <img
                    className="socialIcon"
                    src={socialLink.img}
                    alt="github"
                  ></img>
                </a>
                <p className="email">{socialLink.email}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
