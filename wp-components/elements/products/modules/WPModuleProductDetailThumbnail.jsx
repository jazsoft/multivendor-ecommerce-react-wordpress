import React, { Component } from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
class WPModuleProductDetailThumbnail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryImg: null,
            productImages: null,
            nextImg: null,
            galleryCarousel: null,
            variantCarousel: null,
            photoIndex: 0,
            isOpen: false,
        };
    }

    handleOpenLightbox = (e, imageIndex) => {
        e.preventDefault();
        this.setState({ photoIndex: imageIndex, isOpen: true });
    };

    componentDidMount() {
        this.setState({
            galleryCarousel: this.slider1,
            variantCarousel: this.slider2,
        });
    }

    render() {
        const { product, variant } = this.props;
        const { photoIndex, isOpen } = this.state;
        const variantSetting = {
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        dots: false,
                        arrows: false,
                        vertical: false,
                        infinite: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        dots: false,
                        arrows: false,
                        vertical: false,
                        infinite: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 4,
                        dots: false,
                        arrows: false,
                        vertical: false,
                        infinite: false,
                    },
                },
            ],
        };
        const gallerySetting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };

        // Views
        let slideItems,
            gallerySlideItems,
            lightboxImages = [],
            productImages;
        if (product) {

            if (variant) {
                let tempImgs = product.images;
                tempImgs[0] = variant.image;
                productImages = tempImgs;
            } else {
                productImages = product.images;
            }
            product.images.map((item) => {
                lightboxImages.push(item.src);
            });

            if (productImages) {
                slideItems = productImages.map((item) => (
                    <div className="item" key={item.id}>
                        <img src={item.src} alt={product.name} />
                    </div>
                ));

                gallerySlideItems = productImages.map((item, index) => (
                    <div className="item" key={item.id}>
                        <a
                            href="#"
                            onClick={(e) => this.handleOpenLightbox(e, index)}>
                            <img src={item.src} alt={product.name} />
                        </a>
                    </div>
                ));
            }
        }

        return (
            <div className="ps-product__thumbnail" data-vertical="true">
                <figure>
                    <div className="ps-wrapper">
                        <Slider
                            {...gallerySetting}
                            ref={(slider) => (this.slider1 = slider)}
                            asNavFor={this.state.variantCarousel}
                            className="ps-product__gallery ps-carousel inside">
                            {gallerySlideItems}
                        </Slider>
                    </div>
                </figure>
                <Slider
                    asNavFor={this.state.galleryCarousel}
                    ref={(slider) => (this.slider2 = slider)}
                    infinite={true}
                    swipeToSlide={true}
                    arrows={false}
                    vertical={true}
                    focusOnSelect={true}
                    {...variantSetting}
                    className="ps-product__variants">
                    {slideItems}
                </Slider>
                {isOpen && (
                    <Lightbox
                        mainSrc={lightboxImages[photoIndex]}
                        nextSrc={
                            lightboxImages[
                                (photoIndex + 1) % lightboxImages.length
                            ]
                        }
                        prevSrc={
                            lightboxImages[
                                (photoIndex + lightboxImages.length - 1) %
                                    lightboxImages.length
                            ]
                        }
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex:
                                    (photoIndex + lightboxImages.length - 1) %
                                    lightboxImages.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex:
                                    (photoIndex + 1) % lightboxImages.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

export default WPModuleProductDetailThumbnail;
