import React, {useState} from "react";

import '../card-services/card-services.scss';
import ServicesApi from "../../../shared/services/services-api";

export default function CardCategory(props){

    let [selectedCategory, setSelectedCategory] = useState(false)

    const getServicesByCategory = (category) => {
        const servicesApi = new ServicesApi()
        servicesApi.getServicesBySuperCategories(category)
            .then( (res) => {

            })
    }

    const image = 'url(' + props.image_url + ')';
    return (
        <div className="card-container" style={{ backgroundImage: image }}>
            <div
                style={{ display: 'none' }}
                className="image-background-container"></div>
            <div className="card-data-container">
                <div className="card-header-container">
                    <h3>{props.category}</h3>
                </div>
            </div>
            <button className="button-primary">Show all</button>
        </div>
    );
}