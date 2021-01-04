import React, { Component, useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Link from 'next/link';
import { carouselFullwidth } from '~/utilities/carousel-helpers';
import WPProduct from '~/wp-components/elements/products/WPProduct';
import Spiner from '~/components/elements/common/Spiner';
import { serializeQuery, wp } from '~/repositories/Repository';
import WPModuleProductItems from '~/wp-components/homepage/modules/WPModuleProductItems';
import WPProductRepository from '~/repositories/WP/WPProductRepository';

const WPConsumerElectronic = ({ products, collectionSlug, collections }) => {
    const [productItems, setProductItems] = useState(null);
    const [currentCollection, setCurrentCollection] = useState('newArrivals');
    const [subcrible, setSubscribe] = useState(false);
    const [loading, setLoading] = useState(true);
    const sectionLinks = [
        {
            title: 'New Arrivals',
            name: 'newArrivals',
            page: 1,
        },
        {
            title: 'Best seller',
            name: 'bestSeller',
            page: 2,
        },
        {
            title: 'Most Popular',
            name: 'mostPopular',
            page: 3,
        },
    ];
    let productItemsView;

    async function handleChangeProduct(e, currentItem, page) {
        e.preventDefault();
        setLoading(true);
        const WPProducts = await WPProductRepository.getAllProducts(serializeQuery(params));
        if (WPProducts && WPProducts.length > 0) {
            setTimeout(function () {
                setLoading(false);
            }, 250);
            setProductItems(WPProducts);
            setCurrentCollection(currentItem);
        } else {
            setProductItems([]);
        }
    }

    async function getInitProducts() {
        const params = {
            pages: 1,
        };
        const WPProducts = await WPProductRepository.getAllProducts(serializeQuery(params));
        if (WPProducts) {
            setTimeout(function () {
                setLoading(false);
            }, 250);
            setProductItems(WPProducts);
        }
        return WPProducts;
    }

    useEffect(() => {
        getInitProducts();
    }, []);

    const sectionLinksView = sectionLinks.map((link) => (
        <li
            className={
                currentCollection === link.name ? 'active': ''}
            key={link.name}>
            <a
                onClick={(e) =>
                    handleChangeProduct(
                        e,
                        link.name,
                        link.page
                    )
                }>
                {link.title}
            </a>
        </li>
    ))

    if (productItems && productItems.length > 0) {
        productItemsView = (
            <WPModuleProductItems products={productItems} />
        );
    } else {
        productItemsView = <p>No product(s) found.</p>;
    }

    return (
        <div className="ps-product-list ps-garden-kitchen">
            <div className="ps-container">
                <div className="ps-section__header">
                    <h3>Consumer Electronics</h3>
                    <ul className="ps-section__links">
                        {sectionLinksView}
                        <li>
                            <Link href="/shop">
                                <a>View All</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="ps-section__content">
                    {loading === true ? <Spiner /> : productItemsView}
                </div>
            </div>
        </div>
    );
};

export default WPConsumerElectronic;
