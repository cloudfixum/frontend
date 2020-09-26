import React, { useState } from 'react';

import Header from './header/header';
import LayoutCardServices from './layout-card-services/layout-card-services';
import LayoutCardCategory from './layout-card-category/layout-card-category';

import './home-page.scss';

export default function HomePage() {
    let [selectedCategory, setSelectedCategory] = useState(true);
    let [categoryByFilter, setCategoryByFilter] = useState('');

    const handleCategoryByFilter = (category) => {
        setSelectedCategory(true);
        setCategoryByFilter(category);
    };

    return (
        <div>
            <Header />
            {selectedCategory ? (
                <LayoutCardServices category={categoryByFilter} />
            ) : (
                <LayoutCardCategory callback={handleCategoryByFilter} />
            )}
        </div>
    );
}
