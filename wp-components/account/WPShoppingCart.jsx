import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getCart,
    increaseItemQty,
    decreaseItemQty,
    removeItem,
} from '~/store/cart/action';

import Link from 'next/link';
import WPProductCart from '~/wp-components/elements/products/WPProductCart';

class WPShoppingCart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCart());
    }

    handleIncreaseItemQty(product) {
        this.props.dispatch(increaseItemQty(product));
    }

    handleDecreaseItemQty(product) {
        this.props.dispatch(decreaseItemQty(product));
    }

    handleRemoveCartItem = (product) => {
        this.props.dispatch(removeItem(product));
    };

    render() {
        const { amount, cartItems } = this.props;
        let currentCartItems = [];
        if (cartItems && cartItems.length > 0) {
            currentCartItems = cartItems;
        }

        // Views
        let tableContentView, subtotalView;
        tableContentView = currentCartItems.map((product) => (
            <tr key={product.id}>
                <td>
                    <WPProductCart product={product} />
                </td>
                <td className="price">${product.price}</td>
                <td>
                    <div className="form-group--number">
                        <button
                            className="up"
                            onClick={this.handleIncreaseItemQty.bind(
                                this,
                                product
                            )}>
                            +
                        </button>
                        <button
                            className="down"
                            onClick={this.handleDecreaseItemQty.bind(
                                this,
                                product
                            )}>
                            -
                        </button>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="1"
                            value={product.quantity}
                            readOnly={true}
                        />
                    </div>
                </td>
                <td>${product.quantity * product.price}</td>
                <td>
                    <a
                        href="#"
                        onClick={this.handleRemoveCartItem.bind(this, product)}>
                        <i className="icon-cross"></i>
                    </a>
                </td>
            </tr>
        ));
        if (cartItems && cartItems.length > 0) {
            subtotalView = cartItems.map((product, index) => {
                return (
                    <li key={product.id}>
                        <span className="ps-block__estimate">
                            <Link
                                href="/product/[pid]"
                                as={`/product/${product.id}`}>
                                <a className="ps-product__title">
                                    {product.name}
                                    <br /> x {product.quantity}
                                </a>
                            </Link>
                        </span>
                    </li>
                );
            });
        }

        return (
            <div className="ps-section--shopping ps-shopping-cart">
                <div className="container">
                    <div className="ps-section__header">
                        <h1>Shopping Cart</h1>
                    </div>
                    <div className="ps-section__content">
                        <div className="table-responsive">
                            <table className="table ps-table--shopping-cart">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>{tableContentView}</tbody>
                            </table>
                        </div>
                        <div className="ps-section__cart-actions">
                            <Link href="/shop">
                                <a>
                                    <i className="icon-arrow-left mr-2"></i>
                                    Back to Shop
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="ps-section__footer">
                        <div className="row justify-content-end">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                                <div className="ps-block--shopping-total">
                                    <div className="ps-block__header">
                                        <p>
                                            Subtotal <span> ${amount}</span>
                                        </p>
                                    </div>
                                    <div className="ps-block__content">
                                        <ul className="ps-block__product">
                                            {subtotalView}
                                        </ul>
                                        <h3>
                                            Total <span>${amount}</span>
                                        </h3>
                                    </div>
                                </div>
                                <Link href="/account/checkout">
                                    <a className="ps-btn ps-btn--fullwidth">
                                        Proceed to checkout
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.cart;
};
export default connect(mapStateToProps)(WPShoppingCart);
