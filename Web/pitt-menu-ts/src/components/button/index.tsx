import React from 'react';

import './button.scss';

interface IButtonProps {
    text?: string;
    onPress?: () => void;
}


const Button = (props: IButtonProps) => {

    return (
        <div onClick={props.onPress} className='button-container'>
            <button><span>{props.text}</span></button>
        </div>
    );
};


export default Button;