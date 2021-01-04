import axios from 'axios';
// const baseDomain = 'http://45.76.97.89:3000';
const baseDomain = 'http://localhost:1337';

export const wp = 'https://wp.nouhtml5.com';
// export const wp = 'http://wp.diaryforlife.info';

const authorization_prefix = 'Bearer ';

export const customHeaders = {
    Accept: 'application/json',
    /* Authorization: authorization_prefix + token || undefined*/
    /*auth: {
        "username": "ck_dc45d73b9a8b2931930de4a5eb2b2d520c8ba566",
        "password": "cs_e3c6ca23aca7a6350b490e5969cdfa9b11703a42"
    }*/
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
