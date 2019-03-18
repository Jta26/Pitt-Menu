import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/App.css';

import Home from './components/home';
import Login from './login';
import SignUp from './signup';
import Dashboard from './dashboard';
class App extends Component {
  render() {
    console.log("This is the process.env", process.env.PUBLIC_URL)
    return (
      <div className="App">
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path={'/'} component={Home}/>
              <Route exact path={'/login'}component={Login}/>
              <Route exact path={'/signup'} component={SignUp}/>
              <Route exact path={'/dashboard'} component={Dashboard}/>
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
