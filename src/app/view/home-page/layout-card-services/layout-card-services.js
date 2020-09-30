import React, { useEffect, useState } from 'react';
import ServicesApi from '../../../shared/services/services-api';
import CardServices from '../card-services/card-services';
import { Preloader } from '../../../shared/components/preloader/preloader';
// import Pagination from '@material-ui/lab/Pagination';

import './layout-card-services.scss';
import {ServiceCategories} from "../../../shared/utils/constant/service-categories";

// const scrollUp = (e) => {
//     window.scroll(0, 0);
// };

export default function LayoutCardServices(props) {
    // let total_pages;
    // if (props.data.headers !== undefined) {
    //     total_pages = props.headers['totalpages'];
    // }

    let [services, setServices] = useState([]);

    const categories = new ServiceCategories().getSubCategoriesByType(
        props.category
    );

    useEffect(() => {
        const fetch = () => {
            new ServicesApi()
                .getServicesBySuperCategories(props.category)
                .then((res) => {
                    setServices(res);
                })
                .catch((e) => {
                    console.log(e);
                });
        };
        fetch();
    }, [props.category]);

    return (
        <div>
            {services.length === 0 ? (
                <div className="flex-column-center-start container-preloader">
                    <Preloader />
                </div>
            ) : (
                <div className="wrapper col3 col2-md col1-xs">
                    {services.map((service, i) => {
                        return (
                            <CardServices
                                key={i}
                                service={service}
                                category={categories[service.category]}
                            />
                        );
                    })}
                </div>
            )}
            {/*
            <div className="container-pagination flex-column-center-center">
                <Pagination
                    count={Number(total_pages)}
                    onChange={(e, value) => {
                        newPage(e, value);
                        scrollUp(e);
                    }}
                    variant="outlined"
                    shape="rounded"
                    color="primary"
                />
            </div>
            */}
        </div>
    );
}
