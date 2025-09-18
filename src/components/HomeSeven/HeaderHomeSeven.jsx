import React, { useEffect } from 'react';
import logo from '../../assets/images/logo-7.png';
import StickyMenu from '../../lib/StickyMenu.js';
import Navigation from '../Navigation.jsx';

function HeaderHomeSeven({ action }) {
    useEffect(() => {
        StickyMenu();
    });
    return (
        <>
            <header className="appie-header-area appie-header-7-area appie-sticky">
                <div className="container">
                    <div className="header-nav-box header-nav-box-7">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-12 text-center">
                                <div className="appie-logo-box">
                                    <a href="/">
                                        <img src={logo} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderHomeSeven;
