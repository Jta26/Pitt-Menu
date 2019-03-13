import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
import Button from './button';
class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
     
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
                    <Button text="View Today's Menu" link='/' fade time={1}/>
                    <Button text='Login' link='/login' fade time={2}/>
                    <Button text='Sign Up' link='/signup' fade time={3}/>
                

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
