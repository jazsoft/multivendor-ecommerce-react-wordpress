import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Compare from '~/components/partials/account/Compare';
import WPLayout from '~/wp-components/layouts/WPLayout';
import WPCompare from '~/wp-components/account/WPCompare';

const ComparePage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Compare',
        },
    ];
    return (
        <WPLayout title="Compare">
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <WPCompare />
            </div>
        </WPLayout>
    );
};

export default ComparePage;
