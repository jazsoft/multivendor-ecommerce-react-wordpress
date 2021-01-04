import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { addItem } from '~/store/cart/action';
import { stickyHeader } from '~/utilities/common-helpers';
import NavigationDefault from '~/components/shared/navigation/NavigationDefault';
import { formatCurrency } from '~/utilities/product-helper';
import MenuCategories from '~/components/shared/headers/modules/MenuCategories';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import HeaderActions from '~/components/shared/headers/modules/HeaderActions';
import WPNavigationDefault from '~/wp-components/shared/navigations/WPNavigationDefault';
import WPHeaderActions from '~/wp-components/shared/headers/WPHeaderActions';
import WPSearchHeader from '~/wp-components/shared/headers/WPSearchHeader';

const WPHeaderProduct = ({ product }) => {
    const dispatch = useDispatch();
    let thumbnailImageView, productNameView;
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        dispatch(addItem(product));
    };
    // image thumbnail
    if (product.images && product.images.length > 0) {
        thumbnailImageView = (
            <img src={product.images[0].src} alt={product.name} />
        );
    } else {
        thumbnailImageView = (
            <img
                src="/static/img/undefined-product-thumbnail.jpg"
                alt={product.name}
            />
        );
    }

    if (product.on_sale === true) {
        productNameView = (
            <span className="ps-product__price">
                <span>
                    <span>$</span>
                    {formatCurrency(product.regular_price)}
                </span>
                <del className="ml-2">
                    <span>&</span>
                    {formatCurrency(product.sale_price)}
                </del>
            </span>
        );
    } else {
        productNameView = (
            <span className="ps-product__price">
                <span>
                    <span>$</span>
                    {formatCurrency(product.regular_price)}
                </span>
            </span>
        );
    }

    return (
        <header
            className="header header--1 header--product"
            data-sticky="true"
            id="headerSticky">
            <div className="header__top">
                <div className="ps-container">
                    <div className="header__left">
                        <Link href="/">
                            <a className="ps-logo">
                                <img
                                    src="/static/img/logo_light.png"
                                    alt="martfury"
                                />
                            </a>
                        </Link>
                        <div className="menu--product-categories">
                            <div className="menu__toggle">
                                <i className="icon-menu"></i>
                                <span> Shop by Department</span>
                            </div>
                            <div className="menu__content">
                                <MenuCategories />
                            </div>
                        </div>
                    </div>
                    <div className="header__center">
                        <WPSearchHeader />
                    </div>
                    <div className="header__right">
                        <WPHeaderActions />
                    </div>
                </div>
            </div>
            <WPNavigationDefault />
            <nav className="navigation navigation--product">
                <div className="ps-container">
                    <article className="ps-product--header-sticky">
                        <div className="ps-product__thumbnail">
                            {thumbnailImageView}
                        </div>
                        <div className="ps-product__wrapper">
                            <div className="ps-product__content">
                                <Link
                                    href="/product/[pid]"
                                    as={`/product/${product.id}`}>
                                    <a className="ps-product__title">
                                        {product.name}
                                    </a>
                                </Link>
                            </div>
                            <div className="ps-product__shopping">
                                {productNameView}
                                <a
                                    className="ps-btn"
                                    href="#"
                                    onClick={(e) => handleAddItemToCart(e)}>
                                    Add to Cart
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </nav>
        </header>
    );
};
export default WPHeaderProduct;
