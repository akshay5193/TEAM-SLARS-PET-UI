//import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import DisplayOwners from "./DisplayOwners";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OwnerInfo from "./OwnerInfo";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/owners">
            <DisplayOwners />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
