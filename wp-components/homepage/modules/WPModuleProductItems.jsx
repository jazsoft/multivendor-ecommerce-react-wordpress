import React from 'react';
import { carouselFullwidth } from '~/utilities/carousel-helpers';
import WPProduct from '~/wp-components/elements/products/WPProduct';
import Slider from 'react-slick';

const WPModuleProductItems = ({ products }) => {
    return (
        <Slider
            {...carouselFullwidth}
            infinite={products.length > 7 ? true : false}
            className="ps-carousel outside">
            {products.map((product) => (
                <div className="item" key={product.id}>
                    <WPProduct product={product} />
                </div>
            ))}
        </Slider>
    );
};

export default WPModuleProductItems;
