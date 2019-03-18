import React, { Component } from 'react';
import {Tab} from 'semantic-ui-react';
import Menu from './menu';
import '../css/menucontrol.css';

//props include date.
class MenuControl extends Component {
     constructor(props) {
        super(props);
        this.state = {
            panes: [
                // ...this.state.panes,
                // {menuItem: this.state.menus[0].type ? "Dinner": "Breakfast/Lunch", render: () => <Tab.Pane attached={false}><Menu/></Tab.Pane>}
            ],
            loading: false
       
        }
    
        this.GetMenus = this.GetMenus.bind(this);
     }

     GetMenus(date) {
         
        fetch(`https://api.joelaustin.net/menu/${date}/?type=${0}`)
        .then((res) => {
             return res.json();
        }).then((menu) => {
            console.log(menu);
            menu.items = menu.items.reverse();
            this.setState({
                panes: [...this.state.panes,
                {
                    menuItem: menu.type,
                    render: () => <Tab.Pane attached={false}><Menu items={menu.items}/></Tab.Pane>
                }
                ]
            });
            this.setState({loading: false});
            
            fetch(`https://api.joelaustin.net/menu/${date}/?type=${1}`)
            .then((res) => {
                 return res.json();
            }).then((menu) => {
                console.log(menu);
                menu.items = menu.items.reverse();
                this.setState({
                    panes: [...this.state.panes,
                    {
                        menuItem: menu.type,
                        render: () => <Tab.Pane attached={false}><Menu items={menu.items}/></Tab.Pane>
                    }
                    ]
                });
                this.setState({loading: false});
                
               
            });
        });
       
     }
     componentDidMount() {
        this.GetMenus('2019-02-02', 0)

         
     }

     render() {
         return(
             <div>
                 <div className='menu-control'>
                    <Tab loading={this.state.loading} menu={{secondary: true, pointing: false}} panes={this.state.panes}/>
              
                 </div>
             </div>
         )
     }
}

export default MenuControl;