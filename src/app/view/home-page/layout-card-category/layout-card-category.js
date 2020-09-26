import React from 'react';

import CardCategory from '../card-category/card-category';
import { ServiceCategories } from '../../../shared/utils/constant/service-categories';

export default function LayoutCardCategory(props) {
    let categories = new ServiceCategories().getCategoriesByType(
        'super_categories'
    );

    const setCategory = (category, e) => {
        e.preventDefault();
        console.log(category);
        props.callback(category);
    };

    return (
        <div className="wrapper col4 col3-lg col2-md col1-xs">
            {Object.keys(categories).map((category, i) => (
                <div
                    key={i}
                    onClick={(e) => {
                        setCategory(category, e);
                    }}>
                    <CardCategory category={categories[category]} />
                </div>
            ))}
        </div>
    );
}
