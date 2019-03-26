import React, { Component } from 'react';
import MenuItem from './menuitem';
import '../css/menu.css';
//Defines a "menu" component that takes in a list of items are generates MenuItem Components from the list.
// props items.
class Menu extends Component {
     constructor(props) {
        super(props);
        this.state = {

        }
     }
     render() {
         return(
             <div>
                 <div className='menu'>
                    {this.props.items.map((item, i) => {
                      
                        return <MenuItem key={item.itemID} firebase={this.props.firebase} name={item.itemName} itemID={item.itemID} fade time={i} />
                    })}
                 </div>
             </div>
         )
     }
}

export default Menu;