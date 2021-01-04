import React from 'react';
import BreadCrumb from '../../components/elements/BreadCrumb';
import FaqsContent from '../../components/partials/page/FaqsContent';
import Newletters from '../../components/partials/commons/Newletters';
import WPLayout from '~/wp-components/layouts/WPLayout';

const FaqsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Frequently Asked Questions',
        },
    ];

    return (
        <WPLayout title="FAQ">
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="container">
                    <FaqsContent />
                </div>
            </div>
            <Newletters layout="container" />
        </WPLayout>
    );
};

export default FaqsPage;
