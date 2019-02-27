import React, { Component } from 'react';
import './css/Menus.css';

import Moment from 'moment';

import Menu from './components/Menu';


class Menus extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            today: new Date().toISOString().split('T')[0]
        }
    }
    render() {
        return(
            <div>
                <div className='menu-header'>{Moment(this.state.today).format("MMMM Do YYYY")}</div>
                <div className="menu-container">
                                
                                <div className="menu-wrapper">
                                    <Menu
                                        type={1}
                                        date={this.state.today}
                                     
                                    />
                                </div>
                                <div className="menu-wrapper">
                                    <Menu
                                        type={0}
                                        date={this.state.today}
                                    />
                                </div>
                            </div>
            </div>
        )
    }
}

export default Menus;