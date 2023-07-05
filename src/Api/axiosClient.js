import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://gwextdev.seabank.com.vn/",
  headers: {
    "X-Ibm-Client-Id": "e71a73007d4f0621989a1c83f44ff9be",
    "X-Ibm-Client-Secret": "cc40a9b637f745a4d042850b1e89fdd5",
  },
});

//Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
