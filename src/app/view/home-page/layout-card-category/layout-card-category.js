import React from 'react';

import CardCategory from '../card-category/card-category';
import { ServiceCategories } from '../../../shared/utils/constant/service-categories';
import { toUpperFirstChar } from '../../../shared/utils/to-upper-first-char';

export default function LayoutCardCategory(props) {
    let categories = new ServiceCategories().getCategories();

    const setCategory = (category, e) => {
        e.preventDefault();
        props.callback(category);
    };

    return (
        <div className="wrapper col4 col3-lg col2-md col1-xs">
            {categories.map((category, i) => (
                <div
                    key={i}
                    onClick={(e) => {
                        setCategory(category, e);
                    }}>
                    <CardCategory category={toUpperFirstChar(category)} />
                </div>
            ))}
        </div>
    );
}
