import React, { Component } from 'react';

import { FirebaseContext } from './components/Firebase';
import Header from './components/header';
import MenuControl from './components/menucontrol';
import './css/dashboard.css';
class Dashboard extends Component {
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

    render() {
        return(
            <div>

            <FirebaseContext.Consumer>
                {firebase => <Header firebase={firebase}/>}
            </FirebaseContext.Consumer>
            <div className='dash-wrapper'>
                <h1>Today's Menu</h1>
                <FirebaseContext.Consumer>
                    {firebase => <MenuControl firebase={firebase} date={this.FormatDate(new Date())}/>}
                </FirebaseContext.Consumer>
            </div>
            </div>
        )
    }

}

export default Dashboard;