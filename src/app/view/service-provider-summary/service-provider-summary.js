import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ServiceCategories } from '../../shared/utils/constant/service-categories';

import './service-provider-summary.scss';
import ServicesApi from '../../shared/services/services-api';

export default function ServiceProviderSummary(props) {
    let routeService = '/service/' + props.match.params.id + '/budget';
    const serviceCategories = new ServiceCategories().getAllSubCategories();

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

    const getCategory = () => {
        let serviceCategory = serviceCategories.find(
            (category) => Object.keys(category)[0] === service.category
        );
        if (!serviceCategory) {
            return;
        }
        return Object.values(serviceCategory)[0];
    };

    return (
        <div className="container-service-provider-summary">
            <div className="responsive-wrapper col1-res">
                <div className="mat-card">
                    <h2 style={{ marginBottom: '24px' }}>SERVICE SUMMARY</h2>
                    <p>
                        <b>Service Provider: </b>
                        {service.serviceProvider?.name}{' '}
                        {service.serviceProvider?.last_name}
                    </p>
                    <p>
                        <b>Email: </b>
                        {service.serviceProvider?.email}
                    </p>
                </div>
            </div>
            <div className="responsive-wrapper col1-res">
                <div className="mat-card">
                    <div className="service-container">
                        <div className="mat-card-header">
                            <h3>{service.title}</h3>
                        </div>
                        <div className="mat-card-content">
                            <div className="content-description">
                                <p>
                                    <b>Description: </b>
                                    {service.description}
                                </p>
                                {getCategory() ? (
                                    <p>
                                        <b>Category: </b>
                                        {getCategory()}
                                    </p>
                                ) : null}
                                <p>
                                    <b>Base price: </b>${service.base_price}
                                </p>
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
