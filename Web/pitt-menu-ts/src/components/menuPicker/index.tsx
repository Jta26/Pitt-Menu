import React, { useRef } from 'react';
import './menuPicker.scss';

const MenuPicker = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const handleMenuPick = (event: React.MouseEvent) => {
        
        if (sliderRef.current != null) {
            sliderRef.current.style.left = (event.target as HTMLDivElement).offsetLeft + 'px';
        }
    };

    return (
        <div className='menu-picker'>
            <div className='slider' ref={sliderRef}></div>
            <div className='breakfast menu-selection' onClick={handleMenuPick}>
                <p>Breakfast</p>
            </div>
            <div className='lunch menu-selection' onClick={handleMenuPick}>
                <p>Lunch</p>
            </div>
            <div className='dinner menu-selection' onClick={handleMenuPick}>
                <p>Dinner</p>
            </div>
            
        </div>
    );
};

export default MenuPicker;