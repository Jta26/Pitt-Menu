import React, { Component } from 'react';
import LoginForm from './components/loginform';
import Header from './components/header';
import './css/formwrapper.css';
import { FirebaseContext } from './components/Firebase';
//Page Component that is a basic login page.
class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
            <div className='form-wrapper'>

                <div className='item-left'>
                    <div className='form-header'>
                        <FirebaseContext.Consumer>
                            {firebase => <Header firebase={firebase} buttons isAuthPage/>}
                        </FirebaseContext.Consumer>
                    </div>
                    <div className='form-content'>
                        <FirebaseContext.Consumer>
                            {firebase => <LoginForm firebase={firebase}/>}
                        </FirebaseContext.Consumer>
                    </div>
                </div>
                <div className='item-right'>
                    <h1>Login here to <span>Experience</span> exactly what it's like to eat at Metz.</h1>
                </div>
            </div>
          </div>  
        )
    }
}

export default Login;