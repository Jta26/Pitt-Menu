import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './css/App.css';

import 'semantic-ui-css/semantic.min.css'

import TransitionShell from './components/TransitionShell';

import Home from './pages/home';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
             <Switch>
              <Route path='/' component={TransitionShell(Home)}/>
            </Switch>
          </div>
      </div>
    );
  }
}

export default App;
