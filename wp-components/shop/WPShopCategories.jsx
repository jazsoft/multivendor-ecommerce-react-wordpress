import React from 'react';
import Link from 'next/link';
import { categories } from '~/public/static/data/shopCategories';

const WPShopCategories = ({ sidebar }) => {
    let categoriesView;
    const generateLinks = (links) => {
        return links.map((item) => (
            <li key={item}>
                <Link href="/shop">
                    <a>{item}</a>
                </Link>
            </li>
        ));
    };
    if (sidebar) {
        categoriesView = categories.map((category, index) => {
            if (index < 6) {
                return (
                    <div
                        className="col-md-4 col-sm-6 col-12 "
                        key={category.id}>
                        <div
                            className="ps-block--category-2"
                            data-mh="categories">
                            <div className="ps-block__thumbnail">
                                <img src={category.thumbnail} alt="martfury" />
                            </div>
                            <div className="ps-block__content">
                                <h4>{category.title}</h4>
                                <ul>{generateLinks(category.links)}</ul>
                            </div>
                        </div>
                    </div>
                );
            }
        });
    } else {
        categoriesView = categories.map((category) => {
            return (
                <div
                    className="col-lg-3 col-md-4 col-sm-6 col-12 "
                    key={category.id}>
                    <div className="ps-block--category-2" data-mh="categories">
                        <div className="ps-block__thumbnail">
                            <img src={category.thumbnail} alt="martfury" />
                        </div>
                        <div className="ps-block__content">
                            <h4>{category.title}</h4>
                            <ul>{generateLinks(category.links)}</ul>
                        </div>
                    </div>
                </div>
            );
        });
    }
    return (
        <div className="ps-shop-categories">
            <div className="row align-content-lg-stretch">{categoriesView}</div>
        </div>
    );
};

export default WPShopCategories;
