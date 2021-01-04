import React, { useEffect } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import { getCart } from '~/store/cart/action';
import { connect, useDispatch } from 'react-redux';
import WPLayout from '~/wp-components/layouts/WPLayout';
import WPFormCheckout from '~/wp-components/shared/forms/WPFormCheckout';

const CheckoutPage = () => {
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
        },
    ];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    return (
        <WPLayout title="Checkout">
            <div className="ps-page--simple">
                {/*  <BreadCrumb breacrumb={breadCrumb} />*/}
                <div className="ps-checkout ps-section--shopping">
                    <div className="container">
                        <div className="ps-section__header">
                            <h1>Checkout Information</h1>
                        </div>
                        <div className="ps-section__content">
                            <WPFormCheckout />
                        </div>
                    </div>
                </div>
            </div>
        </WPLayout>
    );
};

export default CheckoutPage;
