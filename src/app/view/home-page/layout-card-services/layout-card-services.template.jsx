import React from 'react';

import CardServices from '../card-services/card-services';
import './layout-card-services.scss';
import { Preloader } from '../../../shared/components/preloader/preloader';
import Pagination from '@material-ui/lab/Pagination';

const scrollUp = (e) => {
    window.scroll(0, 0);
};

export default (props) => {
    let total_pages;
    if (props.data.headers !== undefined) {
        total_pages = props.headers['totalpages'];
    }
    return (
        <div>
            {props.data === undefined ? (
                <div className="flex-column-center-start container-preloader">
                    <Preloader />
                </div>
            ) : (
                <div className="wrapper col2 col3-lg col2-md col1-xs">
                    {props.data.map((service, i) => {
                        return(
                        <div
                            key={i}
                            className="flex-row-center-center container-layout-card">
                            <CardServices service={service} />
                        </div>
                    )})}
                </div>
            )}
            {/*
            <div className="container-pagination flex-column-center-center">
                <Pagination
                    count={Number(total_pages)}
                    onChange={(e, value) => {
                        props.newPage(e, value);
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
};
