import React from 'react';
import Rating from '~/components/elements/Rating';
import Link from 'next/link';

const WPStore = ({ store }) => {
    return (
        <article className="ps-block--store-2">
            <div
                className="ps-block__content bg--cover"
                style={{
                    background: `url('/static/img/vendor/store/default-store-banner.png')`,
                }}>
                <figure>
                    <h4>{store.store_name}</h4>
                    <div className="ps-block__rating">
                        <Rating />
                    </div>
                    <p>
                        {store.address.street_1} {store.address.city}{' '}
                        {store.address.state} US, {store.address.zip}
                    </p>
                    <p>
                        <i className="icon-telephone"></i>{' '}
                        {store.phone && store.phone}
                    </p>
                </figure>
            </div>
            <div className="ps-block__author">
                <a className="ps-block__user" href="#">
                    <img src={store.gravatar} alt="martfury" />
                </a>
                <Link href="/store/[pid]" as={`/store/${store.id}`}>
                    <a className="ps-btn"> Visit Store</a>
                </Link>
            </div>
        </article>
    );
};

export default WPStore;
