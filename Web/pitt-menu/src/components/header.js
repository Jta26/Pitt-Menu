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
            link: '/login'
        }
        this.handleLogout = this.handleLogout.bind(this);
    }
    loadHeader() {
        console.log('header');
        if (this.props.buttons) {
            return (
                <div className='btn-wrapper'>
                <Button text='Home' fade time={1} link='/' OnClick={this.handleLogout}/>
                <Button text='View Menus' fade time={2}  link='/menus' OnClick={this.handleLogout}/>
                <Button text={this.state.linkName} fade time={3} link={this.state.link} OnClick={this.handleLogout}/>
                </div>
            
            )
        }
        else {
            return (
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>View Menus</a></li>
                    <li><a href={this.state.link}>{this.state.linkName}</a></li>
                </ul>
            )
        }
        
    }
    handleLogout() {
        this.props.firebase.SignOut();
    }

    componentDidMount() {
        if (this.props.location.pathname === '/signup') {
            this.setState({
                linkName: 'Login',
                link: '/login'

            });
        }
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