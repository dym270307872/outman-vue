import axios from 'axios';
import qs from 'qs';

//系统默认配置
let show_console = process.env.VUE_APP_CONSOLE == 'true' ? true : false;

// axios 配置
axios.defaults.timeout = 30000;
axios.defaults.baseURL = '/';
axios.defaults.withCredentials = true;

const accessToken = null;
// http request 拦截器
axios.interceptors.request.use(
    config => {
        // console.log(util.tran2json(config));

        // config.data = qs.stringify(config.data)
        // const token = localStorage.getItem('token');
        const token = '129037efihsdfsd';
        console.log("token : " + token);
        if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `${token}`;
        } else {
            config.headers.Authorization = `demo`;
        }
        // config.headers = {
        //     'Content-Type':'application/x-www-form-urlencoded'
        //   };
        //   config.data=JSON.stringify(config.data);
        return config;
    },
    err => {
        // this.$message.error(err);
        return Promise.reject(err);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    response => {
       return response.data;
    },
    error => {
        if (error) {
            switch (error.response.status) {
                case 401: {
                    // 返回 401 清除token信息并跳转到登录页面
                    window.location.href = process.env.API_LOGIN_URL;
                    break;
                }
                case 403: {
                    // 返回 403 清除token信息并跳转到登录页面
                    //store.commit(types.LOGOUT);
                    console.error('权限不足')
                    // Vue.$message.error(error['response']['statusText']);
                    break;
                }
                case 404: {
                    // 返回 404 清除token信息并跳转到登录页面
                    //store.commit(types.LOGOUT);
                    Vue.prototype.$message.log(error['response']['statusText']);
                    break;
                }
            }
        }
        // return error;
        return Promise.reject(error)   // 返回接口返回的错误信息
    }
);

function axios_get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                if (show_console) {
                    // console.log("url = [" + url + "], response.data = " + util.tran2json(response.data));
                }
                if(response.success){
                    resolve(response.data);
                }else{
                    reject(response.message);
                }
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

function axios_post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                if (show_console) {
                    // console.log("sessionStatus:" + response.headers["sessionstatus"]);
                    // console.log("url = [" + url + "], response.data = " + util.tran2json(response.data));

                }
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

function axios_put(url, params) {
    return new Promise((resolve, reject) => {
        axios.put(url, params)
            .then(response => {
                if (show_console) {
                    // console.log("url = [" + url + "], response.data = " + util.tran2json(response.data));
                }
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

function axios_delete(url) {
    return new Promise((resolve, reject) => {
        axios.delete(url)
            .then(response => {
                if (show_console) {
                    // console.log("url = [" + url + "], response.data = " + util.tran2json(response.data));
                }
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}


export default {
    get: function (url, params) {
        return axios_get(url, params)
    },

    post: function (url, params) {
        return axios_post(url, params)
    },

    put: function (url, params) {
        return axios_put(url, params)
    },

    delete: function (url) {
        return axios_delete(url)
    },
    send: function (url, config, data) {

        if (config.contentType) {
            // axios.config.headers['Content-Type'] = contentType;
            return new Promise((resolve, reject) => {
                axios({
                    method: config.method,
                    url: url,
                    headers: {
                        'Content-Type': config.contentType
                    },
                    data: qs.stringify(data)
                }).then(response => {
                    if (show_console || config.showLog) {
                        // console.log("url = [" + url + "], response.data = " + util.tran2json(response.data));
                    }
                    resolve(response.data);
                }, err => {
                    reject(err);
                })
                    .catch((error) => {
                        reject(error)
                    });
            });
        } else {
            return axios_get(url, data)
        }
    }
}
