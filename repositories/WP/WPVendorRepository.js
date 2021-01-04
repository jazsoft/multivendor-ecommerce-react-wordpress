/*
 * WPReact
 * Developed by: diaryforlife
 * */
import {
    oathInfo,
    WPDomain,
    WPRepository,
} from '~/repositories/WP/WPRepository';
import { serializeQuery } from '~/repositories/Repository';

class WPVendorRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getStores() {
        const endpoint = 'wp-json/dokan/v1/stores';
        const reponse = await WPRepository.get(`${WPDomain}/${endpoint}`)
            .then((response) => {
                if (response.data && response.data.length > 0) {
                    const data = {
                        items: response.data,
                        totalItems: response.headers['x-wp-total'],
                        totalPages: response.headers['x-wp-totalpages'],
                    };
                    return data;
                } else return null;
            })
            .catch(() => {
                return null;
            });
        return reponse;
    }

    async getStoreByID(payload) {
        const endpoint = `wp-json/dokan/v1/stores/${payload}`;
        const reponse = await WPRepository.get(`${WPDomain}/${endpoint}`)
            .then((response) => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
        return reponse;
    }

    async getProductOfStoreByID(id, queries) {
        const endpoint = `wp-json/dokan/v1/stores/${id}/products?${serializeQuery(
            queries
        )}`;
        const reponse = await WPRepository.get(`${WPDomain}/${endpoint}`)
            .then((response) => {
                if (response.data && response.data.length > 0) {
                    const data = {
                        items: response.data,
                        totalItems: response.headers['x-wp-total'],
                        totalPages: response.headers['x-wp-totalpages'],
                    };
                    return data;
                } else return null;
            })
            .catch(() => {
                return null;
            });
        return reponse;
    }
}

export default new WPVendorRepository();
