import {
  HEADER_REQUEST_DEFAULT,
  HEADER_REQUEST_MDT_DEFAULT,
  TICKETING_BASE_URL_IBM_CLIENT_ID,
  TICKETING_BASE_URL_IBM_CLIENT_SECRET,
  TICKETING_CORE_URL_IBM_CLIENT_ID,
  TICKETING_CORE_URL_IBM_CLIENT_SECRET,
} from "../config/constant";

export const requestEnquiry = (authenType, data = {}) => {
  return {
    header: HEADER_REQUEST_DEFAULT,
    body: {
      command: "GET_ENQUIRY",
      enquiry: {
        authenType: authenType,
        ...data,
      },
    },
  };
};
export const requestEnquiryMDT = (authenType, data = {}) => {
  return {
    header: HEADER_REQUEST_MDT_DEFAULT,
    body: {
      command: "GET_ENQUIRY",
      enquiry: {
        authenType: authenType,
        ...data,
      },
    },
  };
};

export const requestTransaction = (authenType, data = {}) => {
  return {
    header: HEADER_REQUEST_DEFAULT,
    body: {
      command: "GET_TRANSACTION",
      transaction: {
        authenType: authenType,
        ...data,
      },
    },
  };
};

export const requestHeaderApiBase = {
  "X-IBM-Client-Id": TICKETING_BASE_URL_IBM_CLIENT_ID,
  "X-IBM-Client-Secret": TICKETING_BASE_URL_IBM_CLIENT_SECRET,
};

export const requestHeaderApiCore = {
  "X-IBM-Client-Id": TICKETING_CORE_URL_IBM_CLIENT_ID,
  "X-IBM-Client-Secret": TICKETING_CORE_URL_IBM_CLIENT_SECRET,
};

export const searchDataInfo = {
  paginatorInfo: {
    page: 1,
    pageSize: 250,
  },
  filterInfo: {
    searchValue: "",
    usrStatus: "ACTIVE",
    usrRole: "",
  },
  sortingInfo: {
    sortColumn: "usr_create_date",
    direction: "desc",
  },
};

export const dataReq = {
  usrUsername: "",
  usrFirstName: "",
  usrLastName: "",
  usrEmail: "",
  usrPosition: "",
  usrPhone: "",
  depUId: "",
  id: "",
  grpUid: "",
  usrRole: "",
  usrJob: "",
  typeBusiness: "",
  usrStatus: "",
  usrUid: "",
};
