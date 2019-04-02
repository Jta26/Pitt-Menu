import React, { Component } from 'react';
import SignUpForm from './components/signupform';
import { FirebaseContext } from './components/Firebase';
import Header from './components/header';
import './css/formwrapper.css';
class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='form-wrapper'>
                
                <div className='item-left'>
                <div className='form-header'>
                    <FirebaseContext.Consumer>
                        {firebase => <Header firebase={firebase} buttons isAuthPage/>}
                    </FirebaseContext.Consumer>
                </div>
                <div className='form-content'>
                    <FirebaseContext.Consumer>
                        {firebase => <SignUpForm firebase={firebase}/>}
                    </FirebaseContext.Consumer>
                </div>
                </div>
                <div className='item-right'>
                    <h1>By Signing up for <span>Pitt Menu</span>, You can <span>Vote On</span> and <span>Post Images</span> of your favorite food items.</h1>
                </div>
            </div>
            
        )
    }
}

export default SignUp;