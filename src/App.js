import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect,} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Mapview from "./pages/MapView";
import Destination from "./pages/Destination";
import SingleVilla from "./pages/SingleVilla";
import Register from "./pages/Registration";
import Login from "./pages/Login";
import MyProfile from './pages/MyProfile';

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
            <Route path="/register" exact>
             <Register />
            </Route>
            <Route path="/login" exact>
            <Login />
            </Route>
            <Route path="/myprofile" exact>
                <MyProfile/>
            </Route>
            <Redirect to="/" />
        </Switch>
      <Footer />
    </Router>
  );
};

export default App;
