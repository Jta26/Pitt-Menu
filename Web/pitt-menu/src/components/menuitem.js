import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {withRouter} from 'react-router-dom';
import { Loader, Rating } from 'semantic-ui-react';
import '../css/menuitem.css';
import '../css/fullmenuitem.css';

import placeimg from '../img/placeholderimg.png';
//props are name, ID, dates, and firebase.
class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            desc: false,
            fade: '',
            images: [],
            loading: false
        }
        this.getFirebaseMenuData = this.getFirebaseMenuData.bind(this);
        this.handleFade = this.handleFade.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleComponentType = this.handleComponentType.bind(this);
        this.handleEmptyContent = this.handleEmptyContent.bind(this);
    }
    //Retrieves Firebase data from the ID
    getFirebaseMenuData() {
        this.setState({
            loading: true
        })
        let firebase = this.props.firebase;
        let ID = this.props.itemID;
     
        firebase.database.ref('/items/' + ID ).on('value', (snapshot) => {
            var data = snapshot.val();
            var name = ''
            var desc = '';
            var images = []
            
            try {
                name = data.name;
                desc = data.desc;
                var imgSnapshot = snapshot.child('images');
                imgSnapshot.forEach(image => {
                    images.push(image.val());
                });
            }
            catch (err) {
                
            }
            if (desc == undefined) {
                desc = false;
            }
            console.log(desc);
            this.setState({
                name: name,
                desc: desc,
                images: images,
                loading: false
            });
        })
    }
    handleEmptyContent() {
        console.log(this.state.desc);
        let desc;
        if (this.state.desc == false) {
            desc = 'There is no description for this item yet.';
            this.setState({
                desc: desc
            });
        }
    }
    handleOnClick() {
        let ID = this.props.itemID;
        this.props.history.push('/item/' + ID);
        
    }
    handleFade() {
        if (this.props.fade) {
           
            setTimeout(() => {
                this.setState({
                    fade: 'fadeup'
                })
            }, this.props.time * 400)
        }
    }
    handleComponentType() {
        if (this.props.isFullItem) {
            return(
                <div className='full-menu-item-wrapper'>
                    <div className='img-wrapper'>
                        {this.state.images.length > 0 ?
                            <Carousel emulateTouch showThumbs={false} showArrows showStatus={false} useKeyboardArrows>
                                {this.state.images.map((img) => {
                                    return (
                                        <div>
                                            <img src={img}/>
                                        </div>
                                    )
                                })}
                            </Carousel>
                            :
                            <img src={this.state.images}/>
                        }
                    </div>
                    <div className='content-wrapper'>
                        <p className='content-title'>{this.state.name}</p>
                        <p className='content-desc'>{this.state.desc}</p>
                        <div className='content-rating'>
                            <p>{this.props.firebase.auth.currentUser ? '' : 'Login to '}Rate this Item!</p>
                            <Rating icon='star' size='large' defaultRating={0} maxRating={5}/>
                        </div>
                        
                        <p></p>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div className={'menu-item-wrapper ' + this.state.fade} onClick={this.handleOnClick} style={this.props.fade ? {opacity: 0} : {opacity: 1}}>
                    <div className='img-wrapper'>
                        {this.state.loading ? <Loader active/> : <img src={this.state.images ? this.state.images[0] : placeimg}/>}
                    </div>
                    <div className='title-desc-wrapper'>
                        
                        <p className='title'>{this.state.name}</p>
                        {/* <p>TestDesc</p> */}
                    </div>
    
                </div>
            )
        }
    }
    componentDidMount() {
        this.handleFade();
        this.getFirebaseMenuData();
        
    }
    componentDidUpdate() {
        this.handleEmptyContent();
    }
    render() {
        return this.handleComponentType()
    }
}

export default withRouter(MenuItem);