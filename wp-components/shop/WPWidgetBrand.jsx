import React, { useEffect, useState } from 'react';
import WPProductRepository from '~/repositories/WP/WPProductRepository';
import SkeletonWidgetBrands from '~/components/elements/skeletons/SkeletonWidgetBrands';
import { Checkbox } from 'antd';
import { connect, useDispatch } from 'react-redux';
import { WPGetProducts } from '~/store/wp/action';
import { useRouter } from 'next/router';

const WPWidgetBrand = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [brandItems, setBrandItems] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);

    async function getBrands() {
        const queries = {
            pages: 1,
            per_page: 9999,
        };

        const brands = await WPProductRepository.getBrands(queries);
        if (brands) {
            setTimeout(function () {
                setLoading(false);
            }, 250);
            setBrandItems(brands);
        }
        return brands;
    }

    const handleFilterByBrand = (e, id) => {
        if (selectedBrand === id) {
            setSelectedBrand(null);
            const params = {
                page: 1,
                per_page: 12,
            };
            dispatch(WPGetProducts(params));
        } else {
            setSelectedBrand(id);
            const params = {
                page: 1,
                per_page: 12,
                attribute: 'pa_brand',
                attribute_term: id,
            };
            dispatch(WPGetProducts(params));
        }
    };

    useEffect(() => {
        getBrands();
    }, []);

    // Views
    let brandItemsView;

    if (!loading) {
        brandItemsView = <SkeletonWidgetBrands />;
        if (brandItems) {
            brandItemsView = brandItems.map((item) => (
                <Checkbox
                    checked={
                        selectedBrand && selectedBrand === item.id
                            ? true
                            : false
                    }
                    key={item.id}
                    onChange={(e) => handleFilterByBrand(e, item.id)}>
                    {item.name}
                </Checkbox>
            ));
        } else {
            brandItemsView = <p>No brand found.</p>;
        }
    } else {
        brandItemsView = <SkeletonWidgetBrands />;
    }

    return (
        <aside className="widget widget_shop">
            {/* <h4 className="widget-title">By Brands</h4>*/}
            <div className="widget__conent">{brandItemsView}</div>
        </aside>
    );
};

export default connect()(WPWidgetBrand);
