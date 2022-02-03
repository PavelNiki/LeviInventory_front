import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const token = localStorage.getItem("token");

const config: AxiosRequestConfig = {
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
};
const instance: AxiosInstance = axios.create(config);
instance.defaults.headers.common["Authorization"] = `${token}`;
export default instance;
