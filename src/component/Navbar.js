import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/owners" className="nav-link">Display Owners</Link>
        </li>
      </ul>

      <a className="navbar-brand" href="#">
            Pet Clinic
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Owner
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pet
                </a>
              </li>
            </ul>
          </div>
    </nav>
  );
}

export default Navbar;