import React from "react";
import PropTypes from "prop-types";

import "./LoadMoreBtn.css";

const LoadMoreBtn = ({ text, onClick }) => (
  <div className="sc-loadmorebtn" onClick={() => onClick(true)}>
    <p>{text}</p>
  </div>
);

LoadMoreBtn.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default LoadMoreBtn;
