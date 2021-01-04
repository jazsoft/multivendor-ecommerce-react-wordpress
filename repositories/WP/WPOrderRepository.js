/*
 * WPReact
 * Developed by: diaryforlife
 * */
import { oathInfo, WPDomain, WPRepository } from '~/repositories/WP/WPRepository';
import { serializeQuery } from '~/repositories/Repository';

class WPOrderRespository {
    constructor(callback) {
        this.callback = callback;
    }

    async createNewOrder(payload) {
        const endPoint = `wp-json/wc/v3/orders?${serializeQuery({
            ...oathInfo,
        })}`;
        return await WPRepository.post(`${WPDomain}/${endPoint}`, payload)
            .then((response) => {
                console.log(response);
                return response.data;
            })
            .catch(() => {
                return null;
            });
    }

    // Orders data
    async getPaymentGateWays() {
        const endPoint = `/wp-json/wc/v3/payment_gateways?${serializeQuery({
            ...oathInfo,
        })}`;
        return await WPRepository.get(`${WPDomain}/${endPoint}`)
            .then((response) => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    }

    async getShippingMethods() {
        const endPoint = 'wp-json/wc/v3/payment_gateways';
        return await WPRepository.get(`${WPDomain}/${endPoint}`)
            .then((response) => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    }

    async getShippingZones() {
        const endPoint = `wp-json/wc/v3/shipping/zones?${serializeQuery({
            ...oathInfo,
        })}`;
        return await WPRepository.get(`${WPDomain}/${endPoint}`)
            .then((response) => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    }

    async getShippingZoneLocations(id) {
        const endPoint = `wp-json/wc/v3/shipping/zones/${id}/locations`;
        return await WPRepository.get(`${WPDomain}/${endPoint}`)
            .then((response) => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    }

    async getShippingMethods(id) {
        const endPoint = `wp-json/wc/v3/shipping/zones/${id}/methods`;
        return await WPRepository.get(`${WPDomain}/${endPoint}`)
            .then((response) => {
                return response.data;
            })
            .catch(() => {
                return null;
            });
    }
}

export default new WPOrderRespository();
