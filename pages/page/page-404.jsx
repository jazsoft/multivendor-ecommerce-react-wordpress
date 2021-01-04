import React from 'react';
import Link from 'next/link';
import WPLayout from '~/wp-components/layouts/WPLayout';

const Page404 = () => {
    return (
        <WPLayout title="Page not found.">
            <div className="ps-page--404">
                <div className="container">
                    <div className="ps-section__content">
                        <figure>
                            <img src="/static/img/404.jpg" alt="" />
                            <h3>Ohh! Page not found</h3>
                            <p>
                                It seems we can't find what you're looking for.
                                Perhaps searching can help or go back to
                                <Link href="/">
                                    <a> Homepage</a>
                                </Link>
                            </p>
                        </figure>
                    </div>
                </div>
            </div>
        </WPLayout>
    );
};

export default Page404;
