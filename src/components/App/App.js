import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../elements/Header/Header";
import Footer from "../elements/Footer/Footer";
import Home from "../Home/Home";
import Movie from "../Movie/Movie";
import NotFound from "../elements/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:movieId" component={Movie} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
