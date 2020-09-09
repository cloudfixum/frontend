import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './app/view/home-page/home-page';
import NewService from './app/view/new-service/new-service';

import ServiceProviderProfile from './app/view/service-provider-profile/service-provider-profile';

import NewUserProvider from './app/view/register-service-user-provider/register-service-user-provides';

import NavBar from './app/shared/components/nav-bar/nav-bar';
import NotFound from './app/view/errors/404-not-found/404-not-found';
import SingIn from "./app/view/singin/singin";

import '../src/assets/styles/style.scss';
import './App.scss';
import EditServiceProviderProfile from "./app/view/edit-service-provider-profile/edit-service-provider-profile";

export default (props) => {

    const items_navbar_nolog = [
        {
            'path': '/',
            'name': 'Home',
            'icon': 'house',
        },
        {
            'path': '/singup',
            'name': 'Sing Up',
            'icon': 'person_add',
        },
        {
            'path': '/singin',
            'name': 'Sing In',
            'icon': 'login',
        }
    ]

    const item_navbar_log = [
        {
            'path': '/user/profile',
            'name': 'Profile',
            'icon': 'person'
        },
        {
            'path': '/user/new-service',
            'name': 'New Service',
            'icon': 'add'
        },
        {
            'path': '/',
            'name': 'Logout',
            'icon': 'cancel'
        }
    ]

    let items = localStorage.getItem('token') !== null ? item_navbar_log : items_navbar_nolog

    return (
        <div className="container-app">
            <BrowserRouter>
                <NavBar items={items}/>
                <Switch>
                    <Route exact path="/" render={ () => (
                        localStorage.getItem('token') === null
                        ? <HomePage/>
                        : <Redirect to="/user/profile" />
                        )} />
                    <Route exact path="/user/new-service" render={ () => (
                        localStorage.getItem('token') !== null
                            ? <NewService/>
                            : <Redirect to="/singin" />
                    )} />
                    <Route
                        exact
                        path="/user/profile"
                        render={ () => (
                             localStorage.getItem('token') !== null
                                ? <ServiceProviderProfile/>
                                : <Redirect to="/singin" />
                        )} />
                    <Route exact path="/singup" render={ () => (
                        localStorage.getItem('token') === null
                            ? <NewUserProvider/>
                            : <Redirect to="/user/profile" />
                    )} />
                    <Route exact path="/singin" render={ () => (
                        localStorage.getItem('token') === null
                            ? <SingIn/>
                            : <Redirect to="/user/profile" />
                    )} />
                    <Route exact path="/user/profile/edit" render={ () => (
                        localStorage.getItem('token') !== null
                            ? <EditServiceProviderProfile/>
                            : <Redirect to="/singin" />
                    )} />
                    <Route path="/*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};
