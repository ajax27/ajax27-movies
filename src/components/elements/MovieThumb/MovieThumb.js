import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./MovieThumb.css";

const MovieThumb = ({ image, movieId, movieName, clickable }) => (
  <div className="sc-moviethumb">
    {clickable ? (
      <Link to={{ pathname: `/${movieId}`, movieName: `${movieName}` }}>
        <img className="clickable img-fluid" src={image} alt="moviethumb" />
      </Link>
    ) : (
      <img src={image} className="img-fluid" alt="moviethumb" />
    )}
  </div>
);

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieName: PropTypes.string,
  clickable: PropTypes.bool
};

export default MovieThumb;
