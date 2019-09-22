import React from 'react';
import './home.scss';
import Menu from '../../components/menu';
import Button from '../../components/button';

const Home = () => {
    return (
        <div className='container'>
            <div className='content'>
                <div className='title'>
                    <h1>Pitt Menu</h1>
                    <Button text='Browse'/>
                    <Button text='Login'/>
                    <Button text='Sign Up'/>
                    
                </div>
                <Menu/>
            </div>
            
        </div>
    );
};

export default Home;
