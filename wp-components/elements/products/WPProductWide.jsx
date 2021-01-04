import React, { useState } from 'react';
import Link from 'next/link';
import { connect, useDispatch } from 'react-redux';
import { addItem } from '~/store/cart/action';
import { addItemToCompare } from '~/store/compare/action';
import { addItemToWishlist } from '~/store/wishlist/action';
import { formatCurrency } from '~/utilities/product-helper';
import {
    WPProductPriceView,
    WPProductThumbnailView,
} from '~/utilities/WPHelpers';

const WPProductWide = ({ product }) => {
    const dispatch = useDispatch();

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
    const thumbnailImage = WPProductThumbnailView(product);
    const priceView = WPProductPriceView(product);

    return (
        <div className="ps-product ps-product--wide">
            <div className="ps-product__thumbnail">
                <Link href="/product/[pid]" as={`/product/${product.id}`}>
                    <a>{thumbnailImage}</a>
                </Link>
            </div>
            <div className="ps-product__container">
                <div className="ps-product__content">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a className="ps-product__title">{product.name}</a>
                    </Link>
                    <p className="ps-product__vendor">
                        Sold by:
                        <Link href="/shop">
                            <a>Young Shop</a>
                        </Link>
                    </p>
                    <ul className="ps-product__desc">
                        <li>Unrestrained and portable active stereo speaker</li>
                        <li> Free from the confines of wires and chords</li>
                        <li> 20 hours of portable capabilities</li>
                        <li>
                            Double-ended Coil Cord with 3.5mm Stereo Plugs
                            Included
                        </li>
                        <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                    </ul>
                </div>
                <div className="ps-product__shopping">
                    {priceView}
                    <a
                        className="ps-btn"
                        href="#"
                        onClick={handleAddItemToCart}>
                        Add to cart
                    </a>
                    <ul className="ps-product__actions">
                        <li>
                            <a href="#" onClick={handleAddItemToWishlist}>
                                <i className="icon-heart"></i> Wishlist
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={handleAddItemToCompare}>
                                <i className="icon-chart-bars"></i> Compare
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return state.setting;
};
export default connect(mapStateToProps)(WPProductWide);
