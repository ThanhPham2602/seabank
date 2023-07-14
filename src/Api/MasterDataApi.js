import axiosClient from "./axiosClient";
import {
  requestHeaderApiBase,
  // requestTransaction,
  requestEnquiry,
  requestHeaderApiCore,
  requestEnquiryMDT,
  searchDataInfo,
} from "../utils";
import { TICKETING_BASE_URL } from "../config/constant";

const masterDataApi = {
  async getAll(params) {
    return axiosClient.post(
      TICKETING_BASE_URL,
      requestEnquiryMDT("getMasterDataByType", { type: "TypeBusiness" }),
      {
        headers: requestHeaderApiBase,
      }
    );
  },

  async getGroups(params) {
    console.log(1);
    return axiosClient.post(
      TICKETING_BASE_URL,
      requestEnquiry("getCoreGroup", {
        searchDataInfo: searchDataInfo({ params }),
      }),
      {
        headers: requestHeaderApiCore,
      }
    );
  },
};

export default masterDataApi;
