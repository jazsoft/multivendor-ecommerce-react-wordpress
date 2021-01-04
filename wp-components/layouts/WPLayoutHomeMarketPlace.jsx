import React from 'react';
import Head from 'next/head';
import WPHeaderMobile from '~/wp-components/shared/mobile/WPHeaderMobile';
import WPNavigationBottom from '~/wp-components/shared/mobile/WPNavigationBottom';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newsletters from '~/components/partials/commons/Newletters';
import WPHeaderMarketPlace from '~/wp-components/shared/headers/WPHeaderMarketPlace';

const WPLayoutHomeMarketPlace = ({ children, title }) => {
    let titleView;
    if (title !== null) {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <div className="martfury">
            <Head>
                <title>{titleView}</title>
            </Head>
            <WPHeaderMarketPlace />
            <WPHeaderMobile />
            <WPNavigationBottom />
            {/*<SubscribePopup active={subscribe} />*/}
            {children}
            <Newsletters layout="container" />
            <FooterDefault />
        </div>
    );
};

export default WPLayoutHomeMarketPlace;
