import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import BreadCrumb from '~/components/elements/BreadCrumb';
import { getProductsByCategory } from '~/store/product/action';
import { WPGetProducts } from '~/store/wp/action';

import WPWidgetCategories from '~/wp-components/shop/WPWidgetCategories';
import WPWidgetBrand from '~/wp-components/shop/WPWidgetBrand';
import WPWidgetFilterByPrices from '~/wp-components/shop/WPWidgetFilterByPrices';
import WPShopProducts from '~/wp-components/shop/WPShopProducts';
import WPProductRepository from '~/repositories/WP/WPProductRepository';

import WPLayout from '~/wp-components/layouts/WPLayout';
import ShopSidebarBanner from '~/components/partials/shop/ShopSidebarBanner';

const WPShopSidebarPage = ({ query }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [categoryName, setCategoryName] = useState(null);

    async function getCategory(id) {
        const category = await WPProductRepository.getCategoryByID(id);
        if (category) {
            setCategoryName(category.name);
            return category;
        } else {
            return null;
        }
    }

    async function getProductOnChangeURL(url) {
        const nextPid = url.split('category=').pop();
        if (nextPid !== '' && isNaN(parseInt(nextPid)) === false) {
            const queries = {
                page: 1,
                per_page: 18,
                category: nextPid,
            };
            dispatch(WPGetProducts(queries));
            getCategory(nextPid);
        } else {
            const queries = {
                page: 1,
                per_page: 18,
            };
            dispatch(WPGetProducts(queries));
        }
    }

    useEffect(() => {
        if (query) {
            const queries = {
                page: 1,
                per_page: 18,
            };
            dispatch(WPGetProducts(queries));

            if (query.category) {
                dispatch(getProductsByCategory(query.category));
                getCategory(query.category);
            } else {
            }
        }

        router.events.on('routeChangeStart', getProductOnChangeURL);

        return () => {
            router.events.off('routeChangeStart', getProductOnChangeURL);
        };
    }, [dispatch]);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: categoryName ? (
                <span
                    dangerouslySetInnerHTML={{
                        __html: `${categoryName}`,
                    }}
                />
            ) : (
                'Shop'
            ),
        },
    ];

    return (
        <WPLayout title="Shop Sidebar">
            <div className="ps-page--shop">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="container">
                    <div className="ps-layout--shop" id="shop-sidebar">
                        <div className="ps-layout__left">
                            <WPWidgetCategories
                                activeID={query && query.category}
                            />
                            <WPWidgetBrand />
                            <WPWidgetFilterByPrices />
                        </div>
                        <div className="ps-layout__right">
                            <div className="ps-page__header">
                                <h1>Shop Sidebar</h1>
                                <ShopSidebarBanner />
                            </div>
                            <WPShopProducts sidebar={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </WPLayout>
    );
};

WPShopSidebarPage.getInitialProps = async ({ query }) => {
    return { query: query };
};

export default connect()(WPShopSidebarPage);
