import React, { Component } from 'react';

import WPWidgetCategories from '~/wp-components/shop/WPWidgetCategories';
import WPWidgetBrand from '~/wp-components/shop/WPWidgetBrand';
import WPWidgetFilterByPrices from '~/wp-components/shop/WPWidgetFilterByPrices';

const WPShopWidget = () => {
    return (
        <div className="ps-layout__left">
            <WPWidgetCategories />
            <WPWidgetBrand />
            <WPWidgetFilterByPrices />
        </div>
    );
};

export default WPShopWidget;
