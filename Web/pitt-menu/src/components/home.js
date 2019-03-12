import React, { Component } from 'react';
import '../css/home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
          <header>
              <div className='header-text'>
                <div className="sv-wrapper">
                <h1 className="sv-sentence">
                    <span><span className='sv-title'>Pitt Menu</span> helps you</span>
                    
                    <div className="slidingVertical sv-words">
                        <span>enjoy</span>
                        <span>share</span>
                        <span>taste</span>
                        <span>love</span>
                    </div>
                    <br/>
                    <span>the dining hall on campus.</span>
                </h1>
                </div>
              </div>
              <div className='header-nav'>
                <div className='today-menu'>
                    <a href='#'>View Today's Menu</a>
                </div>
                <div>
                    <a href='#'>Login</a>
                </div>
                <div>
                    <a href='#'>Sign Up</a>
                </div>
            

              </div>
          </header>
          <footer>
              <p>Created by <a href='http://joelaustin.net' target='_blank'>Joel Austin.</a></p>
              
          </footer>
      </div>
    );
  }
}

export default Home;
