import React from 'react';
import Head from 'next/head';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import NavigationList from '~/components/shared/navigation/NavigationList';
import Newletters from '~/components/partials/commons/Newletters';
import FooterDefault from '~/components/shared/footers/FooterDefault';

import HeaderMobile from '~/components/shared/headers/HeaderMobile';

const LayoutPost = ({ children, breadcrumb, title = 'Post' }) => {
    return (
        <div className="layout--post">
          {/*  <HeaderDefault />
            <HeaderMobile />
            <NavigationList />*/}
            {children}
            {/*<Newletters />
            <FooterDefault />*/}
        </div>
    );
};

export default LayoutPost;
