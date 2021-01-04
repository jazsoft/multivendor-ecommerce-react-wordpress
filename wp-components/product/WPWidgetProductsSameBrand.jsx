import React from 'react';
import WPProductSelf from '~/wp-components/elements/products/WPProductSelf';

const WPWidgetProductsSameBrand = ({ products }) => {
    let productItemsView;
    if (products) {
        productItemsView = products.map((item, index) => {
            if (index < 2) {
                return <WPProductSelf productID={item} key={index} />;
            }
        });
    } else {
        productItemsView = <p>No product found.</p>;
    }
    return (
        <aside className="widget widget_same-brand">
            <h3>Same Brand</h3>
            <div className="widget__content">{productItemsView}</div>
        </aside>
    );
};

export default WPWidgetProductsSameBrand;
