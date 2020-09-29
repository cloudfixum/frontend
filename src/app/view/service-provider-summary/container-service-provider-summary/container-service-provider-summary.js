import React from 'react';

import './container-service-provider-summary.scss';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';



export default function ContainerServiceProviderSummary() {
    return (
        <div className="container-form-user-provider-summary">
            <h1>User Provider Summary</h1>
            <Grid container spacing={8}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="container-img-user-provider"/>
                </Grid>
                <Grid item  xs={12} sm={12} md={6} lg={6} className="flex-column-center-start form-items">
                    <div className="flex-row-center-center">
                        <TextField
                            id="name"
                            label="Name"
                            defaultValue="Juan"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            id="lastname"
                            label="Last name"
                            defaultValue="Perez"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                    <TextField
                        id="ubication"
                        label="Ubication"
                        defaultValue="San Rafael"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="base_price"
                        label="Price"
                        defaultValue="200"
                        InputProps={{
                            readOnly: true,
                        }}
                        
                    />
                    <div className="calification-service-provider">
                        <Box component="fieldset" mb={1} borderColor="transparent">
                            <Rating  name="read-only" value={3} readOnly />
                        </Box>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={12} className="container-description">
                    <h6>Sint incididunt dolore mollit deserunt est exercitation ullamco eu anim Lorem laboris. Id commodo exercitation tempor Lorem ex ut consequat officia velit dolore. Aute elit proident do est nulla nostrud ullamco aute duis nostrud consectetur Lorem ullamco irure. Ut quis eu exercitation culpa proident consequat ullamco commodo amet et. Id ad laboris velit id nostrud laboris proident aute ex enim irure minim. Culpa pariatur reprehenderit et aliqua nostrud nostrud adipisicing velit do est exercitation.</h6>
            </Grid>
        </div>
    );
}