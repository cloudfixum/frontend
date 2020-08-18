import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './app/view/home-page/home-page';
import NewService from './app/view/new-service/new-service';
import NavBar from './app/shared/components/nav-bar/nav-bar';


import '../src/assets/styles/style.scss';
import './App.scss'

export default (props) => {
    return (
        <div className="container-app">
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/new-service" component={NewService} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
