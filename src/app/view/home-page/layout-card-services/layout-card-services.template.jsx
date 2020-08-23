import React from 'react';

import CardServices from "../card-services/card-services";
import './layout-card-services.scss';
import { Preloader } from '../../../shared/components/preloader/preloader';

export default (props) => {
    return (
        props.data.length === 0
        ? <div className="flex-column-center-start container-preloader">
            <Preloader/>
            </div>
        : <div className="container-layout-card-services">
            {
                props.data.map((service, i) => (
                    <div key={i} className="flex-row-center-center container-layout-card">
                        <CardServices service={service} />
                    </div>
                ))
            }
        </div>
    )
}
