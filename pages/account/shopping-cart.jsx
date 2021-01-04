import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import WPShoppingCart from '~/wp-components/account/WPShoppingCart';
import WPLayout from '~/wp-components/layouts/WPLayout';

const ShoppingCartPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shopping Cart',
        },
    ];
    return (
        <WPLayout>
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <WPShoppingCart />
            </div>
        </WPLayout>
    );
};

export default ShoppingCartPage;
