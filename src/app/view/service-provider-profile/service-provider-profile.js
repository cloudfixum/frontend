import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { UserApi } from '../../shared/services/user-api';
import ServicesApi from '../../shared/services/services-api';
import CardServices from "../home-page/card-services/card-services";

import '../home-page/card-services/card-services.scss';
import './service-provider-profile.scss';

export default function ServiceProviderProfile() {
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

    const [user, setUser] = useState({});

    const [services, setServices] = useState([]);

    let tokenObject = JSON.parse(localStorage.getItem('jwt'));

    const [token, setToken] = useState(tokenObject['jwt']);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = (e) => {
        console.log(token);
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
            <div className="wrapper">
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
                    <Link to='/user/budgets'>
                        <button>
                            <p>
                                <b>Budget Request List</b>
                            </p>
                        </button>
                    </Link>
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
}
