import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/header.css';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        }
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout() {
        this.props.firebase.SignOut();
    }
    componentDidMount() {
        console.log('header did mount');
        this.props.firebase.auth.onAuthStateChanged((user) => {
            if (this.props.isAuthPage) {
                if (user) {
                    this.setState({
                        user: user
                    });
                    console.log(this.state.user);
                    this.props.history.push('/dashboard');
                }
                else {
                    
                }
            }
        });
    }
    render() {
        return(
            // <div>
            //     <h1>Hello {this.state.user.email}</h1>
            //     <button onClick={() => {this.props.firebase.SignOut(); this.props.history.push('/')}}>Sign Out</button>
            // </div>
            <div class='header-wrapper'>
                <ul>
                    <li><a href={'/'}>Home</a></li>
                    <li onClick={this.handleLogout}><a href={'/'}>logoutHard</a></li>
                    {this.state.user === '' ? <li><a href={'/login'}>Login</a></li> : <li onClick={this.handleLogout}><a href={'/'}>logout</a></li>}
                </ul>
                <h1>{this.state.user ? this.state.user.email : 'no User'}</h1>
            </div>
        )
    }
}

export default withRouter(Header);