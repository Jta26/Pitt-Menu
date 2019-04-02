import React, { Component } from 'react';

import { FirebaseContext } from './components/Firebase';
import Header from './components/header';
import MenuControl from './components/menucontrol';
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
            <FirebaseContext.Consumer>
                                {firebase => <MenuControl firebase={firebase} date={this.FormatDate(new Date())}/>}
                            </FirebaseContext.Consumer>
            </div>
        )
    }

}

export default Dashboard;