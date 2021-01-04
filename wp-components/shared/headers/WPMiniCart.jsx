import React, { Component, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Link from 'next/link';
import { getCart, removeItem } from '~/store/cart/action';
import WPProductOnCart from '~/wp-components/elements/products/WPProductOnCart';

class WPMiniCart extends Component{
    constructor() {
        super();
    }
    handleRemoveCartItem (product){
        this.props.dispatch(removeItem(product));
    };

    componentDidMount() {
        this.props.dispatch(getCart());
    }

    render() {
        const { amount, cartTotal, cartItems } = this.props;
        // views
        let cartItemsView;
        if (cartItems && cartItems.length > 0) {
            const productItems = cartItems.map((item) => {

                return (
                    <WPProductOnCart product={item} key={item.id}/>
                );
            });
            cartItemsView = (
                <div className="ps-cart__content">
                    <div className="ps-cart__items">{productItems}</div>
                    <div className="ps-cart__footer">
                        <h3>
                            Sub Total:
                            <strong>${amount ? amount : 0}</strong>
                        </h3>
                        <figure>
                            <Link href="/account/shopping-cart">
                                <a className="ps-btn">View Cart</a>
                            </Link>
                            <Link href="/account/checkout">
                                <a className="ps-btn">Checkout</a>
                            </Link>
                        </figure>
                    </div>
                </div>
            );
        } else {
            cartItemsView = (
                <div className="ps-cart__content">
                    <div className="ps-cart__items">
                        <span>No products in cart</span>
                    </div>
                </div>
            );
        }

        return (
            <div className="ps-cart--mini">
                <a className="header__extra" href="#">
                    <i className="icon-bag2"></i>
                    <span>
                    <i>{cartTotal ? cartTotal : 0}</i>
                </span>
                </a>
                {cartItemsView}
            </div>
        );
    }
};

export default connect((state) => state.cart)(WPMiniCart);
