import React, { Component } from 'react';
import '../css/home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.setFadeUp = this.setFadeUp.bind(this);
    }
    setFadeUp() {
        var buttons = document.getElementsByClassName('nav-item');
        console.log(buttons)
        for (var i = 0; i < buttons.length; i++) {
            this.AddClass(buttons, i)
        }
    }
    AddClass(arr, i) {
        setTimeout(() => {
            console.log(i);
            arr[i].className += ' fadeup';
        }, i * 400);
    }
    componentDidMount() {
        this.setFadeUp();
    }
  render() {
    return (
      <div className="home" >
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
                <div className='today-menu nav-item'>
                    <a href='#'>View Today's Menu</a>
                </div>
                <div className='login nav-item'>
                    <a href='#'>Login</a>
                </div>
                <div className='signup nav-item'>
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
