import React, { useEffect } from 'react';

import { stickyHeader } from '~/utilities/common-helpers';
import Logo from '~/components/elements/common/Logo';
import MenuCategoriesDropdown from '~/components/shared/menus/MenuCategoriesDropdown';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import WPNavigationDefault from '~/wp-components/shared/navigations/WPNavigationDefault';
import WPHeaderActions from '~/wp-components/shared/headers/WPHeaderActions';
import WPSearchHeader from '~/wp-components/shared/headers/WPSearchHeader';

const WPHeaderDefault = () => {
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);
    return (
        <header
            className="header header--1"
            data-sticky="true"
            id="headerSticky">
            <div className="header__top">
                <div className="ps-container">
                    <div className="header__left">
                        <Logo />
                        <MenuCategoriesDropdown />
                    </div>
                    <div className="header__center">
                        <WPSearchHeader />
                    </div>
                    <div className="header__right">
                        <WPHeaderActions />
                    </div>
                </div>
            </div>
            <WPNavigationDefault />
        </header>
    );
};

export default WPHeaderDefault;
