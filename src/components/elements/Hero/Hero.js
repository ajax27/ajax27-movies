import React from "react";
import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ image, title, text }) => {
  return (
    <div
      className="sc-heroimage"
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0)
           39%, rgba(0,0,0,0)
           41%, rgba(0,0,0,0.65)
           100%),
           url('${image}'), #1c1c1c`
      }}
    >
      <div className="sc-heroimage-content">
        <div className="sc-heroimage-text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};

export default Hero;
