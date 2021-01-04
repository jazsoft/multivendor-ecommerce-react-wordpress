import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Wishlist from '~/components/partials/account/Wishlist';
import WPLayout from '~/wp-components/layouts/WPLayout';
import WPWishlist from '~/wp-components/account/WPWishlist';

const WishlistPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Wishlist',
        },
    ];
    return (
        <WPLayout title="Wishlist">
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <WPWishlist />
            </div>
        </WPLayout>
    );
};

export default WishlistPage;
