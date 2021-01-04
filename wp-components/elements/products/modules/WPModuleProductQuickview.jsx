import React, { useEffect, useState } from 'react';
import InformationQuickView from '~/components/elements/detail/modules/information/InformationQuickView';
import WPModuleProductQuickviewThumbnail from '~/wp-components/elements/products/modules/WPModuleProductQuickviewThumbnail';
import WPModuleProductQuickviewInformation from '~/wp-components/elements/products/modules/WPModuleProductQuickviewInformation';
import WPProductRepository from '~/repositories/WP/WPProductRepository';
import { Spin } from 'antd';
import Spiner from '~/components/elements/common/Spiner';
import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';

const WPModuleProductQuickview = ({ productID }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getInitProducts() {
        const result = await WPProductRepository.getProductByID(productID);
        if (result) {
            setTimeout(function () {
                setLoading(false);
            }, 500);
            setProduct(result);
        }
    }

    useEffect(() => {
        getInitProducts();
    }, []);

    let productInformationView;
    if (product && loading === false) {
        productInformationView = (
            <div className="ps-product__header">
                <WPModuleProductQuickviewThumbnail product={product} />
                <WPModuleProductQuickviewInformation product={product} />
            </div>
        );
    } else {
        productInformationView = <SkeletonProductDetail />;
    }

    return (
        <div className="ps-product--detail ps-product--quickview">
            {productInformationView}
        </div>
    );
};

export default WPModuleProductQuickview;
