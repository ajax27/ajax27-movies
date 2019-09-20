import React from "react";
import PropTypes from "prop-types";
import "./Grid.css";

const Grid = ({ header, loading, children }) => {
  const renderElements = () => {
    const gridElements = children.map((element, i) => (
      <div key={i} className="sc-grid-element">
        {element}
      </div>
    ));
    return gridElements;
  };

  return (
    <div className="sc-grid">
      {header && !loading ? <h1>{header}</h1> : null}
      <div className="sc-grid-content">{renderElements()}</div>
    </div>
  );
};

Grid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool
};

export default Grid;
