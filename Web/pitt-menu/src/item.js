import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Firebase, { FirebaseContext } from './components/Firebase';
import MenuItem from './components/menuitem';
import Header from './components/header';
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemID: 0
        }
    }
    getItemData() {
        fetch('https://api.joelaustin.net/')
    }
    
    componentWillMount() {

    }
    componentDidMount() {
        this.setState({
            itemID: this.props.match.params.id
        });
    }
    render() {
        
        return(
            <div>
                <FirebaseContext.Consumer>
                    
                    {firebase => {
                        return(
                            <div>
                                <Header firebase={firebase}/>
                                <MenuItem itemID={this.props.match.params.id} isFullItem firebase={firebase}></MenuItem>
                            </div>
                        )
                    }}
                </FirebaseContext.Consumer>
            </div>
        )
    }
}

export default withRouter(Item);