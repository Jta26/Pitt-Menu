import React, { Component } from 'react';
import LoginForm from './components/loginform';
import { FirebaseContext } from './components/Firebase';
class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <FirebaseContext.Consumer>
                    {firebase => <LoginForm firebase={firebase}/>}
                </FirebaseContext.Consumer>
            </div>
            
        )
    }
}

export default Login;