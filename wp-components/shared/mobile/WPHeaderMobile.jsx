import React from 'react';
import Link from 'next/link';
import CurrencyDropdown from '~/components/shared/headers/modules/CurrencyDropdown';
import LanguageSwicher from '~/components/shared/headers/modules/LanguageSwicher';
import MobileHeaderActions from '~/components/shared/headers/modules/MobileHeaderActions';
import WPMobileHeaderActions from '~/wp-components/shared/mobile/WPMobileHeaderActions';

const WPHeaderMobile = () => {
    return (
        <header className="header header--mobile">
            <div className="header__top">
                <div className="header__left">
                    <p>Welcome to Martfury Online Shopping Store !</p>
                </div>
                <div className="header__right">
                    <ul className="navigation__extra">
                        <li>
                            <Link href="/vendor/become-a-vendor">
                                <a>Sell on Martfury</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/account/order-tracking">
                                <a>Tract your order</a>
                            </Link>
                        </li>
                        <li>
                            <CurrencyDropdown />
                        </li>
                        <li>
                            <LanguageSwicher />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navigation--mobile">
                <div className="navigation__left">
                    <Link href="/">
                        <a className="ps-logo">
                            <img
                                src="/static/img/logo_light.png"
                                alt="martfury"
                            />
                        </a>
                    </Link>
                </div>
                <WPMobileHeaderActions />
            </div>
        </header>
    );
};

export default WPHeaderMobile;
