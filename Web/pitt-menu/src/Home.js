import React, { Component } from 'react';
import './css/Home.css';
import { Link } from 'react-router-dom';
import Header from './Header';

class Home extends Component {
    render() {
        return(
            <div>
            <div className="body-top">
              <div className="sv-wrapper">
              <h1 className="sv-sentence">
                <span>Pitt Menu Helps You</span>
                
                <div className="slidingVertical sv-words">
                    <span>Enjoy</span>
                    <span>Share</span>
                    <span>Experience</span>
                </div>
                <br/>
                  <span>The Dining Hall on Campus</span>
              </h1>
              </div>
            
              <Link to="/Menus">View Today's Menu</Link>
            </div>
            <div className="body-bottom">
              <div className="body-bottom-left">
                <h1>TestLeft</h1>
              </div>
              <div className="body-bottom-right">
                <h1>TestRight</h1>
              </div>
            </div>
            </div>
        )
    }
}

export default Home;