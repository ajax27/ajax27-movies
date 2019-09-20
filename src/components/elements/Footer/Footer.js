import React from "react";

import { dateNow } from "../../../helpers";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="sc-footer">
      <h4>
        <span>&copy; Copyright 2015 - {dateNow()} Ajax27.com</span>
      </h4>
    </div>
  );
};

export default Footer;
