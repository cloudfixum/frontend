import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './app/view/home-page/home-page';
import NewService from './app/view/new-service/new-service';

import ServiceProviderProfile from './app/view/service-provider-profile/service-provider-profile';

import NewUserProvider from './app/view/register-service-user-provider/register-service-user-provides';

import NavBar from './app/shared/components/nav-bar/nav-bar';
import Footer from './app/shared/components/footer/footer';
import NotFound from './app/view/errors/404-not-found/404-not-found';
import Signin from './app/view/signin/signin';

import '../src/assets/styles/fonts/style.css';
import '../src/assets/styles/style.scss';
import './App.scss';
import EditServiceProviderProfile from './app/view/edit-service-provider-profile/edit-service-provider-profile';

export default (props) => {
    const items_navbar_nolog = [
        {
            path: '/',
            name: 'Home',
            icon: 'house',
        },
        {
            path: '/signup',
            name: 'Sign Up',
            icon: 'person_add',
        },
        {
            path: '/signin',
            name: 'Sign In',
            icon: 'login',
        },
    ];

    const item_navbar_log = [
        {
            path: '/user/profile',
            name: 'Profile',
            icon: 'person',
        },
        {
            path: '/user/new-service',
            name: 'New Service',
            icon: 'add',
        },
        {
            path: '/',
            name: 'Logout',
            icon: 'cancel',
        },
    ];

    let items =
        localStorage.getItem('token') !== null
            ? item_navbar_log
            : items_navbar_nolog;

    return (
        <div className="container-app">
            <BrowserRouter>
                <NavBar items={items} />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() =>
                            localStorage.getItem('token') === null ? (
                                <HomePage />
                            ) : (
                                <Redirect to="/user/profile" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/user/new-service"
                        render={() =>
                            localStorage.getItem('token') !== null ? (
                                <NewService />
                            ) : (
                                <Redirect to="/signin" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/user/profile"
                        render={() =>
                            localStorage.getItem('token') !== null ? (
                                <ServiceProviderProfile />
                            ) : (
                                <Redirect to="/signin" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/signup"
                        render={() =>
                            localStorage.getItem('token') === null ? (
                                <NewUserProvider />
                            ) : (
                                <Redirect to="/user/profile" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/signin"
                        render={() =>
                            localStorage.getItem('token') === null ? (
                                <Signin />
                            ) : (
                                <Redirect to="/user/profile" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/user/profile/edit"
                        render={() =>
                            localStorage.getItem('token') !== null ? (
                                <EditServiceProviderProfile />
                            ) : (
                                <Redirect to="/signin" />
                            )
                        }
                    />
                    <Route path="/*" component={NotFound} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
};
