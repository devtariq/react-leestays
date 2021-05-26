import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect,} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Mapview from "./pages/MapView";
import Destination from "./pages/Destination";
import Login from "./pages/Login";
import SingleVilla from "./pages/SingleVilla";

function App() {
  return (
    <Router>
      <Header />
        <Switch>
            <Route path="/" exact>
            <Home />
            </Route>
            <Route path="/destination">
            <Destination />
            </Route>
            <Route path="/mapview">
                <Mapview />
            </Route>
            <Route path="/single-villa">
                <SingleVilla />
            </Route>
            <Route path="/login" exact>
            <Login />
            </Route>
            <Redirect to="/" />
        </Switch>
      <Footer />
    </Router>
  );
};

export default App;
