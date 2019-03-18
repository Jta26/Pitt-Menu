import React, { Component } from 'react';
import LoginForm from './components/loginform';
import './css/login.css';
import { FirebaseContext } from './components/Firebase';
class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='login-wrapper'>
                <div className='login left'>
                <FirebaseContext.Consumer>
                    {firebase => <LoginForm firebase={firebase}/>}
                </FirebaseContext.Consumer>
                </div>
                <div className='login right'>
                    <h1>Login here to <span>Experience</span> exactly what it's like to eat at Metz.</h1>
                </div>
            </div>
            
        )
    }
}

export default Login;