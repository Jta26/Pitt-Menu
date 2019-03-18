import React, { Component } from 'react';
import '../css/menu.css';

// props menuItems.
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
                    {this.props.items.map((item) => {
                        
                        return <p>{item.itemName}</p>
                    })}
                 </div>
             </div>
         )
     }
}

export default Menu;