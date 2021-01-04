import React, { useState, useEffect, useRef } from 'react';
import Swiper from 'react-id-swiper';

const WPModuleProductDetailThumbnailSwiper = ({ product }) => {
    const gallerySwiperRef = useRef(null);
    const thumbnailSwiperRef = useRef(null);

    const gallerySwiperParams = {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    };
    const thumbnailSwiperParams = {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0,
        slideToClickedSlide: true,
    };

    useEffect(() => {
        const gallerySwiper = gallerySwiperRef.current.swiper;
        const thumbnailSwiper = thumbnailSwiperRef.current.swiper;
        if (gallerySwiper.controller && thumbnailSwiper.controller
        ) {
            gallerySwiper.controller.control = thumbnailSwiper;
            thumbnailSwiper.controller.control = gallerySwiper;
        }
    }, []);

    // Views
    let productGalleryView, productVariantsView;
    if (product) {
        const slideItems = product.images.map((item) => (
            <div key={item.id}>
                <a href="#">
                    <img src={item.src} alt={product.name} />
                </a>
            </div>
        ));
        productGalleryView = (
            <Swiper {...gallerySwiperParams} ref={gallerySwiperRef}>
                {slideItems}
            </Swiper>
        );

        productVariantsView = (
            <Swiper {...thumbnailSwiperParams} ref={thumbnailSwiperRef}>{slideItems}</Swiper>
        );
    }

    return (
        <div className="ps-product__thumbnail" data-vertical="true">
            <figure>
                <div className="ps-wrapper">{productGalleryView}</div>
            </figure>
            <div className="ps-product__variants">{productVariantsView}</div>
        </div>
    );
};

export default WPModuleProductDetailThumbnailSwiper;
