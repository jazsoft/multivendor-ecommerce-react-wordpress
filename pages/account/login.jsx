import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Login from '~/components/partials/account/Login';

import WPLayout from '~/wp-components/layouts/WPLayout';

const LoginPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Login',
        },
    ];
    return (
        <WPLayout title="Login">
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <Login />
            </div>
        </WPLayout>
    );
};

export default LoginPage;
