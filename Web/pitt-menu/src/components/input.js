import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/input.css';

//Defines basic input component used throughout Pitt Menu.
//props are fade, time, placeholder, required, value, onChange, type, and onKeyPress.
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fade: ''
        }
        this.fadeHandler.bind(this);    
    }
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
            <div className={'input ' + this.state.fade}>
                <input type={this.props.type} placeholder={this.props.placeholder} required={this.props.required} value={this.props.value} onChange={this.props.onChange}  onKeyPress={this.props.onKeyPress}/>
            </div>
        )
    }
}

export default Input;