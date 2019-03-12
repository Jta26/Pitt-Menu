import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/App.css';

import Home from './components/home';
class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path='/' component={Home}/>
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
