import React, { useEffect, useState } from 'react';
import WPProductRepository from '~/repositories/WP/WPProductRepository';
import { serializeQuery } from '~/repositories/Repository';
import Link from 'next/link';
import Spiner from '~/components/elements/common/Spiner';
import SkeletonWidgetBrands from '~/components/elements/skeletons/SkeletonWidgetBrands';

const WPWidgetCategories = ({ activeID }) => {
    const [loading, setLoading] = useState(true);
    const [categoryItems, setCategoryItems] = useState(null);
    console.log(activeID);
    async function getCategoryItems() {
        const queries = {
            pages: 1,
            per_page: 99,
        };
        const categories = await WPProductRepository.getProductCategories(
            queries
        );
        if (categories) {
            setTimeout(function () {
                setLoading(false);
            }, 500);
            setCategoryItems(categories.items);
        }
        return categories;
    }

    useEffect(() => {
        getCategoryItems();
    }, []);

    let categoryItemsView;
    if (categoryItems && categoryItems.length > 0 && !loading) {
        const items = categoryItems.map((item) => (
            <li key={item.id}>
                <Link href={`/shop?category=${item.id}`}>
                    <a
                        className={
                             activeID === item.id.toString()
                                ? 'active'
                                : ''
                        }
                        dangerouslySetInnerHTML={{
                            __html: `${item.name}`,
                        }}></a>
                </Link>
            </li>
        ));
        categoryItemsView = (
            <ul className="ps-list--categories">
                <li>
                    <Link href="/shop">
                        <a className={activeID === undefined ? 'active' : ''}>
                            All
                        </a>
                    </Link>
                </li>
                {items}
            </ul>
        );
    } else {
        categoryItemsView = <SkeletonWidgetBrands />;
    }

    return (
        <aside className="widget widget_shop">
            <h4 className="widget-title">Categories</h4>
            {categoryItemsView}
        </aside>
    );
};

export default WPWidgetCategories;
