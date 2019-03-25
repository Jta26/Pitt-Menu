import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from './button';
import '../css/header.css';
class Header extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout() {
        this.props.firebase.SignOut();
    }
    componentDidMount() {
    
        
    }
    componentWillUnmount() {
    }
    render() {
        return(
            // <div>
            //     <h1>Hello {this.state.user.email}</h1>
            //     <button onClick={() => {this.props.firebase.SignOut(); this.props.history.push('/')}}>Sign Out</button>
            // </div>
            
            <div class='header-wrapper'>
                {() => {
                    
                    if (this.props.buttons) {
                        return (
                            <div>
                                <Button text='hello'/>
                            </div>
                        )
                    }
                }}
                
            </div>
        )
    }
}

export default withRouter(Header);