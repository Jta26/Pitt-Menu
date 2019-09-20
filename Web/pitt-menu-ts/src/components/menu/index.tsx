import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars';

import './menu.scss';

import Item from '../item';

const menu = () => {

    const menuItems = [
        {name: 'test', img: 'test'},
        {name: 'test', img: 'test'},
        {name: 'test', img: 'test'},
        {name: 'test', img: 'test'},
        {name: 'test', img: 'test'},
        {name: 'test', img: 'test'},
        {name: 'test', img: 'test'},
        {name: 'test', img: 'test'},
        {name: 'test', img: 'test'},
        {name: 'test', img: 'test'},
        {name: 'test', img: 'test'},
        {name: 'test', img: 'test'},
        {name: 'test', img: 'test'},
        {name: 'test', img: 'test'},
        {name: 'test', img: 'test'},
        {name: 'test', img: 'test'},
        {name: 'test', img: 'test'},
        {name: 'test', img: 'test'},
    ];

    
    return (
        <div>
            <div className='menu-list'>
                <Scrollbars>
                        
                    {menuItems.map((item, index) => {
                        const fadeTiming = (index + 1) * 100;
                        return <Item fadeTime={fadeTiming} key={index}/>;
                    })}
                    
                </Scrollbars>
            </div>
        </div>
    );
};

export default menu;