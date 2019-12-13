import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Owner from "./components/Owner";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Owner />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1 className="display-4">TEAM SLARS...</h1>
      </header> */}
    </div>
  );
}

export default App;
