import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx"




function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/home"><Header/><Home/><Footer/></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
