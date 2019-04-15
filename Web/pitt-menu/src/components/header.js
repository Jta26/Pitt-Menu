import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from './button';
import '../css/header.css';
//Defines a generic Header component that requires Firebase.Consumer as a prop.
//Other props are buttons,
//which specifies whether or not the header is a button or list form.
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkName: 'Login',
            link: '/login',
            isSignOut: false
        }
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout() {
        console.log('signed out');
        this.props.firebase.SignOut();
        this.props.history.push('/')
    }
    loadHeader() {
      
        if (this.props.buttons) {
            return (
                <div className='btn-wrapper'>
                <Button text='Home' fade time={1} link='/'/>
                <Button text={this.state.linkName} fade time={3} link={this.state.link} 
                OnClick={this.state.isSignOut ? this.handleLogout : () => {}}/>
                </div>
            
            )
        }
        else {
            return (
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href={this.state.link} onClick={this.state.isSignOut ? this.handleLogout : () => {}}>{this.state.linkName}</a></li>
                </ul>
            )
        }
        
    }

    componentDidMount() {
        if (this.props.location.pathname === '/signup') {
            this.setState({
                linkName: 'Login',
                link: '/login',
                isSignOut: false

            });
        }
        if (this.props.location.pathname === '/login') {
            this.setState({
                linkName: 'Sign Up',
                link: '/signup',
                isSignOut: false
            })
        }
        this.props.firebase.auth.onAuthStateChanged((user) => {
            console.log(user)
            if (user) {
                this.setState({
                    linkName: 'Logout',
                    link: '#',
                    isSignOut: true
                });
                
            }
            else {
                if (this.props.location.pathname === '/dashboard') {
                    this.props.history.push('/login');
                }
            }
        })
    }
    render() {
        return(
            // <div>
            //     <h1>Hello {this.state.user.email}</h1>
            //     <button onClick={() => {this.props.firebase.SignOut(); this.props.history.push('/')}}>Sign Out</button>
            // </div>
            
            <div className='header-wrapper'>
                {this.loadHeader()}
            </div>
        )
    }
}

export default withRouter(Header);