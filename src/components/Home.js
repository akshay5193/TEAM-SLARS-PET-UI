import React from 'react';
import logo from '../logo.svg';
import homeImage from './image/pets.png'

function Home(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <img src ={homeImage}></img>
        <h1 className="display-4">TEAM SLARS.....</h1>
      </header>
    </div>
  );
}

export default Home;