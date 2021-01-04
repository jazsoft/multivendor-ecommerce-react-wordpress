export const actionTypes = {
    WP_GET_PRODUCTS: 'WP_GET_PRODUCTS',
    WP_GET_PRODUCTS_SUCCESS: 'WP_GET_PRODUCTS_SUCCESS',
    WP_TOGGLE_LOADING: 'WP_TOGGLE_LOADING',
};

export function WPGetProducts(payload) {
    return { type: actionTypes.WP_GET_PRODUCTS, payload };
}

export function WPGetProductsSuccess(payload) {
    return {
        type: actionTypes.WP_GET_PRODUCTS_SUCCESS,
        payload,
    };
}

export function WPToggleProductLoading(payload) {
    return {
        type: actionTypes.WP_TOGGLE_LOADING,
        payload,
    };
}
