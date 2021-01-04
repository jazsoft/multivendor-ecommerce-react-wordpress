import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Newsletters from '~/components/partials/commons/Newletters';
import Addresses from '~/components/partials/account/Addresses';
import WPLayout from '~/wp-components/layouts/WPLayout';

const MyAccountPage = () => {
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
        <WPLayout title="Address">
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <Addresses />
            </div>
            <Newsletters layout="container" />
        </WPLayout>
    );
};

export default MyAccountPage;
