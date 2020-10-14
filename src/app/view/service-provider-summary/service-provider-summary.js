import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './service-provider-summary.scss';
import ServicesApi from '../../shared/services/services-api';

export default function ServiceProviderSummary(props) {
    console.log(props);
    let routeService = '/service/' + props.match.params.id + '/budget';

    let [service, setService] = useState({});

    const getServiceById = () => {
        new ServicesApi()
            .getServiceById(props.match.params.id)
            .then((res) => {
                console.log(props.match.params.id);
                setService(res);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        getServiceById();
    }, []);

    return (
        <div className="container-service-provider-summary">
            <h2 style={{ textAlign: 'center', marginTop: '24px' }}>
                SERVICE SUMMARY
            </h2>
            <div className="wrapper">
                <div className="mat-card">
                    <div className="service-provider-container">
                        <div className="mat-card-header">
                            <h3>{service.serviceProvider?.name}</h3>
                            <p>{service.serviceProvider?.last_name}</p>
                        </div>
                        <div className="mat-card-content">
                            <div className="content-description">
                                <p>{service.serviceProvider?.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <div className="mat-card">
                    <div className="service-container">
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
                    </div>
                    <div className="flex-row-flexend-center">
                        <Link to={routeService}>
                            <button className="button-primary">
                                Request Service
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
