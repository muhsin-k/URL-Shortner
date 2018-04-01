import axios from "axios";
import constants from "./config/constants";
axios.defaults.baseURL = constants.baseUrl;
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log("API err", error);

    return Promise.reject(error);
  }
);

export const createShortUrl = obj => {
  const requestUrl = "item";
  return axios.post(requestUrl, obj);
};
