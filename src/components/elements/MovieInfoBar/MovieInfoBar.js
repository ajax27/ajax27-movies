import React from "react";
import PropTypes from "prop-types";

import { calcTime, convertMoney } from "../../../helpers";

import FontAwesome from "react-fontawesome";
import "./MovieInfoBar.css";

const MovieInfoBar = ({ time, budget, revenue }) => (
  <div className="sc-movieinfobar">
    <div className="sc-movieinfobar-content">
      <div className="sc-movieinfobar-content-col">
        <FontAwesome className="fa-time" name="clock-o" size="2x" />
        <span className="sc-movieinfobar-info">
          Running Time: {calcTime(time)}
        </span>
      </div>
      <div className="sc-movieinfobar-content-col">
        <FontAwesome className="fa-budget" name="money" size="2x" />
        <span className="sc-movieinfobar-info">
          Budget: {convertMoney(budget)}
        </span>
      </div>
      <div className="sc-movieinfobar-content-col">
        <FontAwesome className="fa-revenue" name="ticket" size="2x" />
        <span className="sc-movieinfobar-info">
          Revenue: {convertMoney(revenue)}
        </span>
      </div>
    </div>
  </div>
);

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number
};

export default MovieInfoBar;
