import React, { Component } from 'react';
import './css/SignUp.css';
import fire from './components/Firebase';
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordRepeat: '',
            errMsg: ''
        }
    }
    SignUp() {
        var email = this.state.email;
        var password = this.state.password;
        console.log(email + password);
       fire.auth().createUserWithEmailAndPassword(email, password)
       .then((data) => {
            console.log('user Created');
       })
       .catch((err) => {
        this.setState({
            errMsg: err.message
        });
       });
    }
    render() {
        return(
            <div>
                <div className='signup-wrapper'>
                    <form className='signup-form'>
                        <p>Register for Pitt Menu!</p>
                        
                        <input type='text' placeholder='Email' name='email' required className='email' value={this.state.email} 
                        onChange={(text) => {this.setState({email: text.target.value})}}/>
                        <input type='password' placeholder='Password' name='password' required value={this.state.password}
                        onChange={(text) => {this.setState({password: text.target.value})}}/>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>
                        <button type='button' onClick={this.SignUp.bind(this)}>Sign Up</button>
                        <span>When you Register, You'll be able to <br/> post images of menu items, <br/> and vote on your favorite items! </span>
                    </form>
                </div>
            </div>


        )
    }
}

export default SignUp