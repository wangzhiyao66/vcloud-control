/* eslint-disable no-unused-vars */
import axios from "axios"
export default class HttpRequest {
    // 禁止警告报错
    /* eslint-disable */
    queue = {}
    constructor() {
        // this.queue = {}
    }

    getInsideconfig() {
        const config = {
            // 添加全局请求配置
        };
        return config;
    }

    // 添加 拦截器
    interceptors(instance, url) {
        // 请求拦截器
        instance.interceptors.request.use(config => {
            // 添加全局控制
            console.log("请求拦截器", config);
            if (!Object.keys(this.queue).length) {
                // 开启弹窗
            }

            this.queue[url] = true;
            return config;
        }, error => {
            return Promise.reject(error);
        }),
            // 响应拦截器
            instance.interceptors.response.use(res => {
                // 添加全局控制
                delete this.queue[url];
                const { data, status } = res;
                return { data, status };
                // return res;
            }, error => {
                delete this.queue[url];
                return Promise.reject(error);
            })
    }

    request(options) {
        const instance = axios.create();
        options = Object.assign(this.getInsideconfig(), options);
        this.interceptors(instance, options.url)
        return instance(options);
    }
}