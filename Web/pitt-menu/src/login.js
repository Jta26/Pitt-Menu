import React, { Component } from 'react';
import LoginForm from './components/loginform';
import Header from './components/header';
import './css/login.css';
import { FirebaseContext } from './components/Firebase';
//Page Component that is a basic login page.
class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
            <div className='login-wrapper'>

                <div className='login left'>
                <FirebaseContext.Consumer>
                    {firebase => <Header firebase={firebase} buttons isAuthPage/>}
                </FirebaseContext.Consumer>
                <FirebaseContext.Consumer>
                    {firebase => <LoginForm firebase={firebase}/>}
                </FirebaseContext.Consumer>
                </div>
                <div className='login right'>
                    <h1>Login here to <span>Experience</span> exactly what it's like to eat at Metz.</h1>
                </div>
            </div>
          </div>  
        )
    }
}

export default Login;