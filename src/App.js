import React from "react";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from "./pages/Home";
import NewPlace from "./places/pages/NewPlace";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
