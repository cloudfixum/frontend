import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './app/view/home-page/home-page';
import NavBar from './app/shared/components/nav-bar/nav-bar';

import '../src/assets/styles/style.scss';

export default (props) => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
        </BrowserRouter>
    )
}
