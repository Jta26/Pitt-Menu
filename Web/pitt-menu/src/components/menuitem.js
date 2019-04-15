import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {withRouter} from 'react-router-dom';
import Button from './button';
import { Loader, Rating, Transition, TransitionGroup, Comment, Form, TextArea, Button as Btn } from 'semantic-ui-react';
import { ToastContainer, toast, Flip } from 'react-toastify';
import uuid from 'uuid';
import PackageComponent from './packagecomponent';
import Comments from './comments';
import 'react-toastify/dist/ReactToastify.css';
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
            images: [],
            comments: [],
            loading: false,
            rating: 0,
            errMessage: '',
            visibleMessage: false,
            describeActive: false,
            describeText: '',
            uploadActive: false,
            imgFile: false,
            fade: '',
        }

        this.getFirebaseMenuData = this.getFirebaseMenuData.bind(this);
        this.handleFade = this.handleFade.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnRate = this.handleOnRate.bind(this);
        this.getRating = this.getRating.bind(this);
        this.handleComponentType = this.handleComponentType.bind(this);
        this.handleEmptyContent = this.handleEmptyContent.bind(this);
        this.handleMapDates = this.handleMapDates.bind(this);
        this.handleOnDescribe = this.handleOnDescribe.bind(this);
        this.handleDescribeChange = this.handleDescribeChange.bind(this);
        this.handleEditDescClick = this.handleDescribeChange.bind(this);
        this.handleOnAddImageClick = this.handleOnAddImageClick.bind(this);
        this.handleComponentType = this.handleComponentType.bind(this);
        this.handleImgChange = this.handleImgChange.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);
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
            var images = [];
            var comments = [];
            try {
                name = data.name;
                desc = data.desc;
                var imgSnapshot = snapshot.child('images');
                imgSnapshot.forEach(image => {
                    images.push(image.val());
                });
                var comSnapshot = snapshot.child('comments');
                comSnapshot.forEach(comment => {
                  
                    var comArr = [
                        comment.val()[0],
                        comment.val()[1],
                        comment.val()[2]
                    ]
                    comments.push(comArr);
                })
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
                comments: comments,
                loading: false
            });
        })
    }
    getRating() {
        let itemID = this.props.itemID;
        this.props.firebase.auth.onAuthStateChanged((user) => {
            let userID;
            if (user) {
                userID = user.uid;
                console.log(user.uid);
            }
                
                    
            fetch(`https://api.joelaustin.net/rating/${itemID}`,{
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userID ? {"ID" : userID} : {})
            }).then((response) => {
                console.log(response);
                return response.json()
            }).then((data) => {
                console.log(data.rating);
                this.setState({
                    rating: data.rating
                });
            });
        
        });
    }
    handleEmptyContent() {
        let desc;
        if (this.state.desc == false) {
            desc = 'Add Description';
            this.setState({
                desc: desc
            });
        }
    }
    handleMapDates() {
        if (this.props.dates) {
            
            let dates = this.props.dates;
            dates.sort((a,b) => {
                return new Date(b.date) - new Date(a.date);
            });
            let latestDate = dates[0].date;
            latestDate = moment(latestDate.split('T')[0]).format('MMMM Do YYYY');
            let today = moment(new Date()).format('MMMM Do YYYY');
            if (latestDate === today) {
                return <p>Serving Today, {latestDate}</p>
            }
            else if (moment(dates[0].date).isBefore(new Date())) {
                return <p>Last Served on {latestDate}</p>
            }
            else {
                return <p>Next Served on {latestDate}</p>
            }
           
        }
    }
    handleOnClick() {
        let ID = this.props.itemID;
        this.props.history.push('/item/' + ID);
        
    }
    handleOnAddImageClick() {
        let ID = this.props.itemID;
        let firebase = this.props.firebase;
        let user = firebase.auth.currentUser;
        if (user != null) {
            //Add Image Here
        }
        else {
            toast.error('Login to Post New Images.', {autoClose: 10000, toastId: 1});
        }
    }
    //This function gets all of the ratings for the item, averages
    handleOnRate(e, {rating, maxRating}) {
        let itemID = this.props.itemID;
        
        if (this.props.firebase.auth.currentUser != null) {
            let userID = this.props.firebase.auth.currentUser.uid;
            let ratingRef = this.props.firebase.database.ref(`/items/${itemID}/ratings/${userID}`);
            ratingRef.set(rating); 
            this.setState({
                rating: rating
            });
            toast.success(`${this.state.name} successfully rated ${rating} stars.`, {autoClose: 10000, toastId: 1})
        }
        else {
            console.log(`Rating ${rating}, but User is Not Signed In.`);
            toast.error('Login to rate Items', {autoClose: 10000, toastId: 1});
            this.setState({
               errMessage: 'Login to rate items!',
               visibleMessage: true,
               rating: this.state.rating
            });
        }

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
    handleDescribeChange(event) {
        this.setState({describeText: event.target.value});
    }
    handleOnDescribe() {
        console.log(this.state.describeActive);
       
        let firebase = this.props.firebase;
        let user = firebase.auth.currentUser;
        let itemID = this.props.itemID;
        if (this.state.describeText === '' && this.state.describeActive) {
            this.setState({
                describeActive: false
            });
            return;
        }
        if (user != null) {
            if (this.state.describeActive == false) {
                this.setState({
                    describeActive: !this.state.describeActive
                });
            }
            else {
                console.log('NEW DESC');
                firebase.database.ref(`/items/${itemID}/desc`).set(this.state.describeText);
                this.setState({
                    describeActive: false,
                    describeText: ''
                });
                toast.success('Description Set', {autoClose: 10000, toastId: 1});
            }
        }
        else {
            toast.error('Login to Add Content.', {autoClose: 10000, toastId: 1});
        }
    }
    handleImgChange(event) {
        this.setState({
            imgFile: event.target.files[0],
            
        });
    }
    handleImageUpload() {
        let itemID = this.props.itemID;
        let firebase = this.props.firebase;
        let user = firebase.auth.currentUser;
        let database = firebase.database;
        if (user != null) {
            if (!this.state.uploadActive) {
                this.setState({
                    uploadActive: true
                
                });
                return
            }
            else if (this.state.uploadActive && !this.state.imgFile) {
                this.setState({
                    uploadActive: false
                });
                return
            }
            else {
                //upload image to firebase here

                let file = this.state.imgFile
                this.setState({
                    imgloading: true,
                    uploadActive: false
                })
                firebase.StoreItemImageFromFile(itemID, file, (value, err) => {
                    if (err) {
                        toast.error(err, {autoClose: 10000, toastId: 2});
                        this.setState({
                            uploadActive: true,
                            imgloading: false, 
                        });
                    }
                    else {
                        toast.success('Image Uploaded', {autoClose: 10000, toastId: 1})
                        this.setState({
                            imgloading: false, 
                            uploadActive: false
                        });
                    }


                    
                });
            }
        }
        else {
            toast.error('Login to Add Content.', {autoClose: 10000, toastId: 1});
        }

    }
    handleComponentType() {
        if (this.props.isFullItem) {
            return(
                this.state.loading ? 
                <Loader active/>
                :
                <div>
                <div className='full-menu-item-wrapper'>
                   
                    <div className='img-container'>
                        <div className='img-wrapper'>
                            {this.state.images.length > 0 ?
                                <Carousel 
                                emulateTouch 
                                showThumbs={false} 
                                showArrows 
                                showStatus={false} 
                                infiniteLoop 
                                dynamicHeight 
                                useKeyboardArrows
                                autoPlay
                                selectedItem={this.state.CarouselItem}
                                onChange={(item) => this.setState({CarouselItem: item})}>
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
                        
                    </div>
                    
                    <div className='title-bar-wrapper'>
                    
                        <p className='content-title'>{this.state.name}</p>
                        <div className='content-date'>
                            {this.handleMapDates()}
                        </div>
                        <div className='content-rating'>
                        
                            <Rating icon='star'  onRate={this.handleOnRate} size='massive' rating={this.state.rating} defaultRating={this.state.rating} maxRating={5}/>
                        </div>
                        <div className='desc-wrapper'>
                        
                        <div className='desc'>{this.state.desc == undefined ?  
                                <div>
                                    <div className={'add-desc'}>
                                    <Button  text={'Add Description'} fade time={0} onClick={this.handleOnDescribe}></Button>
                                    </div>
                                    
                                    <TransitionGroup animation={'fade down'} duration={500}>
                                        {
                                            this.state.describeActive 
                                            &&
                                            <Form className='describe-ta'>
                                                <TextArea placeholder={"Share what it's like"} onChange={this.handleDescribeChange}></TextArea>
                                            </Form>
                                        } 
                                    </TransitionGroup>
                                   
                                    
                                </div>
                            : 
                                <div>
                                    <p className={'text-desc'}>{this.state.desc}</p>
                                    <div className='add-desc'>
                                        <Button text={'Edit Description'} fade time={1} onClick={this.handleOnDescribe}/>
                                    </div>
                                    <TransitionGroup animation={'fade down'} duration={500}>
                                        {
                                            this.state.describeActive 
                                            &&
                                            <Form className='describe-ta'>
                                                <TextArea placeholder={"Share what it's like"} onChange={this.handleDescribeChange}></TextArea>
                                            </Form>
                                        } 
                                    </TransitionGroup>
                                </div>
                              }
                            
                        </div>
                        <div className={`add-image`}>
                            <Button text={'Add Image'} fade time={2} onClick={this.handleImageUpload}/>
                            {
                                <TransitionGroup animation={'fade down'} duration={500}>
                                
               
                                    
                                 
                                        {
                                            this.state.uploadActive 
                                            &&
                                            <input type='file' className={'input-upload'} onChange={this.handleImgChange}/>
                                        }
                                        {
                                            this.state.imgloading
                                            &&
                                            <Loader inline size={'small'} className={'input-upload'}/>
                                        }
                                            
                                
                                    
                                
                                
                                {/* {
                                    this.state.uploadActive 
                                    && 
                                   
                                    
                                } */}
                                </TransitionGroup>
                                
                            }
                            
                        </div>
                        
                    </div>
                    
                    </div>
                 
                    <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
                transition={Flip}
            
                />
                </div>

                <div className='comment-container'>
                    <h1>What's your experience with {this.state.name}?</h1>
                    <Comments firebase={this.props.firebase} itemID={this.props.itemID} comments={this.state.comments}/>
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
    async componentDidMount() {
        this.handleFade();
        // this.getFirebaseMenuData();
        this.getRating();
        this.props.firebase.GetItemData(this.props.itemID, (itemData) => {
            console.log(itemData);
            this.setState({
                name: itemData.name,
                desc: itemData.desc,
                images: itemData.images,
                comments: itemData.comments,
                loading: false
            });
        });
    }
    componentDidCatch() {
        
    }
    componentDidUpdate() {
        this.handleEmptyContent();

        
    }
    render() {
        return (
            <div>
               {this.handleComponentType()}
            </div>
        )
    }
}

export default withRouter(MenuItem);