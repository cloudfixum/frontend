import React from 'react';

import ContainerServiceProviderSummary from './container-service-provider-summary/container-service-provider-summary';
import './service-provider-summary.scss';

export default function UserProviderSummary() {
    return (
        <div className="container-user-provider-summary">
            <ContainerServiceProviderSummary />
        </div>
    );
}
