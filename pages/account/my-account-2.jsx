import React, { Component } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import MyAccount2 from '~/components/partials/account/MyAccount2';
import WPLayout from '~/wp-components/layouts/WPLayout';

class MyAccountPage2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/',
                },
                {
                    text: 'My Account',
                },
            ],
        };
    }

    render() {
        return (
            <WPLayout>
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={this.state.breadCrumb} />
                    <MyAccount2 />
                </div>
            </WPLayout>
        );
    }
}

export default MyAccountPage2;
