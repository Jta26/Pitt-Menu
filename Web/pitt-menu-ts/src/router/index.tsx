import React, {Fragment} from 'react';
import Home from '../pages/home';
import Login from '../pages/login';
import {Route, BrowserRouter} from 'react-router-dom';

const Router = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" exact component={Login}></Route>
            </BrowserRouter>
        </Fragment>
    );
};


export default Router;

