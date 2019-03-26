import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../css/button.css';

//This defines a generic button that is used throughout Pitt-Menu.
//props are fade, time, link, onclick, text.
class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fade: ''
        }
        this.fadeHandler.bind(this);    
    }
    //Handles fades based on time prop.
    fadeHandler() {
        if (this.props.fade) {
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
            <div className={'button ' + this.state.fade} style={this.props.fade ?  {opacity: 0} : {opacity: 1}}>
                <p> <a href={this.props.link} onClick={this.props.onClick}>{this.props.text}</a></p>
            </div>
        )
    }
}

export default withRouter(Button);