import React from 'react';
import Slider from 'react-slick';
import { carouselFullwidth } from '~/utilities/carousel-helpers';
import WPProductSelf from '~/wp-components/elements/products/WPProductSelf';

const WPRelatedProducts = ({ products }) => {
    let productItems;
    if (products) {
        productItems = products.map((item) => (
            <div className="slide-item" key={item}>
                <WPProductSelf productID={item} />
            </div>
        ));
    }

    return (
        <div className={`ps-section--default ps-related-products `}>
            <div className="ps-section__header">
                <h3>Related products</h3>
            </div>
            <div className="ps-section__content">
                <Slider
                    {...carouselFullwidth}
                    infinite={products && products.length < 7 ? false : true}
                    className="ps-carousel">
                    {productItems}
                </Slider>
            </div>
        </div>
    );
};

export default WPRelatedProducts;
