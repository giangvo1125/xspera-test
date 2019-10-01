import { resolveDefaultAxiosInstance } from './axios-instance-provider'
import { serviceType } from './api-type';

export class HttpClient {
    constructor(type) {
        this.axiosInstance = resolveDefaultAxiosInstance(type)
    }

    get = url => {
        const p = new Promise((resolve, reject) => {
            // TODO will refactor when we have centrialized root api
            this.axiosInstance.get(url).then(
                result => {
                    resolve(result)
                },
                err => {
                    reject(err)
                }
            )
        })

        return p
    }

    post = (url, data = {}) => {
        let p = new Promise((resolve, reject) => {
            this.axiosInstance.post(url, data).then(
                result => {
                    resolve(result)
                },
                err => {             
                    reject(err)
                }
            )
        })
        return p
    }
    patch = (url, data) => {
        let p = new Promise((resolve, reject) => {
            this.axiosInstance.patch(url, data).then(
                result => {
                    resolve(result)
                },
                err => {
                    reject(err)
                }
            )
        })
        return p
    }
    put = (url, data) => {
        let p = new Promise((resolve, reject) => {
            this.axiosInstance.put(url, data).then(
                result => {
                    resolve(result)
                },
                err => {
                    reject(err)
                }
            )
        })
        return p
    }

    static withAPI() {
        return new HttpClient(serviceType.api);
    }
}
