import React from 'react';

import CardServices from "../card-services/card-services";
import './layout-card-services.scss';

export default (props) => {
    return (
        <div className="container-layout-card-services">
            {
                props.data.map((service) => (
                    <CardServices service={service} />
                ))
            }
        </div>
    )
}
