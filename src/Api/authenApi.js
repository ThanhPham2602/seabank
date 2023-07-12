import axiosClient from "./axiosClient";
import {
  requestHeaderApiBase,
  requestHeaderApiCore,
  requestTransaction,
} from "../utils";
import { TICKETING_BASE_URL } from "../config/constant";

const authenApi = {
  async login(userName, passWord) {
    return axiosClient.post(
      TICKETING_BASE_URL,
      requestTransaction("get_token", {
        userName,
        passWord,
      }),
      { headers: requestHeaderApiBase }
    );
  },
  async logout() {
    return axiosClient.post(
      TICKETING_BASE_URL,
      requestTransaction("logout", {}),
      { headers: requestHeaderApiCore }
    );
  },
};

export default authenApi;
