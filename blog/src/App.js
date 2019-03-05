import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './css/App.css';


import TransitionShell from './components/TransitionShell';

import Header from './components/Header';
import Home from './pages/home';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
            <Header/>
             <Switch>
              <Route path='/' component={TransitionShell(Home)}/>
            </Switch>
          </div>
      </div>
    );
  }
}

export default App;
