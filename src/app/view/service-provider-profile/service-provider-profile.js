import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserApi } from '../../shared/services/user-api';
import ServicesApi from '../../shared/services/services-api';
import CardServices from '../home-page/card-services/card-services';
import { ServiceCategories } from '../../shared/utils/constant/service-categories';

import '../home-page/card-services/card-services.scss';
import './service-provider-profile.scss';

export default function ServiceProviderProfile() {
    const serviceCategories = new ServiceCategories().getAllSubCategories();

    const [user, setUser] = useState({});

    const [services, setServices] = useState([]);

    let tokenObject = JSON.parse(localStorage.getItem('jwt'));

    const [token] = useState(tokenObject['jwt']);

    const getUser = (e) => {
        new UserApi()
            .getUserByToken(token)
            .then((res) => {
                setUser(res);
                localStorage.setItem('id', res.id);
                getJobsMyUser(res.id);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        getUser();
    }, []);

    const getJobsMyUser = (id) => {
        new ServicesApi()
            .getJobsByUserId(id)
            .then((res) => {
                setServices(res);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div className="provider-profile">
            <nav className="flex-column-center-center title-background">
                <h3 className="title profile-title"> My Profile </h3>
            </nav>
            <div className="responsive-wrapper">
                <div className="mat-card">
                    <p>
                        <b>Name:</b> {user.name}
                    </p>
                    <p>
                        <b>Last Name:</b> {user.last_name}
                    </p>
                    <p>
                        <b>Username:</b> {user.email}
                    </p>
                    <div
                        className="flex-row-flexend-center"
                        style={{ marginTop: 16 }}>
                        <Link to="/user/budgets">
                            <button
                                style={{ marginRight: 16 }}
                                className="button-accent">
                                Budget Request List
                            </button>
                        </Link>
                        <button
                            id="edit"
                            name="edit"
                            className="button-primary"
                            onClick={() => {
                                window.location = '/user/profile/edit';
                            }}>
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="responsive-wrapper col4-res">
                    {services.map((service, i) => {
                        let serviceCategory = serviceCategories.find(
                            (category) =>
                                Object.keys(category)[0] === service.category
                        );
                        if (!serviceCategory) {
                            return;
                        }
                        let category = Object.values(serviceCategory)[0];
                        return (
                            <CardServices
                                key={i}
                                service={service}
                                category={category}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
