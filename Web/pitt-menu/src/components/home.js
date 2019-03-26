import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
import Button from './button';
import MenuControl from '../components/menucontrol';
import { FirebaseContext } from './Firebase';
class Home extends Component {
    constructor(props) {
        super(props);
    }

    FormatDate(date) {
        var d = new Date(date);
        var month = '' + (d.getMonth() + 1);
        var day = '' + d.getDate();
        var year = d.getFullYear();
        if (month.length < 2) {
            month = '0' + month;
         }
         if (day.length < 2) {
             day = '0' + day;
         }
        return [year, month, day].join('-');
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
                    <div className='nav-buttons'>
                        <Button text="View Menus" link='/' fade time={1}/>
                        <Button text='Login' link='/login' fade time={2}/>
                        <Button text='Sign Up' link='/signup' fade time={3}/>
                    </div>
                    <div className='today-wrapper'>
                  
                            <p className='today-header'>Today's Menu</p>
                            <FirebaseContext.Consumer>
                                {firebase => <MenuControl firebase={firebase} date={this.FormatDate(new Date())}/>}
                            </FirebaseContext.Consumer>
                               
                
                    </div>


                </div>
            </header>
            {/* <footer>
                <p>Created by <a href='http://joelaustin.net' target='_blank'>Joel Austin.</a></p>
                
            </footer> */}
        </div>
        );
    }
}

export default Home;
