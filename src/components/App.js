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
import PersonList from "./PersonList";


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
            <PersonList />
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
