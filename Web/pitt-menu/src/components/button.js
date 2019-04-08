import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../css/button.css';
import { Transition, Container, Image } from 'semantic-ui-react';
import PackageComponent from './packagecomponent';
//This defines a generic button that is used throughout Pitt-Menu.
//props are fade, time, link, onclick, text.
class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.fadeHandler.bind(this);    
    }
    //Handles fades based on time prop.
    fadeHandler() {
        if (this.props.fade) {
            setTimeout(() => {
                this.setState({
                    visible: true
                })
            }, this.props.time * 650)
        }
        else {
            this.setState({
                visible: true
            })
        }
    }
    
    componentDidMount() {
        this.fadeHandler()
    }
    render() {
        return(
            <Transition animation={'fade right'} duration={1000} visible={this.state.visible}>
                <PackageComponent>
                    <div className={'btn'}>
                        <p> <a href={this.props.link} onClick={this.props.onClick}>{this.props.text}</a></p>
                    </div>
                </PackageComponent>
            </Transition>
        )
    }
}

export default withRouter(Button);