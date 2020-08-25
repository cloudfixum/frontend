import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './app/view/home-page/home-page';
import NewService from './app/view/new-service/new-service';
import NavBar from './app/shared/components/nav-bar/nav-bar';
import PaginationTest from './app/view/home-page/layout-card-services/layout-card-services.template'

import { makeStyles } from '@material-ui/core/styles';

import '../src/assets/styles/style.scss';
import './App.scss'
import NotFound from './app/view/errors/404-not-found/404-not-found';

export default (props) => {
    return (
        <div className="container-app">
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/new-service" component={NewService} />
                    <Route exact path="/pagination" component={PaginationTest} />
                    <Route path ="/*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}


