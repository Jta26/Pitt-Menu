import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:''
        }
    }
    componentDidMount() {
        this.props.firebase.auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    user: user
                });
            }
            else {
                this.props.history.push('/');
            }
        });
    }
    render() {
        return(
            <div>
                <h1>Hello {this.state.user.email}</h1>
                <button onClick={() => {this.props.firebase.SignOut(); this.props.history.push('/')}}>Sign Out</button>
            </div>
        )
    }
}

export default withRouter(Header);