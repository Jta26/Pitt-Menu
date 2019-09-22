import React, {Fragment} from 'react';
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
        <div className='menu'>
            <div className='menu-title'>
                <h1>Today&apos;s Feast</h1>
            </div>
            <div className='menu-list'>
                {window.innerWidth > 1366 ? 
                    <Scrollbars>
                        {menuItems.map((item, index) => {
                            const fadeTiming = (index + 1) * 100;
                            return <Item fadeTime={fadeTiming} key={index}/>;
                        })}
                    </Scrollbars>
                    :
                    <Fragment>
                        {menuItems.map((item, index) => {
                            const fadeTiming = (index + 1) * 100;
                            return <Item fadeTime={fadeTiming} key={index}/>;
                        })}
                    </Fragment>
                }
            </div>
        </div>
    );
};

export default menu;