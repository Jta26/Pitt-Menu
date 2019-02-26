import React, { Component } from 'react';
import './css/Home.css';
import { Link } from 'react-router-dom';
import Header from './Header';

class Home extends Component {
    render() {
        return(
            <div>
            <div className="body-top">
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