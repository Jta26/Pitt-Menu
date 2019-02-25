import React, { Component } from 'react';
import bckimg from './img.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="header-content">
          <div className="title">
            Pitt Menu
          </div>
          <div className="nav-list">
              <div><a href="#">Home</a></div>
              <div><a href="#">Menus</a></div>
              <div><a href="#">About</a></div>
              <div><a href="#">Contact</a></div>
          </div>
          </div>
        </div>
        <div className="App-body">
          <div className="body-top">
            <button>View Today's Menu</button>
          </div>
          <div className="body-bottom">
            {/* TODO */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
