import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/index.css';

import TransitionShell from './components/TransitionShell';
import Header from './Header'
import Home from './Home';
import Menus from './Menus';
import Login from './Login';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
            <Router>
                <div>
                <Header/>
                        <Switch>
                            <Route exact path="/" component={TransitionShell(Home)}/>
                            <Route path="/Menus" component={TransitionShell(Menus)}/>
                            <Route path="/Login" component={TransitionShell(Login)}/>
                        </Switch>
                </div>
            </Router>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
