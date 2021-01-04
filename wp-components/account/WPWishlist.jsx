import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '~/store/cart/action';
import { removeWishlistItem } from '~/store/wishlist/action';
import WPProductCart from '~/wp-components/elements/products/WPProductCart';
class WPWishlist extends Component {
    constructor(props) {
        super(props);
    }

    handleAddItemToCart = (e, product) => {
        this.props.dispatch(addItem(product));
    };

    handleRemoveWishListItem = (e, product) => {
        e.preventDefault();
        this.props.dispatch(removeWishlistItem(product));
    };

    render() {
        const { wishlistItems } = this.props;
        console.log(wishlistItems);
        // views
        let wishlistView;
        if (wishlistItems && wishlistItems.length > 0) {
            const items = wishlistItems.map((product) => (
                <tr key={product.id}>
                    <td>
                        <WPProductCart product={product} />
                    </td>
                    <td className="price">${product.price}</td>
                    <td>{product.store.name}</td>
                    <td>
                        <a
                            className="ps-btn ps-btn--sm mr-2"
                            href=""
                            onClick={(e) =>
                                this.handleAddItemToCart(e, product)
                            }>
                            Add to cart
                        </a>
                        <a
                            href="#"
                            onClick={(e) =>
                                this.handleRemoveWishListItem(e, product)
                            }>
                            <i className="icon-cross"></i>
                        </a>
                    </td>
                </tr>
            ));
            wishlistView = (
                <div className="table-responsive">
                    <table className="table ps-table--whishlist">
                        <thead>
                            <tr>
                                <th>Product name</th>
                                <th>Unit Price</th>
                                <th>Vendor</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>{items}</tbody>
                    </table>
                </div>
            );
        } else {
            wishlistView = (
                <div className="alert alert-danger" role="alert">
                    Wishlist is empty!
                </div>
            );
        }
        return (
            <div className="ps-section--shopping ps-whishlist">
                <div className="container">
                    <div className="ps-section__header">
                        <h1>Wishlist</h1>
                    </div>
                    <div className="ps-section__content">{wishlistView}</div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state.wishlist;
};
export default connect(mapStateToProps)(WPWishlist);
