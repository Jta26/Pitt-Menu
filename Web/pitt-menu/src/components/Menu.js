import React, { Component } from 'react';
import '../css/Menu.css';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items : []
        }
    }

    componentDidMount() {
        this.RetrieveMenuData();
    }

    RetrieveMenuData() {
        fetch('https://api.joelaustin.net/menu/' + this.props.date + '?type=' + this.props.type).then((res) => {
            return res.json()
        }).then((json) => {
            json.forEach(item => {
                this.setState({
                    items: [...this.state.items, item['Item Name']]
                })
            });
        })
    }

    render() {
        return(
            <div className='menu'>
            <div className='menu-type'>{this.props.type ? 'Breakfast/Lunch' : 'Dinner'}</div>
            <div className="menu-items">
                {
                    this.state.items.map((item) => {
                        return <span className='menu-item'>{item}</span>
                    })
                }

            </div>
            </div>
        )
    }
}

export default Menu;