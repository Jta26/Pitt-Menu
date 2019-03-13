import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../css/signupform.css';
import Button from './button';
import Input from './input';
function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            confPass: '',
            err: '',
            errmsg: '',
            isLoadng: false
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    isLoggedIn() {
        this.props.firebase.auth.onAuthStateChanged((user) => {
            if (user) {
                this.props.history.push('/dashboard')
            }
            else {

            }
        })
    }
    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({pass: event.target.value});
    }
    handleConfirmPasswordChange(event) {

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
                if (err.code == 'auth/invalid-email' || err.code == 'auth/user-not-found') {
                    console.log(err.code, err.messsage)
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
       this.isLoggedIn();
    }
    render() {
        return(
         
                <div className='signupform-wrapper'>
                    <h1>Sign Up for Pitt Menu!</h1>
                    <p className={this.state.err}>{this.state.errmsg}</p>
                    <Input 
                        type='text' 
                        placeholder='Email' 
                        required 
                        name='email' 
                        value={this.state.email} 
                        onChange={this.handleEmailChange} 
                        fade time={1}/>
                    <Input 
                        type='password' 
                        placeholder='Password' 
                        required 
                        name='password' 
                        value={this.state.pass} 
                        onChange={this.handlePasswordChange} 
                        fade time={2}/>
                    <Input 
                        type='password' 
                        placeholder='Confirm Password' 
                        required 
                        name='Confirg password' 
                        value={this.state.pass} 
                        onChange={this.handlePasswordChange} 
                        fade time={3}/>
                    <Button 
                        text='Login!' 
                        fade time={4} 
                        onClick={this.handleLogin}/>
                </div>
        )
    }
}

export default withRouter(SignUpForm);