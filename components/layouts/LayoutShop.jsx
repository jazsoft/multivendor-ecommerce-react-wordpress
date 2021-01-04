import React from 'react';
import Head from 'next/head';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import NavigationList from '~/components/shared/navigation/NavigationList';
import Newletters from '~/components/partials/commons/Newletters';
import FooterDefault from '~/components/shared/footers/FooterDefault';

import HeaderMobile from '~/components/shared/headers/HeaderMobile';

const LayoutShop = ({ children, title = 'Shop' }) => {
    return (
        <div className="layout--post">
            <Head>
                <title>Martfury - {title}</title>
            </Head>
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            {children}
            <Newletters layout="container" />
            <FooterDefault />
        </div>
    );
};

export default LayoutShop;
