import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../css/loginform.css';
import Button from './button';
import Input from './input';

//Determines if a box is empty or whitespace.
//matches regex.
function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

//defines a login form dedicated to using Firebase to sign the user in and redirect them to the dashboard.
//props are firebase
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            err: '',
            errmsg: '',
            isLoading: false
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmitKeyDown = this.handleSubmitKeyDown.bind(this);

    }
    handleEmailChange(event) {
        console.log(this.state.email);
        this.setState({email: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({pass: event.target.value});
    }
    handleSubmitKeyDown(event) {
        if (event.key === 'Enter') {
            this.handleLogin(event)
        }
    }
    handleLogin(event) {
        if (isEmptyOrSpaces(this.state.email)) {
            this.setState({
                err: 'err-msg',
                errmsg: 'Please Enter Your Email Address.'
            });
        } 
        else if (isEmptyOrSpaces(this.state.pass)) {
            this.setState({
                err:'err-msg',
                errmsg: 'Please Enter Your Password.'
            });
        }
        else {
            this.props.firebase.SignInWithEmailandPassword(this.state.email, this.state.pass)
            .then(() => {
                console.log(this.props);
               this.props.history.push('/dashboard')
            })
            .catch((err) => {
                console.log(err.code, err.messsage)
                if (err.code == 'auth/invalid-email' || err.code == 'auth/user-not-found' || err.code == 'auth/wrong-password') {
                    
                    this.setState({
                        err: 'err-msg',
                        errmsg: 'Email Address or Password is Incorrect'
                    });
                }
            });
            
        }
        event.preventDefault();
        
    }
    componentDidMount() {
    }
    render() {
        return(
         
                <div className='loginform-wrapper'>
                    <h1>Login to Pitt Menu!</h1>
                    <p className={this.state.err}>{this.state.errmsg}</p>
                    <Input 
                        type='text' 
                        placeholder='Email' 
                        required 
                        name='email' 
                        value={this.state.email} 
                        onChange={this.handleEmailChange} 
                        onKeyPress={this.handleSubmitKeyDown}
                        fade time={1}/>
                    <Input 
                        type='password' 
                        placeholder='Password' 
                        required 
                        name='password' 
                        value={this.state.pass} 
                        onChange={this.handlePasswordChange} 
                        onKeyPress={this.handleSubmitKeyDown}
                        fade time={2}/>
                    <Button 
                        text='Login' 
                        fade time={3} 
                        onClick={this.handleLogin}/>
                </div>
        )
    }
}

export default withRouter(LoginForm);