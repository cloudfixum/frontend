import React, {useState} from "react";

import Header from "./header/header";
import LayoutCardServices from "./layout-card-services/layout-card-services";

import './home-page.scss';
import LayoutCardCategory from "./layout-card-category/layout-card-category";

export default function HomePage() {
    let [selectedCategory, setSelectedCategory] = useState(false)

    const handleChangeCategory = () => {
        setSelectedCategory(true)
    }

    return (
        <div>
            <Header />
            {
                selectedCategory
                    ? <LayoutCardServices />
                    : <LayoutCardCategory callback={handleChangeCategory}/>
            }
        </div>
    );
}
