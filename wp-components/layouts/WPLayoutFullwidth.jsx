import React from 'react';
import Head from 'next/head';
import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';
import WPHeaderDefault from '~/wp-components/shared/headers/WPHeaderDefault';
import WPHeaderMobile from '~/wp-components/shared/mobile/WPHeaderMobile';
import WPNavigationBottom from '~/wp-components/shared/mobile/WPNavigationBottom';
import Newsletters from '~/components/partials/commons/Newletters';

const WPLayoutFullwidth = ({ children, title }) => {
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
            <WPHeaderDefault />
            <WPHeaderMobile />
            <WPNavigationBottom />
            {children}
            <Newsletters />
            <FooterFullwidth />
            {/*<SubscribePopup active={subscribe} />*/}
        </div>
    );
};

export default WPLayoutFullwidth;
