import React, { Component } from 'react';
import { Comment, Form, Button} from 'semantic-ui-react';
import moment from 'moment';



//props are firebase, item ID, comments.
class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
        this.handleComment = this.handleComment.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
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
    handleCommentChange(event) {
        this.setState({commentText: event.target.value});
    }
    componentDidMount() {

    }
    render() {
        return(
            <div>
                <Comment.Group>
                        {this.props.comments.map(comment => {
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
                        <Button content='Add Comment' labelPosition='left' icon='edit' primary onClick={this.handleComment} />
                    </Form>
            </div>
        )
    }
}
export default Comments;