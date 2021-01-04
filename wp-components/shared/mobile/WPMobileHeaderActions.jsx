import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import AccountQuickLinksMobile from '~/components/shared/headers/modules/AccountQuickLinksMobile';

const WPMobileHeaderActions = (props) => {
    const { auth } = props;
    const { cartTotal } = props.cart;
    let quickLinksView;
    if (auth.isLoggedIn && Boolean(auth.isLoggedIn) === true) {
        quickLinksView = <AccountQuickLinksMobile />;
    } else {
        quickLinksView = (
            <div className="header__extra">
                <Link href="/account/login">
                    <i className="icon-user"></i>
                </Link>
            </div>
        );
    }

    return (
        <div className="navigation__right">
            <Link href="/account/shopping-cart">
                <a className="header__extra">
                    <i className="icon-bag2"></i>
                    <span>
                        <i>{cartTotal ? cartTotal : 0}</i>
                    </span>
                </a>
            </Link>
            {quickLinksView}
        </div>
    );
};

export default connect((state) => state)(WPMobileHeaderActions);
