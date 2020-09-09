import React from 'react';

import './nav-bar.scss';
import { Link } from 'react-router-dom';

const handleStateMenu = () => {
    if (window.screen.width >= 600) {
        return;
    }
    let element = document.querySelector('.container-items-nav-bar');
    if (element.style.display === 'none' || !element.style.display) {
        element.style.display = 'flex';
    } else {
        element.style.display = 'none';
    }
};

export default (props) => {

    const logout = () => {
        localStorage.removeItem('token')
        window.location='/'
    }

    return (
        <div className="container-nav-bar">
            <nav>
                <div className="container-logo flex-column-center-center">
                    <p>CloudFixum</p>
                </div>
                <div
                    onClick={handleStateMenu}
                    className="button-menu flex-column-center-center">
                    <span className="material-icons">dehaze</span>
                </div>
                <div className="container-items-nav-bar">
                    {
                        props.items.map( (item, i) => {
                            return(
                                <div key={i}>
                                    <Link to={item.path}>
                                        <li onClick={item.name === 'Logout' ? () => { handleStateMenu(); logout() } : handleStateMenu}>
                                            <span className="material-icons">{item.icon}</span>{item.name}
                                        </li>
                                    </Link>
                                    <div className="divider-items"></div>
                                </div>
                            )
                        })
                    }
                </div>
            </nav>
        </div>
    );
};
