import { all, put, call, takeEvery } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import {
    actionTypes,
    WPGetProductsSuccess,
    WPToggleProductLoading,
} from './action';
import WPProductRepository from '~/repositories/WP/WPProductRepository';

polyfill();

function* WPGetProductsSaga({ payload }) {
    try {
        yield put(WPToggleProductLoading(true));
        const data = yield call(WPProductRepository.getProducts, payload);
        yield put(WPGetProductsSuccess(data));
        yield put(WPToggleProductLoading(false));
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.WP_GET_PRODUCTS, WPGetProductsSaga)]);
}
