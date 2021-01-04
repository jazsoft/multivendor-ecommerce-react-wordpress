import React from 'react';
import Link from 'next/link';

const WPProductWidgets  = ({children}) => {
    return (
        <section>
            <aside className="widget widget_product widget_features">
                <p>
                    <i className="icon-network"></i> Shipping worldwide
                </p>
                <p>
                    <i className="icon-3d-rotate"></i> Free 7-day return if
                    eligible, so easy
                </p>
                <p>
                    <i className="icon-receipt"></i> Supplier give bills for this
                    product.
                </p>
                <p>
                    <i className="icon-credit-card"></i> Pay online or when
                    receiving goods
                </p>
            </aside>
            <aside className="widget widget_sell-on-site">
                <p>
                    <i className="icon-store"></i> Sell on Martfury?
                    <Link href="/account/register">
                        <a> Register Now !</a>
                    </Link>
                </p>
            </aside>
            <aside className="widget widget_ads">
                <Link href="/shop">
                    <a>
                        <img src="/static/img/ads/product-ads.png" alt="martfury" />
                    </a>
                </Link>
            </aside>
            {children}
        </section>
    );
}

export default WPProductWidgets;
