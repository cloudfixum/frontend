import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import BudgetApi from '../../shared/services/budget-api';

import './budget-user-provider-list.scss';
import {Preloader} from "../../shared/components/preloader/preloader";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function BudgetUserProviderList() {
    const [budgets, setBudgets] = useState([]);

    const getBudgets = () => {
        new BudgetApi()
            .getBudgetByUserId()
            .then((res) => {
                console.log(res);
                setBudgets(res);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        getBudgets();
    }, []);

    const classes = useStyles();

    const redirectToAnswer = (e, id) => {
        window.location = '/user/budgets/' + id + '/answer';
    };
    if (budgets.length === 0){
        return (<div className="flex-column-center-center container-preloader">
            <Preloader />
            <p style={{ marginBottom: 24 }}>
                No hay presupuestos para mostrar...
            </p>
        </div>)
};
    return (
        <div className="container-budget-user-list">
            <List className={classes.root}>
                {budgets.map((budget, i) => {
                    return (
                        <ListItem
                            className="list-item-container"
                            key={i}
                            onClick={(e) => {
                                redirectToAnswer(e, budget.id);
                            }}
                            alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/1.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary={budget.userEmail}
                                secondary={
                                    <React.Fragment>
                                        {budget.description}
                                    </React.Fragment>
                                }
                            />
                            <Divider variant="inset" component="li" />
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
}
