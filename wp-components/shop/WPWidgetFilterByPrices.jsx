import React, { useState } from 'react';
import { Slider } from 'antd';
import { connect, useDispatch } from 'react-redux';
import { WPGetProducts } from '~/store/wp/action';

const WPWidgetFilterByPrices = () => {
    const dispatch = useDispatch();
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(2000);

    const handleFilterByPrices = (value) => {
        setMinPrice(value[0]);
        setMaxPrice(value[1]);
        const queries = {
            page: 1,
            per_page: 20,
            min_price: minPrice,
            max_price: maxPrice,
        };
        dispatch(WPGetProducts(queries));
    };

    return (
        <aside className="widget widget_shop">
            <h4 className="widget-title">By Price</h4>
            <div className="widget__conent">
                <Slider
                    range
                    defaultValue={[0, 2000]}
                    max={2000}
                    onAfterChange={(value) => handleFilterByPrices(value)}
                />
                <p>
                    Price: ${minPrice} - ${maxPrice}
                </p>
            </div>
        </aside>
    );
};

export default connect()(WPWidgetFilterByPrices);
