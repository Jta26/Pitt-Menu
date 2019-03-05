import React, { Component } from 'react';
import '../css/Menu.css';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items : [],
            isMenu: false
        }
    }

    componentDidMount() {
        this.RetrieveMenuData();
        console.log(this.state.items.length);
        console.log(this.props.date + ' ' + this.props.type);
    }
    RetrieveMenuData() {
        fetch('https://api.joelaustin.net/menu/' + this.props.date + '?type=' + this.props.type).then((res) => {
            return res.json()
        }).then((json) => {
            json.forEach(item => {
                
                this.setState({
                    items: [...this.state.items, item['Item Name']]
                });
            });
            if (this.state.items.length != 0) {
                this.setState({
                    isMenu: true
                });
            }
            
            
        })
    }

    render() {
        return(
            <div className='menu'>
            <div className='menu-type'>{this.props.type ? 'Breakfast/Lunch' : 'Dinner'}</div>
            <div className="menu-items">
                {this.state.isMenu ? 
                    this.state.items.map((item) => {
                        return <span className='menu-item'>{item}</span>
                    })
                    :
                    <h2>This Menu Is Not Available.</h2>
                }
            
            </div>
            </div>
        )
    }
}

export default Menu;