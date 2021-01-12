import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const config: AxiosRequestConfig = {
    baseURL: 'http://127.0.0.1:8088',
    timeout: 500,
    withCredentials: false // 检查跨域情况
}

const _axios: AxiosInstance = axios.create(config)

_axios.interceptors.request.use((config: AxiosRequestConfig) => {
    return config
}, (error: AxiosError) => {
    Promise.reject(error)
})

_axios.interceptors.response.use((response: AxiosResponse) => {
    return response
}, (error: AxiosError) => {
    Promise.reject(error)
})

export default _axios