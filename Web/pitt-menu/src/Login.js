import React, { Component } from 'react';
import './css/Login.css';


export default class Login extends Component {



    render() {



        return(
            <div class='login-wrapper'>
                <div className='login'>
                                <p>Sign In</p>
                                <input placeholder='Username' type='text' name='uname'/>
                                <input placeholder='Password' type='text' name='pswrd'/>
                                <button>Sign In</button>
                                <div>
                                    <p>Dont have an account? <a href='#'>Register</a></p>
                                </div>
                </div>
            </div>
        )
    }
}