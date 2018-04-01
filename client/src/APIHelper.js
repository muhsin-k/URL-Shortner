import axios from "axios";
import constants from "./config/constants";
axios.defaults.baseURL = constants.baseUrl;
export const createShortUrl = obj => {
  const requestUrl = "item";
  return axios.post(requestUrl, obj);
};
