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
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }
    // isLoggedIn() {
    //     this.props.firebase.auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             this.props.history.push('/dashboard')
    //         }
    //         else {

    //         }
    //     })
    // }
    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({pass: event.target.value});
    }
    handleConfirmPasswordChange(event) {
        this.setState({confPass: event.target.value});
    }
    handleSignUp(event) {
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
        else if (isEmptyOrSpaces(this.state.confPass)) {
            this.setState({
                err:'err-msg',
                errmsg: 'Passwords do not Match'
            });
        }
        else if (this.state.confPass !== this.state.pass) {
            this.setState({
                err:'err-msg',
                errmsg: 'Passwords do not Match'
            });
        }
        else {
            this.props.firebase.CreateUserWithEmailandPassword(this.state.email, this.state.pass)
            .then(() => {
               this.props.history.push('/login')
            })
            .catch((err) => {
                console.log(err.code, err.messsage);
                
                switch (err.code) {
                    case ('auth/invalid-email'):
                        this.setState({
                            err: 'err-msg',
                            errmsg: 'Email is Incorrectly Formatted.'
                        });
                        break;
                    case ('auth/email-already-in-use'):
                        this.setState({
                            err: 'err-msg',
                            errmsg: 'Email Already Registered.'
                        });
                        break;
                    case ('auth/weak-password'):
                        this.setState({
                            err: 'err-msg',
                            errmsg: 'Password Must be at Least 6 Characters Long.'
                        });
                        break;
                }
            });
            
        }
        event.preventDefault();
        
    }
    componentDidMount() {
    //    this.isLoggedIn();s
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
                        value={this.state.confPass} 
                        onChange={this.handleConfirmPasswordChange} 
                        fade time={3}/>
                    <Button 
                        text='Sign Up!' 
                        fade time={4} 
                        onClick={this.handleSignUp}/>
                </div>
        )
    }
}

export default withRouter(SignUpForm);