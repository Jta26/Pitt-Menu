import React, { Component } from 'react';

import { FirebaseContext } from './components/Firebase';
import Header from './components/header';
class Dashboard extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            
            <FirebaseContext.Consumer>
                {firebase => <Header firebase={firebase}/>}
            </FirebaseContext.Consumer>
        )
    }

}

export default Dashboard;