import React from 'react';

import useRouter from '../../router/hooks';

import './home.scss';
import Menu from '../../components/menu';
import Button from '../../components/button';

const Home = () => {
    const { history } = useRouter();
    const handleBrowsePress = () => {
        history.push('/browse');
    };
    const handleLoginPress = () => {
        history.push('/login');
    };
    const handleSignUp = () => {
        history.push('/signup');
    };

    return (
        <div className='container'>
            <div className='content'>
                <div className='title'>
                    <h1>Pitt Menu</h1>
                    <Button text='Browse' onPress={handleBrowsePress}/>
                    <Button text='Login'  onPress={handleLoginPress}/>
                    <Button text='Sign Up' onPress={handleSignUp}/>
                    
                </div>
                <Menu/>
            </div>
            
        </div>
    );
};

export default Home
