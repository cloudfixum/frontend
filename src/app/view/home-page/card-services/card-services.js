import React from "react";
import {ServiceCategories} from "../../../shared/utils/constant/service-categories";

import './card-services.scss';

export default function CardServices(props) {

    const image = 'url(' + props.service.image_url + ')';
    const serviceCategories = new ServiceCategories().getCategoriesByType('sub_categories');

    return (
        <div className="mat-card card-service-container" style={{ backgroundImage: image }}>
            <div className="mat-card-header">
                <h3>{props.service.title}</h3>
                <p>{serviceCategories[props.service.category]}</p>
            </div>
            <div className="mat-card-content">
                <p>{props.service.description}</p>
                <p>
                    <span>Base Price:</span> ${props.service.base_price}
                </p>
            </div>
            <div>
                <button className="button button-primary">
                    More Details
                </button>
            </div>
        </div>
    );
}
