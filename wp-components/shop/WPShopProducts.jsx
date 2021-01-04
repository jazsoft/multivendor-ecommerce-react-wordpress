import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Pagination } from 'antd';
import WPProduct from '~/wp-components/elements/products/WPProduct';
import WPProductWide from '~/wp-components/elements/products/WPProductWide';
import { WPGetProducts } from '~/store/wp/action';
import { generateTempArray } from '~/utilities/common-helpers';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';

const WPShopProducts = (props) => {
    const { WPProducts, WPLoading, sidebar } = props;
    const dispatch = useDispatch();
    const [listView, setListView] = useState(true);
    const [loading, setLoading] = useState(true);

    function handleChangeViewMode(event) {
        event.preventDefault();
        setListView(!listView);
    }

    function handlePagination(page, pageSize) {
        const params = {
            page: page,
            per_page: pageSize,
        };
        setLoading(true);
        dispatch(WPGetProducts(params));
        setTimeout(
            function () {
                setLoading(false);
            }.bind(this),
            500
        );
    }

    useEffect(() => {
        if (WPProducts) {
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                200
            );
        }
    }, []);

    let producItemView, sectionPaginationView, countProductsView;

    if (!WPLoading) {
        if (WPProducts && WPProducts.items) {
            countProductsView = (
                <p>
                    <strong>{WPProducts.totalItems}</strong> Product(s) found.
                </p>
            );
            if (listView === true) {
                const productItems = WPProducts.items.map((item) => (
                    <div
                        className={`${
                            !sidebar ? 'col-xl-2' : 'col-xl-3'
                        } col-lg-4 col-md-4 col-sm-6 col-6`}
                        key={item.id}>
                        <WPProduct product={item} />
                    </div>
                ));
                producItemView = <div className="row">{productItems}</div>;
            } else {
                const productItems = WPProducts.items.map((item) => (
                    <WPProductWide product={item} key={item.id} />
                ));
                producItemView = <div className="row">{productItems}</div>;
            }
            if (WPProducts.totalPages > 1) {
                sectionPaginationView = (
                    <div className="ps-shopping__footer text-center pt-40">
                        <Pagination
                            total={WPProducts && WPProducts.totalItems}
                            pageSize={12}
                            responsive={true}
                            defaultCurrent={1}
                            onChange={handlePagination}
                        />
                    </div>
                );
            }
        } else {
            countProductsView = (
                <p>
                    <strong>0</strong> Product found.
                </p>
            );
            producItemView = (
                <div className="ps-not-found text-center pt-100 pb-100">
                    <img src="static/img/404.png" className="mb-20"/>
                    <h3>No Product Found.</h3>
                </div>
            );
        }
    } else {
        const skeletonItems = generateTempArray(12).map((item) => (
            <div
                className={`${
                    !sidebar ? 'col-xl-2' : 'col-xl-3'
                } col-lg-4 col-md-4 col-sm-6 col-6`}
                key={item}>
                <SkeletonProduct />
            </div>
        ));
        countProductsView = <p>Loading...</p>;
        producItemView = <div className="row">{skeletonItems}</div>;
    }

    return (
        <div className="ps-shopping">
            <h1>{WPLoading}</h1>
            <div className="ps-shopping__header">
                {countProductsView}
                <div className="ps-shopping__actions">
                    <select className="ps-select form-control">
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
            <div className="ps-shopping__content">{producItemView}</div>
            {sectionPaginationView}
        </div>
    );
};

export default connect((state) => state.wp)(WPShopProducts);
