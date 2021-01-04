import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import HomeBanner from '~/components/partials/homepage/home-default/HomeBanner';
import SiteFeatures from '~/components/partials/homepage/home-default/SiteFeatures';
import HomeAdsColumns from '~/components/partials/homepage/home-default/HomeAdsColumns';
import HomeAds from '~/components/partials/homepage/home-default/HomeAds';
import DownLoadApp from '~/components/partials/commons/DownLoadApp';
import Newletters from '~/components/partials/commons/Newletters';
import HomeDefaultTopCategories from '~/components/partials/homepage/home-default/HomeDefaultTopCategories';
import { getCollections } from '~/store/collection/action';
import WPLayoutHomeDefault from '~/wp-components/layouts/WPLayoutHomeDefault';
import WPNewArrivals from '~/wp-components/homepage/WPNewArrivals';
import WPDealOfDay from '~/wp-components/homepage/WPDealOfDay';
import WPProductList from '~/wp-components/homepage/WPProductList';
import { getBannersBySlugs, getPromotionsBySlugs } from '~/store/media/action';

const Index = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const collectionsSlug = [
            'deal-of-the-day',
            'consumer-electronics',
            'clothings',
            'garden-and-kitchen',
            'new-arrivals-products',
            'fullwidth-consumer-electronic-best-seller',
            'fullwidth-consumer-electronic-most-popular',
            'fullwidth-clothing-best-sellers',
            'fullwidth-clothing-most-popular',
            'fullwidth-kitchen-most-popular',
            'fullwidth-kitchen-best-sellers',
        ];
        const bannerSlugs = ['banner-home-fullwidth'];
        const promotionSlugs = ['home_fullwidth_promotions'];
        dispatch(getBannersBySlugs(bannerSlugs));
        dispatch(getPromotionsBySlugs(promotionSlugs));
        dispatch(getCollections(collectionsSlug));
    }, []);
    return (
        <WPLayoutHomeDefault title="Multipurpose Marketplace React Ecommerce Template">
            <HomeBanner />
            <SiteFeatures />
            <WPDealOfDay />
            <HomeAdsColumns />
            <HomeDefaultTopCategories />
            <HomeAds />
            <WPProductList categoryID={202} title="Clothing & Apparel" />
            <WPProductList categoryID={205} title="Consumer Electronics" />
            <WPProductList categoryID={203} title="Home, Garden & Kitchen" />
            <DownLoadApp />
            <WPNewArrivals />
            <Newletters />
        </WPLayoutHomeDefault>
    );
};

export default connect()(Index);
