import React from 'react';
import { toUpperFirstChar } from '../../../shared/utils/to-upper-first-char';

import './card-services.scss';
import { ServiceCategories } from '../../../shared/utils/constant/service-categories';

export default function CardServices(props) {
    const image = 'url(' + props.service.image_url + ')';
    const categories = new ServiceCategories().getSubCategoriesByType(
        props.category
    );

    return (
        <div
            style={{ backgroundImage: image }}
            className="mat-card card-service-container">
            <div className="data-container">
                <div className="mat-card-header">
                    <h3>{props.service.title}</h3>
                    <p>{categories[props.service.category]}</p>
                </div>
                <div className="mat-card-content">
                    <div className="content-description">
                        <p>{props.service.description}</p>
                    </div>
                    <p>
                        <span>Base Price:</span> ${props.service.base_price}
                    </p>
                </div>
                <div className="flex-row-flexend-center">
                    <button className="button-primary">More Details</button>
                </div>
            </div>
        </div>
    );
}
