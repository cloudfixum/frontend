import React from 'react';
import ServicesApi from '../../../shared/services/services-api';
import useData from '../../../hooks/useData';
import CardServices from '../card-services/card-services';
import { Preloader } from '../../../shared/components/preloader/preloader';
// import Pagination from '@material-ui/lab/Pagination';

import './layout-card-services.scss';

// const scrollUp = (e) => {
//     window.scroll(0, 0);
// };

export default function LayoutCardServices(props) {
    // let total_pages;
    // if (props.data.headers !== undefined) {
    //     total_pages = props.headers['totalpages'];
    // }

    const servicesApi = new ServicesApi();
    const data = useData(servicesApi.getServices);

    return (
        <div>
            {data.data === undefined ? (
                <div className="flex-column-center-start container-preloader">
                    <Preloader />
                </div>
            ) : (
                <div className="wrapper col3 col2-md col1-xs">
                    {data.data.map((service, i) => {
                        return (
                                <CardServices key={i} service={service} />
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
