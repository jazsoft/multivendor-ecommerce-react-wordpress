import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Register from '~/components/partials/account/Register';

import WPLayout from '~/wp-components/layouts/WPLayout';

const RegisterPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Register an account',
        },
    ];

    return (
        <WPLayout title="Register">
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <Register />
            </div>
        </WPLayout>
    );
};

export default RegisterPage;
