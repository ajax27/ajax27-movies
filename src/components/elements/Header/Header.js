import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => (
  <div className="sc-header">
    <div className="sc-header-content">
      <Link to="/">
        <img
          className="sc-logo"
          src="/images/reactMovie_logo.png"
          alt="sc-logo"
        />
      </Link>
      <img
        className="sc-tmdb-logo"
        src="/images/tmdb_logo.png"
        alt="tmdb-logo"
      />
    </div>
  </div>
);

export default Header;
