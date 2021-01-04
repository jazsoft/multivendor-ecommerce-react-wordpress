import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Router, { useRouter } from 'next/router';
import BreadCrumb from '../../components/elements/BreadCrumb';
import WPProductDetail from '~/wp-components/elements/products/WPProductDetail';
import WPProductRepository from '~/repositories/WP/WPProductRepository';
import WPHeaderProduct from '~/wp-components/shared/headers/WPHeaderProduct';
import WPRelatedProducts from '~/wp-components/product/WPRelatedProducts';
import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
import WPWidgetProductsSameBrand from '~/wp-components/product/WPWidgetProductsSameBrand';
import WPProductWidgets from '~/wp-components/product/WPProductWidgets';
import WPLayoutProductDetail from '~/wp-components/layouts/WPLayoutProductDetail';
import WPHeaderDefault from '~/wp-components/shared/headers/WPHeaderDefault';

const WPProductDetailPage = ({ query }) => {
    const router = useRouter();
    const [product, setProduct] = useState(null);
    const [productVariations, setProductVariations] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedProducts, setRelatedProducts] = useState(null);

    async function getProduct(productID) {
        const WPProduct = await WPProductRepository.getProductByID(productID);
        if (WPProduct) {
            if (WPProduct.related_ids) {
                setRelatedProducts(WPProduct.related_ids);
            }
            setProduct(WPProduct);
            if (WPProduct.variations.length > 0) {
                const WPPRroductVariations = await WPProductRepository.getProductVariantsByID(
                    productID
                );
                if (WPPRroductVariations) {
                    setProductVariations(WPPRroductVariations);
                }
            }
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        } else {
            await router.push('/page/page-404', '/404');
        }
        return WPProduct;
    }

    async function getProductOnChangeURL(url) {
        const nextPid = url.split('/').pop();
        if (nextPid !== '' && isNaN(parseInt(nextPid)) === false) {
            setLoading(true);
            await getProduct(nextPid);
        }
    }

    useEffect(() => {
        const { pid } = query;
        if (isNaN(pid)) {
            Router.push('/page/page-404');
        }

        if (query) {
            const collectionsParams = [
                'customer_bought',
                'shop-recommend-items',
                'widget_same_brand',
            ];
            getProduct(pid);
        }

        router.events.on('routeChangeStart', getProductOnChangeURL);

        return () => {
            router.events.off('routeChangeStart', getProductOnChangeURL);
        };
    }, []);

    // View area
    let productView, headerView;
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: product ? product.name : 'loading...',
        },
    ];
    if (loading || product === null) {
        headerView = <WPHeaderDefault />;
        productView = <SkeletonProductDetail />;
    } else {
        headerView = <WPHeaderProduct product={product} />;
        productView = (
            <WPProductDetail
                product={product}
                variations={productVariations && productVariations}
            />
        );
    }

    return (
        <WPLayoutProductDetail title={product ? product.name : 'Loading...'}>
            {headerView}
            <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
            <div className="ps-page--product">
                <div className="ps-container">
                    <div className="ps-page__container">
                        <div className="ps-page__left">{productView}</div>
                        <div className="ps-page__right">
                            <WPProductWidgets>
                                <WPWidgetProductsSameBrand
                                    products={relatedProducts}
                                    isVariant={true}
                                    product
                                />
                            </WPProductWidgets>
                        </div>
                    </div>
                    <WPRelatedProducts products={relatedProducts} />
                </div>
            </div>
        </WPLayoutProductDetail>
    );
};

WPProductDetailPage.getInitialProps = async ({ query }) => {
    return { query: query };
};

export default connect()(WPProductDetailPage);
