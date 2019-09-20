import React, { Component } from "react";
import PropTypes from "prop-types";

import FontAwesome from "react-fontawesome";

import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    value: ""
  };
  // reset
  timeout = null;

  movieSearch = event => {
    const { callback } = this.props;

    this.setState({ value: event.target.value });
    clearTimeout(this.timeout);
    // Set a timeout to wait for the user to stop writing
    // So we don´t have to make unnessesary calls
    this.timeout = setTimeout(() => {
      callback(false, this.state.value);
    }, 500);
  };

  render() {
    const { value } = this.state;

    return (
      <div className="sc-searchbar">
        <div className="sc-searchbar-content">
          <FontAwesome className="fa-search" name="search" size="2x" />
          <input
            type="text"
            className="sc-searchbar-input"
            placeholder="Search..."
            onChange={this.movieSearch}
            value={value}
          />
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  callback: PropTypes.func
};

export default SearchBar;
