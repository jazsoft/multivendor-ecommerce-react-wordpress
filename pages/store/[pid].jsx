import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Router from 'next/router';
import BreadCrumb from '~/components/elements/BreadCrumb';
import WPStoreInformation from '~/wp-components/store/WPStoreInformation';
import WPVendorRepository from '~/repositories/WP/WPVendorRepository';
import SkeletonVendorInformation from '~/components/elements/skeletons/SkeletonVendorInformation';
import WPLayout from '~/wp-components/layouts/WPLayout';
import WPVendorProducts from '~/wp-components/store/WPVendorProducts';
import { generateTempArray } from '~/utilities/common-helpers';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';

const WPStorePage = ({ query }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [storeID, setStoreID] = useState(null);
    const [storeProfile, setStoreProfile] = useState(null);
    const [storeProducts, setStoreProducts] = useState(null);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Vendors',
            url: '/vendor',
        },
        {
            text: storeProfile ? storeProfile.store_name : 'store detail',
        },
    ];

    async function getVendorInformations(id) {
        const profile = await WPVendorRepository.getStoreByID(id);
        const vendorProducts = await WPVendorRepository.getProductOfStoreByID(
            id,
            { per_page: 12 }
        );
        if (profile && vendorProducts) {
            await setStoreProfile(profile);
            await setStoreProducts(vendorProducts);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    useEffect(() => {
        if (query) {
            const { pid } = query;
            if (!isNaN(pid)) {
                setStoreID(pid);
                getVendorInformations(pid);
            } else {
                Router.push('/page/page-404');
            }
        }
    }, [dispatch]);

    // Views
    let storeInformationView, storeProductsView;
    if (!loading) {
        storeInformationView = <WPStoreInformation store={storeProfile} />;
        if (storeProducts) {
            storeProductsView = (
                <WPVendorProducts products={storeProducts} id={storeID} />
            );
        }
    } else {
        storeInformationView = <SkeletonVendorInformation />;
        const skeletonItems = generateTempArray(8).map((item) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={item}>
                <SkeletonProduct />
            </div>
        ));
        storeProductsView = <div className="row">{skeletonItems}</div>;
    }

    return (
        <WPLayout title={storeProfile ? storeProfile.store_name : 'Loading...'}>
            <div className="ps-page--single ps-page--vendor">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="ps-vendor-store">
                    <div className="container">
                        <div className="ps-section__container">
                            <div className="ps-section__left">
                                {storeInformationView}
                            </div>
                            <div className="ps-section__right">
                                {storeProductsView}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WPLayout>
    );
};

WPStorePage.getInitialProps = async ({ query }) => {
    return { query: query };
};

export default connect()(WPStorePage);
