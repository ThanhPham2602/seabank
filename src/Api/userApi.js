import axiosClient from "./axiosClient";
import {
  requestHeaderApiBase,
  requestEnquiry,
  requestTransaction,
  searchDataInfo,
} from "../utils";
import { TICKETING_BASE_URL } from "../config/constant";

const userApi = {
  async getAll(params) {
    console.log("object getall", params);
    console.log("object getall2", searchDataInfo({ params }));
    return axiosClient.post(
      TICKETING_BASE_URL,
      requestEnquiry("getUsers", {
        searchDataInfo: searchDataInfo({ params }),
      }),
      {
        headers: requestHeaderApiBase,
      }
    );
  },

  async get(id) {
    return await axiosClient.post(
      TICKETING_BASE_URL,
      requestEnquiry("getUserById", { usrUid: id }),
      {
        headers: requestHeaderApiBase,
      }
    );
  },

  async updateStatus(data) {
    return await axiosClient.post(
      TICKETING_BASE_URL,
      requestTransaction("updateUser", { data: data }),
      { headers: requestHeaderApiBase }
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

export default userApi;
