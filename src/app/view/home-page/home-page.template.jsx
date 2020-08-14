import React from 'react';

import Header from './header/header';
import LayoutCardServices from './layout-card-services/layout-card-services';
import './home-page.scss';

export default () => {
    return (
        <div>
            <Header />
            <LayoutCardServices />
        </div>
    )
}