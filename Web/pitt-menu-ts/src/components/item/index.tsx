import React, { useState, useEffect } from 'react';

import { Transition } from 'react-transition-group';

import './item.scss';


interface ItemProps {

    fadeTime?: number;
}

const Item = (props: ItemProps) => {
    const [fadeIn, setFadeIn] = useState(false);
    const transitionStyles = {
        unmounted: {opacity: 0},
        entering: { 
            opacity: 0,
            marginTop: 200,
        },
        entered:  { opacity: 1, marginTop: 10 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
    };
    useEffect(() => {
        setTimeout(() => {
            setFadeIn(true);
        },props.fadeTime);
    }, []);
    return (
        <Transition timeout={props.fadeTime ? props.fadeTime : 0} in={fadeIn}>
            {
                state => (
                    <div className='menu-item' style={transitionStyles[state]}>
                        <div className='item-img'>
                            <img src="https://picsum.photos/800"></img>
                        </div>
                        <div className='item-text'>
                            <h2>Food Item Name Long Test</h2>
                            <p>Rating</p>
                        </div>
                    </div>
                )
            }
        </Transition>
    );
};

export default Item;