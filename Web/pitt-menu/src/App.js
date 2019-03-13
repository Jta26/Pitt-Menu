import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/App.css';

import Home from './components/home';
import Login from './login';
import SignUp from './signup';
import Dashboard from './dashboard';
class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/login' component={Login}/>
              <Route path='/signup' component={SignUp}/>
              <Route path='/dashboard' component={Dashboard}/>
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
