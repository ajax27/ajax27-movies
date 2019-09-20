import React from "react";

import "./NotFound.css";

const NotFound = () => (
  <div className="sc-notfound">
    <img
      className="nf-img"
      src="/images/broken-link-building-header.jpg"
      alt="Broken Link"
    />
    <h1>404 Not Found</h1>
    <h3>Whooops. This page doesn't exist</h3>
  </div>
);

export default NotFound;
