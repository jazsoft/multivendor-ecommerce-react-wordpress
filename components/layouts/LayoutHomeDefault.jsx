import React from 'react';
import Head from 'next/head';
import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';
import SwicherDemo from '~/components/shared/switcher-demo/SwitcherDemo';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import HeaderMobile from '~/components/shared/headers/HeaderMobile';
import NavigationList from '~/components/shared/navigation/NavigationList';
import SubscribePopup from '~/components/shared/SubscribePopup';

const LayoutHomeDefault = ({ children, title = 'Homepage' }) => {
    return (
        <div className="__site-layout">
            <Head>
                <title>Martfury - {title}</title>
            </Head>
            {/*<HeaderDefault />
            <HeaderMobile />
            <NavigationList />*/}
            {/* <SubscribePopup active={subscribe} />*/}
            <main id="homepage-1">{children}</main>
            <FooterFullwidth />
            {/*<SwicherDemo />*/}
        </div>
    );
};

export default LayoutHomeDefault;
