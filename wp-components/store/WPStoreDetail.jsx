import React, { Component } from 'react';
import WPStoreInformation from '~/wp-components/store/WPStoreInformation';
import VendorProducts from '~/components/partials/vendor/modules/VendorProducts';

class WPStoreDetail extends Component {
    render() {
        return (
            <div className="ps-vendor-store">
                <div className="container">
                    <div className="ps-section__container">
                        <div className="ps-section__left">
                            <WPStoreInformation />
                        </div>
                        <div className="ps-section__right">
                            <VendorProducts />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WPStoreDetail;
