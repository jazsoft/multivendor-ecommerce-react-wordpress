import React, { useEffect, useState } from 'react';

import WPVendorRepository from '~/repositories/WP/WPVendorRepository';
import WPStore from '~/wp-components/elements/stores/WPStore';
import { generateTempArray } from '~/utilities/common-helpers';
import SkeletonVendor from '~/components/elements/skeletons/SkeletonVendor';

const WPStores = () => {
    const [loading, setLoading] = useState(true);
    const [storeItems, setStoreItems] = useState(null);

    async function getStores() {
        const params = {
            pages: 1,
            per_page: 8,
        };
        const WPStores = await WPVendorRepository.getStores(params);
        if (WPStores) {
            setTimeout(function () {
                setLoading(false);
            }, 200);
            setStoreItems(WPStores.items);
        }
    }

    useEffect(() => {
        getStores();
    }, []);

    // Views
    let storeItemsView;
    if (!loading) {
        if (storeItems) {
            storeItemsView = storeItems.map((item) => (
                <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 "
                    key={item.id}>
                    <WPStore store={item} />
                </div>
            ));
        } else {
            storeItemsView = <p>No store found.</p>;
        }
    } else {
        storeItemsView = generateTempArray(3).map((item) => (
            <div className="col-md-4" key={item}>
                <SkeletonVendor key={item} />
            </div>
        ));
    }

    return (
        <section className="ps-store-list">
            <div className="container">
                <div className="ps-section__header">
                    <h3>Store list</h3>
                </div>
                <div className="ps-section__content">
                    <div className="ps-section__search row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <button>
                                    <i className="icon-magnifier"></i>
                                </button>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search vendor..."
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">{storeItemsView}</div>
                </div>
            </div>
        </section>
    );
};

export default WPStores;
