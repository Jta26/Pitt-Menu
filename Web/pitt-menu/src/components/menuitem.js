import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {withRouter} from 'react-router-dom';
import Button from './button';
import { Loader, Rating, Transition, TransitionGroup, Comment, Form, TextArea, Button as Btn } from 'semantic-ui-react';
import { ToastContainer, toast, Flip } from 'react-toastify';
import PackageComponent from './packagecomponent';

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
            fade: '',
            images: [],
            comments: [],
            loading: false,
            rating: 0,
            errMessage: '',
            visibleMessage: false,
            commentText: '',
            describeActive: false
        }
        this.getFirebaseMenuData = this.getFirebaseMenuData.bind(this);
        this.handleFade = this.handleFade.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnRate = this.handleOnRate.bind(this);
        this.getRating = this.getRating.bind(this);
        this.handleComponentType = this.handleComponentType.bind(this);
        this.handleEmptyContent = this.handleEmptyContent.bind(this);
        this.handleMapDates = this.handleMapDates.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleOnDescribe = this.handleOnDescribe.bind(this);
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
            console.log(latestDate, today)
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
    handleCommentChange(event) {
        this.setState({commentText: event.target.value});
    }
    handleComment() {
        let firebase = this.props.firebase;
        let user = firebase.auth.currentUser;
        let time = new Date().toISOString();
        let name
        let email
        let uid
        console.log(time);
        if (user != null) {
            email = user.email;
            uid = user.uid;
            let comment = this.state.commentText;
            firebase.database.ref(`/items/${this.props.itemID}/comments`).push([
                time,
                email,
                comment
            ]);
        }
    }
    handleOnDescribe() {
        this.setState({
            describeActive: !this.state.describeActive
        })
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
                        
                        <p>{this.state.desc == 'Add Description' ?  
                                <div>
                                    <Button text={'Add Description'} fade time={1} onClick={this.handleOnDescribe}></Button>
                                    <TransitionGroup animation={'fade down'} duration={500}>
                                        {
                                            this.state.describeActive 
                                            &&
                                            <Form className='describe-ta'>
                                                <TextArea placeholder={"Share what it's like"}></TextArea>
                                            </Form>
                                        } 
                                    </TransitionGroup>
                                  
                                    
                                </div>
                            : 
                            this.state.desc}
                        </p>
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
                    <Comment.Group>
                        {this.state.comments.map(comment => {
                            console.log(comment)
                        return(
                        <Comment>
                            
                        <Comment.Content>
                          <Comment.Author>{comment[1]}</Comment.Author>
                          <Comment.Metadata>
                            <div>{moment(comment[0]).format('MMMM Do YYYY')}</div>
                          </Comment.Metadata>
                          <Comment.Text>{comment[2]}</Comment.Text>
                        </Comment.Content>
                      </Comment>
                        ) 
                        })}
                    </Comment.Group>
                   <Form reply>
                    <Form.TextArea onChange={this.handleCommentChange} />
                    <Btn content='Add Comment' labelPosition='left' icon='edit' primary onClick={this.handleComment} />
                    </Form>
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
        this.getRating();
        
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