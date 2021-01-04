import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Addresses from '~/components/partials/account/Addresses';
import Notifications from '~/components/partials/account/Notifications';

import WPLayout from '~/wp-components/layouts/WPLayout';

const AccountNotificationsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Addresses',
        },
    ];
    return (
        <WPLayout>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <Notifications />
            </div>
        </WPLayout>
    );
};

export default AccountNotificationsPage;
