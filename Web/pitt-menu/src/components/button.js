import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import '../css/button.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fade: ''
        }
        this.fadeHandler.bind(this);    
    }
    fadeHandler() {
        if (this.props.fade) {
            console.log('Fading in ' + this.props.fadeTime);
            setTimeout(() => {
                this.setState({
                    fade: 'fadeup'
                })
            }, this.props.time * 400)
        }
    }
    
    componentDidMount() {
        this.fadeHandler();
    }
    render() {
        return(
            <div className={'button ' + this.state.fade}>
                <a href={this.props.link} onClick={this.props.onClick}>{this.props.text}</a>
            </div>
        )
    }
}

export default withRouter(Button);