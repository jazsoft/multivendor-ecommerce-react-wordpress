import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import MarketPlaceProductBox from '~/components/partials/homepage/marketplace/MarketPlaceProductBox';
import MarketPlacePromotion from '~/components/partials/homepage/marketplace/MarketPlacePromotions';
import MarketPlaceDealOfDay from '~/components/partials/homepage/marketplace/MarketPlaceDealOfDay';
import MarketPlaceSiteFeatures from '~/components/partials/homepage/marketplace/MarketPlaceSiteFeatures';
import MarketPlaceHomeBanner from '~/components/partials/homepage/marketplace/MartketPlaceHomeBanner';
import { getCategories, getCollections } from '~/store/collection/action';
import WPLayoutHomeMarketPlace from '~/wp-components/layouts/WPLayoutHomeMarketPlace';

const HomeMarketPlacePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const collectionsSlug = ['deal-of-the-day'];
        const categoriesSlug = [
            'clothing-and-parel',
            'consumer-electrics',
            'computers-and-technologies',
            'garden-and-kitchen',
            'health-and-beauty',
        ];
        dispatch(getCollections(collectionsSlug));
        dispatch(getCategories(categoriesSlug));
    }, []);

    return (
        <div className="site-content">
            <WPLayoutHomeMarketPlace title="Home Marketplace 1">
                <main id="homepage-3">
                    <MarketPlaceHomeBanner />
                    <MarketPlaceSiteFeatures />
                    <MarketPlacePromotion />
                    <MarketPlaceDealOfDay collectionSlug="deal-of-the-day" />
                    <MarketPlaceProductBox />
                </main>
            </WPLayoutHomeMarketPlace>
        </div>
    );
};
export default connect()(HomeMarketPlacePage);
