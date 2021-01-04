/*
 * WPReact
 * Developed by: diaryforlife
 * */
import axios from 'axios';

export const WPDomain = 'https://wp.nouhtml5.com';

const username = 'ck_7c8c5cfbeadd6d7780f88355fd393f2ee147a843';
const password = 'cs_d0cd71491fa24bf859e96d23b963e2c1b5ab9866';

export const oathInfo = {
    consumer_key: username,
    consumer_secret: password,
};

export const customHeaders = {
    Accept: '*/*',
};

export const WPRepository = axios.create({
    headers: customHeaders,
});
