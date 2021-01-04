import React from 'react';
import Head from 'next/head';
import NavigationList from '~/components/shared/navigation/NavigationList';
import HeaderMobileProduct from '~/components/shared/header-mobile/HeaderMobileProduct';
import Newletters from '~/components/partials/commons/Newletters';
import FooterDefault from '~/components/shared/footers/FooterDefault';

const LayoutProductDetail = ({ children, title = 'Homepage' }) => {
    return (
        <div className="layout--product">
            <Head>
                <title>Martfury {title ? '-' + title : ''}</title>
            </Head>
           {/* <HeaderMobileProduct />*/}
            <NavigationList />
            {children}
            <Newletters />
            <FooterDefault />
        </div>
    );
};

export default LayoutProductDetail;
