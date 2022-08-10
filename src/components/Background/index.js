import './style.css'
import React, { useEffect } from "react";
import Styled from "styled-components";
import Parallax from "parallax-js";
import PropTypes from "prop-types";

import  backgroundImage from "../../images/vector-gradient.jpg";

import expressImage from "../../images/expressLogo.png";
import stara from "../../images/stara.svg";

import star from "../../images/starflwer.png";
import nodeImage from "../../images/nodejs.png";
import htmlImage from "../../images/html5.png";
import reactImage from "../../images/react.png";
import cssImage from "../../images/css3.png";
import jsImage from "../../images/JSlogo.png";
import Navigation from '../Navigation';


const layers = [
  // {
  //   name: "text",
  //   image: textImage,
  //   dataDepth: ".45"
  // },
  {
    name: "rocket",
    image: reactImage,
    dataDepth: "-4.5"
  },
  {
    name: "nodeLogo",
    image: nodeImage,
    dataDepth: "-3.1"
  },
  {
    name: "expressLogo",
    image: expressImage,
    dataDepth: "-1"
  },
  {
    name: "star",
    image: star,
    dataDepth: ".5"
  },

  {
    name: "jsLogo",
    image: jsImage,
    dataDepth: "1.5"
  },

  {
    name: "planet2",
    image: htmlImage,
    dataDepth: "4.5"
  },
  {
    name: "cssLogo",
    image: cssImage,
    dataDepth: "3"
  }
  // {
  //   name: "stara",
  //   image: stara,
  //   dataDepth: "-5"
  // }
];

const Container = Styled.div`
	width: 100%;
	height: 100vh;
  display: flex;
  // justify-content: center;
  // align-items: flex-start;
  flex-direction: column;
	overflow: hidden;
	background: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Background = ({ backgroundImage, layers }) => {
  useEffect(() => {
    const scene = document.getElementById("scene");
    new Parallax(scene);
  });

return (
  <Container backgroundImage={backgroundImage}>
    <div className='navbar'>
      <Navigation />
    </div>
   
    <div id="scene" className='sceneIcons'>
      {layers.map((l, index) => (
        <img
          key={index}
          data-depth={l.dataDepth}
          src={l.image}
          alt={l.name}
          className={l.name}
        />
      ))}
    </div>
    









  </Container>
);
};

Background.propTypes = {
  backgroundImage: PropTypes.string,
  layers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      dataDepth: PropTypes.string
    })
  )
};

Background.defaultProps = {
  backgroundImage: backgroundImage,
  layers: layers
};

export default Background;




    // {/* <div className="bio"> 
    // <span className='twelvePtStar'>✹</span>
    //     <p>Coding my way to bohemian rhapsody.</p> 
    // </div> */}