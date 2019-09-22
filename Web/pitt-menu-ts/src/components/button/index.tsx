import React from 'react';

import './button.scss';

interface IButtonProps {
    text?: string;
    onPress?: () => void;
}


const Button = (props: IButtonProps) => {

    return (
        <div className='button-container'>
            <button onClick={props.onPress}><span>{props.text}</span></button>
        </div>
    );
};


export default Button;