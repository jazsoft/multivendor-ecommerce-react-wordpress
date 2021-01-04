import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import AccountQuickLinks from '~/components/shared/headers/modules/AccountQuickLinks';
import WPMiniCart from '~/wp-components/shared/headers/WPMiniCart';

class WPHeaderActions2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { compare, wishlist, auth } = this.props;
        // Views
        let accountView;
        if (auth.isLoggedIn && Boolean(auth.isLoggedIn) === true) {
            accountView = <AccountQuickLinks isLoggedIn={true} />;
        } else {
            accountView = <AccountQuickLinks isLoggedIn={false} />;
        }
        return (
            <div className="header__actions">
                <Link href="/account/wishlist">
                    <a className="header__extra">
                        <i className="icon-heart"></i>
                        <span>
                            <i>{wishlist.wishlistTotal}</i>
                        </span>
                    </a>
                </Link>
                <WPMiniCart/>
                {accountView}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(WPHeaderActions2);
