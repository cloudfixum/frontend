import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './app/view/home-page/home-page';
import NewService from './app/view/new-service/new-service';
import NewUserProvider from './app/view/register-service-user-provider/register-service-user-provides';
import NavBar from './app/shared/components/nav-bar/nav-bar';

import '../src/assets/styles/style.scss';
import './App.scss';
import NotFound from './app/view/errors/404-not-found/404-not-found';

export default (props) => {
    return (
        <div className="container-app">
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/new-service" component={NewService} />
<<<<<<< HEAD
                    <Route excat path ="/signup" component={NewUserProvider} />
                    <Route path ="/*" component={NotFound} />
=======
                    <Route path="/*" component={NotFound} />
>>>>>>> e5c87e28d197ebd2789b7916c0de0a98936bd523
                </Switch>
            </BrowserRouter>
        </div>
    );
};
