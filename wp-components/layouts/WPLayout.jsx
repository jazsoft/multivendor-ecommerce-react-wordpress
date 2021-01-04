import React from 'react';
import Head from 'next/head';
import WPHeaderMobile from '~/wp-components/shared/mobile/WPHeaderMobile';
import WPNavigationBottom from '~/wp-components/shared/mobile/WPNavigationBottom';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newsletters from '~/components/partials/commons/Newletters';
import WPHeaderMarketPlace from '~/wp-components/shared/headers/WPHeaderMarketPlace';
import WPHeaderDefault from '~/wp-components/shared/headers/WPHeaderDefault';

const WPLayout = ({ children, title }) => {
    let titleView;
    if (title !== undefined) {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <div className="martfury">
            <Head>
                <title>{titleView}</title>
            </Head>
            <WPHeaderDefault />
            {/* <WPHeaderMarketPlace/>*/}
            <WPHeaderMobile />
            <WPNavigationBottom />
            {/*<SubscribePopup active={subscribe} />*/}
            {children}
            <Newsletters layout="container" />
            <FooterDefault />
        </div>
    );
};

export default WPLayout;
