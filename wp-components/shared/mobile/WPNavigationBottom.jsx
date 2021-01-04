import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Drawer } from 'antd';
import PanelMenu from '~/components/shared/panel/PanelMenu';
import PanelSearch from '~/components/shared/panel/PanelSearch';
import PanelCategories from '~/components/shared/panel/PanelCategories';
import Link from 'next/link';

const DrawerMobile = ({ closeEvent, visibleStatus, children }) => {
    return (
        <Drawer
            className="ps-panel--mobile"
            placement="right"
            closable={false}
            onClose={closeEvent}
            visible={visibleStatus}>
            {children}
        </Drawer>
    );
};

const WPNavigationBottom = () => {
    const [activeDrawer, setActiveDrawer] = useState({
        menu: false,
        cart: false,
        search: false,
        categories: false,
    });
    const [isDrawerShow, setIsDrawerShow] = useState(false);
    const handleDrawerClose = () => {
        setIsDrawerShow(false);
        setActiveDrawer({
            menu: false,
            cart: false,
            search: false,
            categories: false,
        });
    };
    const handleShowMenuDrawer = () => {
        setIsDrawerShow(true);
        setActiveDrawer({
            menu: !activeDrawer.menu,
            cart: false,
            search: false,
            categories: false,
        });
    };

    const handleShowSearchDrawer = () => {
        setActiveDrawer({
            menu: false,
            cart: false,
            search: !activeDrawer.search,
            categories: false,
        });
        setIsDrawerShow(true);
    };
    const handleShowCategoriesDrawer = () => {
        setActiveDrawer({
            menu: false,
            cart: false,
            search: false,
            categories: !activeDrawer.categories,
        });
        setIsDrawerShow(true);
    };
    // Views

    const menuDrawerView = (
        <div className="ps-panel--wrapper">
            <div className="ps-panel__header">
                <h3>Menu</h3>
                <span className="ps-panel__close" onClick={handleDrawerClose}>
                    <i className="icon-cross"></i>
                </span>
            </div>
            <div className="ps-panel__content">
                <PanelMenu />
            </div>
        </div>
    );
    const categoriesDrawerView = (
        <div className="ps-panel--wrapper">
            <div className="ps-panel__header">
                <h3>Categories</h3>
                <span className="ps-panel__close" onClick={handleDrawerClose}>
                    <i className="icon-cross"></i>
                </span>
            </div>
            <div className="ps-panel__content">
                <PanelCategories />
            </div>
        </div>
    );
    const searchDrawerView = (
        <div className="ps-panel--wrapper">
            <div className="ps-panel__header">
                <h3>Search</h3>
                <span className="ps-panel__close" onClick={handleDrawerClose}>
                    <i className="icon-cross"></i>
                </span>
            </div>
            <div className="ps-panel__content">
                <PanelSearch />
            </div>
        </div>
    );
    let drawerView;
    if (activeDrawer.menu === true) {
        drawerView = menuDrawerView;
    }
    if (activeDrawer.search === true) {
        drawerView = searchDrawerView;
    }

    if (activeDrawer.categories === true) {
        drawerView = categoriesDrawerView;
    }

    return (
        <div className="navigation--list">
            <DrawerMobile visibleStatus={isDrawerShow}>
                {drawerView}
            </DrawerMobile>
            <div className="navigation__content">
                <a
                    className={`navigation__item ${
                        activeDrawer.menu === true && 'active'
                    }`}
                    onClick={handleShowMenuDrawer}>
                    <i className="icon-menu"></i>
                    <span> Menu</span>
                </a>
                <a
                    className={`navigation__item ${
                        activeDrawer.categories === true && 'active'
                    }`}
                    onClick={handleShowCategoriesDrawer}>
                    <i className="icon-list4"></i>
                    <span> Categories</span>
                </a>
                <a
                    className={`navigation__item ${
                        activeDrawer.search === true && 'active'
                    }`}
                    onClick={handleShowSearchDrawer}>
                    <i className="icon-magnifier"></i>
                    <span> Search</span>
                </a>
                <Link href="/account/shopping-cart">
                    <a className="navigation__item">
                        <i className="icon-bag2"></i>
                        <span> Cart</span>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default connect((state) => state.setting)(WPNavigationBottom);
