import React from "react";

import CardCategory from "../card-category/card-category";
import {ServiceCategories} from "../../../shared/utils/constant/service-categories";

export default function LayoutCardCategory() {

    let serviceCategories = new ServiceCategories().getCategoriesByType('super_categories');
    console.log(serviceCategories.categories)
        return (
            <div>
                <div className="container-layout-card-services">
                    <CardCategory category={'HEALTH'} />
                    <CardCategory category={'BEAUTY'} />
                    <CardCategory category={'VEHICLE'} />
                    <CardCategory category={'WELLNESS'} />
                </div>
            </div>
        );
}


/*FOREACH
    {serviceCategories.categories.forEach((category, i) => (
        <div
            key={i}
            className="flex-row-center-center container-layout-card">
            <CardCategory service={category.value} />
        </div>
    ))}*/