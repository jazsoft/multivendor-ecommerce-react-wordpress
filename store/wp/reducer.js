import { actionTypes } from './action';

export const initialState = {
    WPProducts: [],
    WPCategories: [],
    WPLoading: true,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.WP_GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                WPProducts: action.payload,
                WPLoading: false,
            };
        case actionTypes.WP_TOGGLE_LOADING:
            return {
                ...state,
                WPLoading: action.payload,
            };

        default:
            return state;
    }
}

export default reducer;
