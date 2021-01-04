import React from 'react';
import OrderTracking from '~/components/partials/account/OrderTracking';
import BreadCrumb from '~/components/elements/BreadCrumb';
import WPLayout from '~/wp-components/layouts/WPLayout';

const OrderTrackingPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Order Tracking',
        },
    ];
    return (
        <WPLayout title="Order Tracking">
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <OrderTracking />
            </div>
        </WPLayout>
    );
};

export default OrderTrackingPage;
