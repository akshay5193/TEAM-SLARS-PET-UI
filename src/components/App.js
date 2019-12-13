//import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import DisplayOwners from "./DisplayOwners";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OwnerInfo from "./OwnerInfo";
import AddOwner from "./AddOwner/AddOwner"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/owners">
            <DisplayOwners />
          </Route>
          <Route exact path="/owners/addOwner">
            <AddOwner />
          </Route>
          <Route exact path="/owners/:id">
            <OwnerInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
