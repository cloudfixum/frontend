import React from 'react';
import { ServiceCategories } from '../../../shared/utils/constant/service-categories';

import './card-category.scss';

export default function CardCategory(props) {
    let image_category = new ServiceCategories().getImageBycategory(
        props.category
    );
    let image =
        'url(' + require('../../../../assets/images/' + image_category) + ')';
    return (
        <div
            style={{ backgroundImage: image }}
            className="mat-card card-category-container">
            <div className="mat-card-content">
                <h3>{props.category}</h3>
            </div>
        </div>
    );
}
