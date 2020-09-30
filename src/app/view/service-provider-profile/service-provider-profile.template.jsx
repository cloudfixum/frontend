import React from 'react';
import Grid from '@material-ui/core/Grid';

import '../home-page/card-services/card-services.scss';
import './service-provider-profile.scss';
import { Preloader } from '../../shared/components/preloader/preloader';
import CardServices from "../home-page/card-services/card-services";

const values = [
    'Id',
    'Dni',
    'Name',
    'Last Name',
    'Email',
    'Phone Number',
    'Address',
    'Location',
    'Birthday',
];

export default (user, services) => {
    return (
        <div className="provider-profile">
            <nav className="flex-column-center-center title-background">
                <h3 className="title profile-title"> My Profile </h3>
            </nav>
            <div className="wrapper">
                <div className="mat-card">
                    <p><b>Name:</b> {user.name}</p>
                    <p><b>Last Name:</b> {user.last_name}</p>
                    <p><b>Username:</b> {user.email}</p>
                    <button
                        id="edit"
                        name="edit"
                        className="button-primary button-edit"
                        onClick={() => {
                            window.location = '/user/profile/edit';
                        }}>
                        Edit Profile
                    </button>
                </div>
            </div>
            <div className="">
                <div className="wrapper col3 col2-md col1-xs">
                    {services.map((service, i) => {
                        return (
                            <CardServices
                                key={i}
                                service={service}
                                category={service.category}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
