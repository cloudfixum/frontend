import React, { useEffect, useState } from 'react';

import './confirm-service.scss';

import ServicesApi from '../../shared/services/services-api';

export default function ConfirmService(props) {
    console.log(props.match.params.id);

    let [service, setService] = useState({});

    useEffect(() => {
        new ServicesApi()
            .getServiceById(props.match.params.id)
            .then((res) => {
                console.log(res);
                setService(res);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <div className="container-confirm-service">
            <div className="wrapper">
                <div className="mat-card card-confirm">
                    <div className="confirm-service-card">
                        <div className="mat-card-header">
                            <h3>{service.serviceProvider?.name}</h3>
                            <p>{service.serviceProvider?.last_name}</p>
                        </div>
                        <div className="mat-card-content">
                            <div className="content-description">
                                <p>{service.serviceProvider?.email}</p>
                            </div>
                        </div>
                        <div className="mat-card-header">
                            <h3>{service.title}</h3>
                        </div>
                        <div className="mat-card-content">
                            <div className="content-description">
                                <p>{service.description}</p>
                                <p>{service.category}</p>
                                <p>{service.base_price}</p>
                            </div>
                        </div>
                        <h1>Service confirm!</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
