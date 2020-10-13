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
import BudgetRequest from "./app/view/request-budget-form/budget-request";
import EditServiceProviderProfile from './app/view/edit-service-provider-profile/edit-service-provider-profile';
import ServiceProviderSummary from './app/view/service-provider-summary/service-provider-summary';
import BudgetUserProviderList from "./app/view/budget-user-provider-list/budget-user-provider-list";
import {
    items_navbar_nolog,
    item_navbar_log,
} from './app/shared/utils/items-navbar';

import '../src/assets/styles/fonts/style.css';
import '../src/assets/styles/style.scss';
import './App.scss';

function App() {
    let items =
        localStorage.getItem('jwt') !== null
            ? item_navbar_log
            : items_navbar_nolog;

    return (
        <div className="container-app">
            <BrowserRouter>
                <NavBar items={items} />
                <Switch>
                    <Route exact path="/" render={() => <HomePage />} />
                    <Route
                        exact
                        path="/user/new-service"
                        render={() =>
                            localStorage.getItem('jwt') !== null ? (
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
                            localStorage.getItem('jwt') !== null ? (
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
                            localStorage.getItem('jwt') === null ? (
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
                            localStorage.getItem('jwt') === null ? (
                                <Signin />
                            ) : (
                                <Redirect to="/user/profile" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/service/:id/detail"
                        component={ServiceProviderSummary}
                    />
                    <Route
                        exact
                        path="/service/budget"
                        component={BudgetRequest}
                    />
                    <Route
                        exact
                        path="/user/budgets"
                        component={BudgetUserProviderList}
                    />
                    <Route
                        exact
                        path="/user/profile/edit"
                        render={() =>
                            localStorage.getItem('jwt') !== null ? (
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
}

export default App;
