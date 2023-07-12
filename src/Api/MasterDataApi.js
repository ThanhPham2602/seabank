import axiosClient from "./axiosClient";
import {
  requestHeaderApiBase,
  requestTransaction,
  requestEnquiryMDT,
} from "../utils";
import { TICKETING_BASE_URL } from "../config/constant";

const masterDataApi = {
  async getAll(params) {
    return axiosClient.post(
      TICKETING_BASE_URL,
      requestEnquiryMDT("getMasterDataByType", { type: "ContentSuggest" }),
      {
        headers: requestHeaderApiBase,
      }
    );
  },

  async get(id) {
    return await axiosClient.post(
      TICKETING_BASE_URL,
      requestEnquiryMDT("getUserById", { usrUid: id }),
      {
        headers: requestHeaderApiBase,
      }
    );
  },

  async add(data) {
    return await axiosClient.post(
      TICKETING_BASE_URL,
      requestTransaction("createUser", { data: data }),
      { headers: requestHeaderApiBase }
    );
  },

  async update(data) {
    return await axiosClient.post(
      TICKETING_BASE_URL,
      requestTransaction("updateUser", { data: data }),
      { headers: requestHeaderApiBase }
    );
  },

  async remove(id) {
    return axiosClient.post(
      TICKETING_BASE_URL,
      requestTransaction("getUserById", { usrUid: id }),
      {
        headers: requestHeaderApiBase,
      }
    );
  },
};

export default masterDataApi;
