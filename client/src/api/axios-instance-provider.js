import axios from 'axios'
import { apiUrl, expireCookies, logoutStatus } from '../../config'
import { serviceType } from './api-type'

// private methods
const transformRequest = (data, headers) => {
    // Do whatever you want to transform the data
    headers['Content-Type'] = 'application/json;charset=utf-8'
    return JSON.stringify(data);
};

const transformResponse = (data) => {
    if (data != '' && typeof data === 'string') {
        data = JSON.parse(data)
    }
    return data;
};

const validateStatus = (status) => {
    // if (logoutStatus.indexOf(status) != -1) {
    //     Helper._clearAllCookies();
    //     window.location.pathname = '/'
    // }
    return status >= 200 && status < 300;
};

const resolveApiInstance = (url) => {
    let accessToken = Helper._getCookie('token') || '',    
        tokenType = Helper._getCookie('tokenType') || '',
        keyTranslate = Helper._getCookie('keyTranslate') || '',
        token = `Bearer ${accessToken}`
    let baseURL = url + 'api/';
    let instrance = axios.create({
        baseURL: baseURL,
        headers: {
            Authorization: token,
            time_stamp: new Date().getTime(),
            language: keyTranslate, 
        },
        transformRequest: [transformRequest],
        transformResponse: [transformResponse],
        validateStatus: validateStatus

    });

    instrance.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            let originalRequest = error.config
            if (error.response.status === 401) {
                Helper._removeCookie('token')
                window.location.pathname = '/login'
            }
            else {
                return Promise.reject(error)
            }
        }
    )

    return instrance
};

const resolveDefaultAxiosInstance = (type) => {
    switch (type) {
        case serviceType.api: {
            return resolveApiInstance(apiUrl)
        };
    }
};

export {resolveDefaultAxiosInstance};
