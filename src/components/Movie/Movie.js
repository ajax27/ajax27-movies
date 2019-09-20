import React, { Component } from "react";

import { API_URL, API_KEY } from "../../config";

import Navigation from "../elements/Navigation/Navigation";
import MovieInfo from "../elements/MovieInfo/MovieInfo";
import MovieInfoBar from "../elements/MovieInfoBar/MovieInfoBar";
import Grid from "../elements/Grid/Grid";
import Actor from "../elements/Actor/Actor";
import Spinner from "../elements/Spinner/Spinner";

import "./Movie.css";

class Movie extends Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false
  };

  componentDidMount() {
    // destructuring the props
    const { movieId } = this.props.match.params;

    if (localStorage.getItem(`${movieId}`)) {
      let state = JSON.parse(localStorage.getItem(`${movieId}`));
      this.setState({ ...state });
    } else {
      this.setState({ loading: true });
      // fetch the movie ...
      let endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
      this.fetchItems(endpoint);
    }
  }

  fetchItems = async endpoint => {
    // destructuring the props
    const { movieId } = this.props.match.params;
    try {
      const result = await (await fetch(endpoint)).json();
      if (result.status_code) {
        // If no movie
        this.setState({ loading: false });
      } else {
        this.setState({ movie: result });
        const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        const creditsResult = await (await fetch(creditsEndpoint)).json();
        const directors = creditsResult.crew.filter(
          member => member.job === "Director"
        );
        this.setState(
          {
            actors: creditsResult.cast,
            directors,
            loading: false
          },
          () => {
            localStorage.setItem(`${movieId}`, JSON.stringify(this.state));
          }
        );
      }
    } catch (err) {
      console.log("There was an Error: ", err);
    }
  };

  // fetchItems = endpoint => {
  //   // destructuring the props
  //   const { movieId } = this.props.match.params;
  //   fetch(endpoint)
  //     .then(result => result.json())
  //     .then(result => {
  //       if (result.status_code) {
  //         // If no movie
  //         this.setState({ loading: false });
  //       } else {
  //         this.setState({ movie: result }, () => {
  //           // fetch actors in the setState callback function
  //           let endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
  //           fetch(endpoint)
  //             .then(result => result.json())
  //             .then(result => {
  //               const directors = result.crew.filter(
  //                 member => member.job === "Director"
  //               );
  //               this.setState(
  //                 {
  //                   actors: result.cast,
  //                   directors,
  //                   loading: false
  //                 },
  //                 () => {
  //                   localStorage.setItem(
  //                     `${movieId}`,
  //                     JSON.stringify(this.state)
  //                   );
  //                 }
  //               );
  //             });
  //         });
  //       }
  //     })
  //     .catch(error => console.error("Error:", error));
  // };

  render() {
    // Destructuring the props and state
    const { movieName } = this.props.location;
    const { movie, directors, actors, loading } = this.state;

    return (
      <div className="sc-movie">
        {movie ? (
          <div>
            <Navigation movie={movieName} />
            <MovieInfo movie={movie} directors={directors} />
            <MovieInfoBar
              time={movie.runtime}
              budget={movie.budget}
              revenue={movie.revenue}
            />
          </div>
        ) : null}
        {actors ? (
          <div className="sc-movie-grid">
            <Grid header={"Actors"}>
              {actors.map((element, i) => (
                <Actor key={i} actor={element} />
              ))}
            </Grid>
          </div>
        ) : null}
        {!actors && !loading ? <h1>No movie found</h1> : null}
        {loading ? <Spinner /> : null}
      </div>
    );
  }
}

export default Movie;
