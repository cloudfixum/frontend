import React from 'react';

import './service-provider-summary.scss'

export default function ServiceProviderSummary() {
    return(
        <div className="container-service-provider-summary">
            <div className="mat-card">
                <div className="service-provider-container">
                    <div className="mat-card-header">
                        <h3>{props.user.name}</h3>
                        <p>{props.user.last_name}</p>
                    </div>
                    <div className="mat-card-content">
                        <div className="content-description">
                            <p>{props.user.email}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mat-card">
                <div className="service-container">
                    <div className="mat-card-header">
                        <h3>{props.service.title}</h3>
                    </div>
                    <div className="mat-card-content">
                        <div className="content-description">
                            <p>{props.service.description}</p>
                            <p>{props.service.category}</p>
                            <p>{props.service.base_price}</p>
                        </div>
                    </div>
                </div>
                <div className="flex-row-flexend-center">
                    <button className="button-primary">Request Service</button>
                </div>
            </div>
        </div>
    )
}