import React from 'react';
import MenuCategories from '~/components/shared/headers/modules/MenuCategories';

const MenuCategoriesDropdown = () => {
    return (
        <div className="menu--product-categories">
            <div className="menu__toggle">
                <i className="icon-menu"></i>
                <span>Shop by Department</span>
            </div>
            <div className="menu__content">
                <MenuCategories />
            </div>
        </div>
    );
};

export default MenuCategoriesDropdown;
