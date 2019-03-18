import React, { Component } from 'react';
import SignUpForm from './components/signupform';
import { FirebaseContext } from './components/Firebase';
import './css/signup.css';
class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='signup-wrapper'>
                
                <div className='signup right'>
                    <FirebaseContext.Consumer>
                        {firebase => <SignUpForm firebase={firebase}/>}
                    </FirebaseContext.Consumer>
                </div>
                <div className='signup left'>
                    <h1>By Signing up for <span>Pitt Menu</span>, You can <span>Vote On</span> and <span>Post Images</span> of your favorite food items.</h1>
                </div>
            </div>
            
        )
    }
}

export default SignUp;