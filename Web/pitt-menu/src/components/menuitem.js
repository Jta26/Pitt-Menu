import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../css/menuitem.css';

import placeimg from '../img/placeholderimg.png';
//props are name, ID, dates, and firebase.
class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            desc: '',
            fade: ''
        }
        this.getFirebaseMenuData = this.getFirebaseMenuData.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    //Retrieves Firebase data from the ID
    getFirebaseMenuData() {
        let firebase = this.props.firebase;
        let ID = this.props.itemID;
     
        firebase.database.ref('/items/' + ID ).on('value', (snapshot) => {
            var data = snapshot.val();
            var name = ''
            var desc = '';
            try {
                name = data.name;
                desc = data.desc;
            }
            catch (err) {
                
            }
            this.setState({
                name: name,
                desc: desc
            });
        })
    }
    handleOnClick() {
        let ID = this.props.itemID;
        this.props.history.push('/item/' + ID);
        
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
        this.getFirebaseMenuData();
    }
    render() {
        return(
            <div className={'menu-item-wrapper ' + this.state.fade} onClick={this.handleOnClick} style={this.props.fade ? {opacity: 0} : {opacity: 1}}>
                <div className='img-wrapper'>
                    <img src={placeimg}/>
                </div>
                <div className='title-desc-wrapper'>
                    
                    <p className='title'>{this.state.name}</p>
                    {/* <p>TestDesc</p> */}
                </div>

            </div>
        )
    }
}

export default withRouter(MenuItem);