import React, { Component } from 'react';
import './css/SignUp.css'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordRepeat: ''
        }
    }

    render() {
        return(
            <div>
                <div className='signup-wrapper'>
                    <form className='signup-form'>
                        <p>Register for Pitt Menu!</p>
                        
                        <input type='text' placeholder='Email' name='email' required className='email'/>
                        <input type='password' placeholder='Password' name='password' required/>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>
                        <button>Sign Up</button>
                        <span>When you Register, You'll be able to <br/> post images of menu items, <br/> and vote on your favorite items! </span>
                    </form>
                </div>
            </div>


        )
    }
}

export default SignUp