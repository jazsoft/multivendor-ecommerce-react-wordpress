import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Shipping from '~/components/partials/account/Shipping';
import { getCart } from '~/store/cart/action';
import WPLayout from '~/wp-components/layouts/WPLayout';
import WPShipping from '~/wp-components/account/WPShipping';

const ShippingPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shopping Cart',
            url: '/account/shopping-cart',
        },
        {
            text: 'Checkout Information',
            url: '/account/checkout',
        },
        {
            text: 'Shipping',
        },
    ];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    return (
        <WPLayout>
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <WPShipping />
            </div>
        </WPLayout>
    );
};

export default connect()(ShippingPage);
