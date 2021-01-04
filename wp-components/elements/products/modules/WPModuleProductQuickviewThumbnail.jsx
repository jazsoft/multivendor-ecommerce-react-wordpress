import React, { Component } from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import ThumbnailImage from '~/components/elements/detail/modules/elements/ThumbnailImage';
import LazyLoad from 'react-lazyload';

const WPModuleProductQuickviewThumbnail = ({product}) => {
    /*constructor(props) {
        super(props);
        this.state = {
            galleryCarousel: null,
            variantCarousel: null,
        };
    }

    componentDidMount() {
        this.setState({
            galleryCarousel: this.slider1,
            variantCarousel: this.slider2,
        });
    }*/

    const gallerySetting = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    let imagesView;
    if (product && product.images.length > 0) {
        const imageSlides = product.images.map((item) => (
            <div className="item" key={item.id}>
                <LazyLoad><img src={item.src} alt={product.name} /></LazyLoad>
            </div>
        ));
        imagesView = <Slider
            {...gallerySetting}
            className="ps-product__gallery ps-carousel inside">
            {imageSlides}
        </Slider>
    }
    else {
        imagesView = <img
            src="/static/img/undefined-product-thumbnail.jpg"
            alt="undefined"
        />
    }

    return (
        <div className="ps-product__thumbnail" data-vertical="false">
            <figure>
                <div className="ps-wrapper">
                    {imagesView}
                </div>
            </figure>
        </div>
    );
};

export default WPModuleProductQuickviewThumbnail;
