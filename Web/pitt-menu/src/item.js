import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Firebase, { FirebaseContext } from './components/Firebase';
import MenuItem from './components/menuitem';
import Header from './components/header';
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemID: 0,
            itemData: {}
        }
    }
    getItemData(itemId) {
        console.log(itemId)
        fetch(`https://api.joelaustin.net/item/` + itemId).then((res) => {
        
            return res.json()
        }).then((itemData) => {
          
            this.setState({
                itemData: itemData
            });
        });
    }
    
    componentWillMount() {

    }
    componentDidMount() {

        this.getItemData(this.props.match.params.id);
    }
    render() {
        
        return(
            <div>
                <FirebaseContext.Consumer>
                    
                    {firebase => {
                        return(
                            <div>
                                <Header firebase={firebase}/>
                                <MenuItem itemID={this.props.match.params.id} dates={this.state.itemData.itemDates} isFullItem firebase={firebase}></MenuItem>
                            </div>
                        )
                    }}
                </FirebaseContext.Consumer>
            </div>
        )
    }
}

export default withRouter(Item);