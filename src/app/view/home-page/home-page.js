import React, {useState} from "react";

import Header from "./header/header";
import LayoutCardServices from "./layout-card-services/layout-card-services";

import './home-page.scss';
import LayoutCardCategory from "./layout-card-category/layout-card-category";
import ServicesApi from "../../shared/services/services-api";
import useData from '../../hooks/useData'

export default function HomePage() {
    let [selectedCategory, setSelectedCategory] = useState(false)

    let [categoryByFilter, setCategoryByFilter] = useState('')

    const handleCategoryByFilter = (category) => {
        console.log(category)
        setSelectedCategory(true)
            setCategoryByFilter(category)
    }

    return (
        <div>
            <Header />
            {
                selectedCategory
                    ? <LayoutCardServices category={categoryByFilter}/>
                    : <LayoutCardCategory callback={handleCategoryByFilter}/>
            }
        </div>
    );
}
