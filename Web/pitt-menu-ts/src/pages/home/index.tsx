import React from 'react';
import './home.scss';
import Menu from '../../components/menu';

const Home = () => {
    return (
        <div className='container'>
            <div className='content'>
                <div className='title'>
                    <h1>Pitt Menu</h1>
                    <h2>LoginButton</h2>
                    <h2>SignUpButton</h2>
                </div>
                <div className='menu'>
                    <div className='menu-title'>
                        <h1>Today&apos;s Feast</h1>
                    </div>
                    
                    <Menu/>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Home;
