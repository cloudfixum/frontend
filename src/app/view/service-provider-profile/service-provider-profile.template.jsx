import React from 'react';
import Grid from '@material-ui/core/Grid';

import '../home-page/card-services/card-services.scss';
import './service-provider-profile.scss';
import { Preloader } from '../../shared/components/preloader/preloader';

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

export default () => {
    return (
        <div className="provider-profile">
            <nav className="flex-column-center-center title-background">
                <h3 className="title profile-title"> My Profile </h3>
            </nav>
            {/*
            <Grid
                container
                spacing={0}
                style={{ padding: '24px' }}
                direction="column"
                alignItems="center"
                justify="center">
                <Grid item></Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    xl={3}
                    className="container-user-values profile-card card-container flex-column-center-start">
                    {Object.keys(user) === undefined ? (
                        <div className="flex-column-center-start container-preloader">
                            <Preloader />
                        </div>
                    ) : (
                        Object.keys(user).map((key, i) => {
                            if (i === 0) {
                                return null;
                            }
                            return (
                                <tr key={i} className="card-header-container">
                                    <td>
                                        {' '}
                                        <h3>{values[i]}</h3>{' '}
                                    </td>
                                    <td>
                                        {' '}
                                        <h3>:</h3>{' '}
                                    </td>
                                    <td style={{ opacity: 0 }}> ___ </td>
                                    <td className="td-align">
                                        {' '}
                                        <p>{user[key]}</p>{' '}
                                    </td>
                                </tr>
                            );
                        })
                    )}
                    <button
                        id="edit"
                        name="edit"
                        className="button-primary button-edit"
                        onClick={() => {
                            window.location = '/user/profile/edit';
                        }}>
                        Edit Profile
                    </button>
                </Grid>
            </Grid>
            */}
        </div>
    );
};
