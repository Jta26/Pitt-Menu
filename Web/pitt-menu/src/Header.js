import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bckimg from './img.jpg'
import './css/App.css';
import Home from './Home';

class Header extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="header-content">
          <div className="title">
            Pitt Menu
          </div>
          <div className="nav-list">
              <div><Link to="/">Home</Link></div>
              <div><Link to="/Menus">Menus</Link></div>
              <div><a href="#">About</a></div>
              <div><a href="#">Contact</a></div>
              <div className="login">
                <Link to="/login">Login</Link>
              </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
