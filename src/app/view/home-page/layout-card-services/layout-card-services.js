import React, { useEffect, useState } from 'react';
import ServicesApi from '../../../shared/services/services-api';
import CardServices from '../card-services/card-services';
import { Preloader } from '../../../shared/components/preloader/preloader';
import { Select, InputLabel, FormControl } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// import Pagination from '@material-ui/lab/Pagination';

import './layout-card-services.scss';
import { ServiceCategories } from '../../../shared/utils/constant/service-categories';

// const scrollUp = (e) => {
//     window.scroll(0, 0);
// };

export default function LayoutCardServices(props) {
    // let total_pages;
    // if (props.data.headers !== undefined) {
    //     total_pages = props.headers['totalpages'];
    // }

    const search = {
        inputSearch: '',
        selectSearch: '',
    };

    let [services, setServices] = useState([]);
    let [searchValues, setSearchValues] = useState(search);
    let [servicesFiltered, setServicesFiltered] = useState([]);

    const categories = new ServiceCategories().getSubCategoriesByType(
        props.category
    );

    const fetch = () => {
        new ServicesApi()
            .getServicesBySuperCategories(props.category)
            .then((res) => {
                setServices(res);
                setServicesFiltered(res);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        fetch();
    }, []);

    const goToBack = () => {
        props.callback();
    };

    const handleChange = (e) => {
        e.preventDefault();
        let array = [];
        setSearchValues({ ...searchValues, [e.target.name]: e.target.value });
        services.forEach((element) => {
            let title = element.title.toUpperCase();
            if (
                element.category === e.target.value ||
                title.includes(e.target.value.toUpperCase())
            ) {
                array.push(element);
            }
        });
        if (e.target.value === 'all' || e.target.value === '') {
            setServicesFiltered(services);
        } else {
            setServicesFiltered(array);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <ValidatorForm
                className="wrapper col3 col1-xs"
                onSubmit={handleSubmit}
                onError={(errors) => console.log(errors)}>
                <button
                    className="button-accent"
                    type="button"
                    onClick={goToBack}>
                    Back
                </button>
                <FormControl>
                    <TextValidator
                        label="Service name"
                        type="text"
                        id="inputSearch"
                        name="inputSearch"
                        variant="outlined"
                        fullWidth={true}
                        onChange={handleChange}
                        value={searchValues.inputSearch}
                    />
                </FormControl>
                <FormControl variant="outlined">
                    <InputLabel id="selectSearch">Select category *</InputLabel>
                    <Select
                        native
                        name="selectSearch"
                        onChange={handleChange}
                        label="Select category"
                        inputProps={{
                            id: 'selectSearch',
                        }}>
                        <option aria-label="None" value="all">
                            All
                        </option>
                        {Object.keys(categories).map((key, i) => {
                            let value = categories[key];
                            return (
                                <option key={i} value={key}>
                                    {value}
                                </option>
                            );
                        })}
                    </Select>
                </FormControl>
            </ValidatorForm>
            {servicesFiltered.length === 0 ? (
                <div className="flex-column-center-center container-preloader">
                    <Preloader />
                    <p style={{ marginBottom: 24 }}>
                        No hay servicios para mostar...
                    </p>
                </div>
            ) : (
                <div className="responsive-wrapper col4-res">
                    {servicesFiltered.map((service, i) => {
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
