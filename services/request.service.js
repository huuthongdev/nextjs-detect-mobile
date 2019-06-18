import axios from 'axios';
import { CookieService } from '../services/cookie.service';
// import { URL_SERVER_API } from '../refs';

const URL_SERVER_API = '';

class ServerError extends Error {
    constructor(res) {
        super(res);
        if (!res) this.message = 'Không nhận được dữ liệu response'
        if (res.data.error === 'Internal Server Error') this.message = 'Không kết nối được server'
        if (res.data.code === 429) this.message = 'Vượt quá tần suất truy cập trong khoảng thời gian cho phép'
        this.message = (res.data.message || "Lỗi không xác định từ hệ thống");
        this.code = (res.data.code || 3001);
        this.errors = (res.data.errors || []);
    }
}

export class RequestService {
    static getConfig() {
        const creator = CookieService.getCookie('token');
        const clientConfig = { headers: { creator } };
        return clientConfig;
    }

    static async resServerError(error) {
        if (error.response && error.response.data && error.response.data.error === 'invalid_token') return UserServices.logOut();
        throw new ServerError(error.response);
    }

    static async get(subUrl, params) {
        return axios.get(`${URL_SERVER_API}${subUrl}`, { ...RequestService.getConfig(), params })
            .then(res => res.data)
            .catch(this.resServerError);
    }

    static async post(subUrl, data) {
        return axios.post(`${URL_SERVER_API}${subUrl}`, data, RequestService.getConfig())
            .then(res => res.data)
            .catch(this.resServerError);
    }

    static async put(subUrl, data) {
        return axios.put(`${URL_SERVER_API}${subUrl}`, data, RequestService.getConfig())
            .then(res => res.data)
            .catch(this.resServerError);
    }

    static async delete(subUrl) {
        return axios.delete(`${URL_SERVER_API}${subUrl}`, RequestService.getConfig())
            .then(res => res.data)
            .catch(this.resServerError);
    }
}
