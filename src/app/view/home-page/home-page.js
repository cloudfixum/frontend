import React, { useState } from 'react';

import Header from './header/header';
import LayoutCardServices from './layout-card-services/layout-card-services';
import LayoutCardCategory from './layout-card-category/layout-card-category';
import SearchFilter from "./search-filter/search-filter";

import './home-page.scss';

export default function HomePage() {
    let [selectedCategory, setSelectedCategory] = useState(false);
    let [categoryByFilter, setCategoryByFilter] = useState('');

    const handleCategoryByFilter = (category) => {
        setSelectedCategory(true);
        setCategoryByFilter(category);
    };

    return (
        <div>
            <Header />
            <br/>
            <SearchFilter />
            {selectedCategory ? (
                <LayoutCardServices category={categoryByFilter} />
            ) : (
                <LayoutCardCategory callback={handleCategoryByFilter} />
            )}
        </div>
    );
}
