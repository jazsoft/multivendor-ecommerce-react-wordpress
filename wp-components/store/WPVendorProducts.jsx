import React, { Component, useState } from 'react';
import WPProduct from '~/wp-components/elements/products/WPProduct';
import WPProductWide from '~/wp-components/elements/products/WPProductWide';
import { Pagination } from 'antd';
import { WPGetProducts } from '~/store/wp/action';
import { useDispatch } from 'react-redux';
import WPVendorRepository from '~/repositories/WP/WPVendorRepository';
import { generateTempArray } from '~/utilities/common-helpers';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';

const WPVendorProducts = ({ products, id }) => {
    const [listView, setListView] = useState(true);
    const [loading, setLoading] = useState(false);
    const [storeProducts, setStoreProducts] = useState(products);
    const handleChangeViewMode = (event) => {
        event.preventDefault();
        setListView(!listView);
    };

    // Views
    async function handlePagination(page, pageSize) {
        console.log({ page, pageSize });
        const queries = {
            page: page,
            per_page: pageSize,
        };
        setLoading(true);
        const vendorProducts = await WPVendorRepository.getProductOfStoreByID(
            id,
            queries
        );
        if (vendorProducts) {
            setStoreProducts(vendorProducts);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    let productListView, sectionPaginationView;
    if (!loading) {
        if (listView) {
            productListView = storeProducts.items.map((item) => (
                <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={item.id}>
                    <WPProduct product={item} />
                </div>
            ));
        } else {
            productListView = storeProducts.items.map((item) => (
                <WPProductWide product={item} key={item.id} />
            ));
        }
    } else {
        productListView = generateTempArray(8).map((item) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={item}>
                <SkeletonProduct />
            </div>
        ));
    }

    if (products.totalPages > 1) {
        sectionPaginationView = (
            <div className="ps-shopping__footer text-center pt-40">
                <Pagination
                    total={products && products.totalItems}
                    pageSize={12}
                    responsive={true}
                    defaultCurrent={1}
                    onChange={handlePagination}
                />
            </div>
        );
    }

    return (
        <div className="ps-shopping vendor-shop">
            <div className="ps-shopping__header">
                <p>
                    <strong>{products.totalItems}</strong> Product(s) found.
                </p>
                <div className="ps-shopping__actions">
                    <select
                        className="form-control"
                        data-placeholder="Sort Items">
                        <option>Sort by latest</option>
                        <option>Sort by popularity</option>
                        <option>Sort by average rating</option>
                        <option>Sort by price: low to high</option>
                        <option>Sort by price: high to low</option>
                    </select>
                    <div className="ps-shopping__view">
                        <p>View</p>
                        <ul className="ps-tab-list">
                            <li className={listView ? 'active' : ''}>
                                <a href="#" onClick={handleChangeViewMode}>
                                    <i className="icon-grid"></i>
                                </a>
                            </li>
                            <li className={!listView ? 'active' : ''}>
                                <a href="#" onClick={handleChangeViewMode}>
                                    <i className="icon-list4"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="ps-shopping__content">
                <div className="row">{productListView}</div>
            </div>
            {sectionPaginationView}
        </div>
    );
};

export default WPVendorProducts;
