import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import LazyLoad from 'react-lazyload';
import Link from 'next/link';
import { Modal } from 'antd';
import Rating from '../../../components/elements/Rating';
import { addItem } from '~/store/cart/action';
import { addItemToCompare } from '~/store/compare/action';
import { addItemToWishlist } from '~/store/wishlist/action';
import WPModuleProductQuickview from '~/wp-components/elements/products/modules/WPModuleProductQuickview';
import {
    WPProductBadgeView,
    WPProductPriceView,
    WPProductThumbnailView,
} from '~/utilities/WPHelpers';

const WPProduct = ({ product }) => {
    const dispatch = useDispatch();
    const [isQuickView, setIsQuickView] = useState(false);

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        dispatch(addItem(product));
    };

    const handleAddItemToCompare = (e) => {
        e.preventDefault();
        dispatch(addItemToCompare(product));
    };

    const handleAddItemToWishlist = (e) => {
        e.preventDefault();
        dispatch(addItemToWishlist(product));
    };

    const handleShowQuickView = (e) => {
        e.preventDefault();
        setIsQuickView(true);
    };

    const handleHideQuickView = (e) => {
        e.preventDefault();
        setIsQuickView(false);
    };

    // Views
    const priceView = WPProductPriceView(product);
    const thumbnailImage = WPProductThumbnailView(product);
    const badgeView = WPProductBadgeView(product);

    return (
        <div className="ps-product">
            <div className="ps-product__thumbnail">
                <Link href="/product/[pid]" as={`/product/${product.id}`}>
                    <a>
                        <LazyLoad>{thumbnailImage}</LazyLoad>
                    </a>
                </Link>
                {badgeView}
                <ul className="ps-product__actions">
                    <li>
                        <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add To Cart"
                            onClick={handleAddItemToCart}>
                            <i className="icon-bag2"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Quick View"
                            onClick={handleShowQuickView}>
                            <i className="icon-eye"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to wishlist"
                            onClick={handleAddItemToWishlist}>
                            <i className="icon-heart"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Compare"
                            onClick={handleAddItemToCompare}>
                            <i className="icon-chart-bars"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="ps-product__container">
                <Link href="/shop">
                    <a className="ps-product__vendor">
                        {product.store && product.store.name}
                    </a>
                </Link>
                <div className="ps-product__content">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a className="ps-product__title">{product.name}</a>
                    </Link>
                    <div className="ps-product__rating">
                        <Rating />
                        <span>{product.review_count}</span>
                    </div>
                    {priceView}
                </div>
                <div className="ps-product__content hover">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a className="ps-product__title">{product.name}</a>
                    </Link>
                    {priceView}
                </div>
            </div>
            <Modal
                centered
                footer={null}
                width={1024}
                onCancel={(e) => handleHideQuickView(e)}
                visible={isQuickView}
                closeIcon={<i className="icon icon-cross2"></i>}>
                <WPModuleProductQuickview productID={product.id} />
            </Modal>
        </div>
    );
};

export default connect()(WPProduct);
