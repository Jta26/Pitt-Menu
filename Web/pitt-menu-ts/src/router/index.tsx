import React, {Fragment} from 'react';
import Home from '../pages/home';
import {Route, BrowserRouter} from 'react-router-dom';

const Router = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Route path="/" exact component={Home}></Route>
            </BrowserRouter>
        </Fragment>
    );
};


export default Router;

