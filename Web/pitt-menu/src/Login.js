import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Login.css';


export default class Login extends Component {

    render() {
        return(
            <div class='login-wrapper'>
                <div className='login'>
                                <p>Sign In to Pitt Menu!</p>
                                <input placeholder='Email' type='text' name='email'/>
                                <input placeholder='Password' type='text' name='pswrd'/>
                                <button>Sign In</button>
                                <div>
                                    <p>Dont have an account? <Link to='/Register'>Register</Link></p>
                                </div>
                </div>
            </div>
        )
    }
}