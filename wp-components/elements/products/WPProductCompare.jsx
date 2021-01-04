import React from 'react';
import Link from 'next/link';
import { WPProductThumbnailView } from '~/utilities/WPHelpers';
const WPProductCompare = ({ product }) => {
    // Views
    const thumbnailImage = WPProductThumbnailView(product);
    return (
        <div className="ps-product--compare">
            <div className="ps-product__thumbnail">
                <Link href="/product/[pid]" as={`/product/${product.id}`}>
                    <a>{thumbnailImage}</a>
                </Link>
            </div>
            <div className="ps-product__content">
                <Link href="/product/[pid]" as={`/product/${product.id}`}>
                    <a className="ps-product__title">{product.name}</a>
                </Link>
            </div>
        </div>
    );
};

export default WPProductCompare;
