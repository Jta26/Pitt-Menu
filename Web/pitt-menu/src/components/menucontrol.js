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
     //Fetchs dinner, then Fetchs Lunch/Breakfast
     GetMenus(date) {
         console.log(date)
         this.setState({loading: true});
        fetch(`https://34.68.102.189/menu/${date}/?type=${0}`)
        .then((res) => {
             return res.json();
        }).then((menu) => {
            console.log(menu);
            menu.items = menu.items.reverse();
            this.setState({
                panes: [...this.state.panes,
                {
                    menuItem: menu.type,
                    render: () => <Tab.Pane loading={this.state.loading} attached={false}><Menu firebase={this.props.firebase} items={menu.items}/></Tab.Pane>
                }
                ]
            });
            this.setState({loading: false});
            
            fetch(`https://34.68.102.189/menu/${date}/?type=${1}`)
            .then((res) => {
                 return res.json();
            }).then((menu) => {
                console.log(menu);
                menu.items = menu.items.reverse();
                this.setState({
                    panes: [...this.state.panes,
                    {
                        menuItem: menu.type,
                        render: () => <Tab.Pane loading={this.state.loading} attached={false}><Menu firebase={this.props.firebase} items={menu.items}/></Tab.Pane>
                    }
                    ]
                });
                this.setState({loading: false});
                
               
            });
        }).catch((err) => {
            console.log(err)
            // this.setState()
        });
       
     }
     componentDidMount() {
        this.GetMenus(this.props.date);
     }

     render() {
         return(
             <div>
                 <div className='menu-control'>
                    <Tab menu={{secondary: true, pointing: false}} panes={this.state.panes} renderActiveOnly={true}/>
              
                 </div>
             </div>
         )
     }
}

export default MenuControl;