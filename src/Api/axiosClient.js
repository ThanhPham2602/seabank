import axios from "axios";
import Cookies from "js-cookie";

const axiosClient = axios.create();

//Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    const accessToken = Cookies.get("access_token");

    // Do something before request is sent
    // console.log("====================================");
    // console.log(config.data);
    // console.log("====================================");
    // const newConfig = Object.assign(config, {
    //   data: {
    //     ...config?.data,
    //     body: {
    //       ...config.data?.body,
    //       transaction: {
    //         ...config.data?.body?.transaction,
    //         // accessToken,
    //       },
    //       enquiry: {
    //         ...config.data?.body?.enquiry,
    //         // accessToken,
    //       },
    //     },
    //   },
    // });
    const newConfig = config;
    // console.log("object config", newConfig.data.body);
    // newConfig.data.body.transaction.accessToken = accessToken;
    // if (config.data.body.command === "GET_ENQUIRY")
    switch (config.data.body.command) {
      case "GET_ENQUIRY":
        newConfig.data.body.enquiry.accessToken = accessToken;
        break;
      case "GET_TRANSACTION":
        newConfig.data.body.transaction.accessToken = accessToken;
        break;
      default:
        break;
    }
    // console.log("access_token", newConfig);

    return newConfig;
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
    // console.log("object response", response);
    if (response?.data?.error?.code === "669") {
      // Access token hết hiệu lực, chuyển hướng về trang đăng nhập

      window.location.href = "/login";
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log("object error", error);
    // if (error.response.status === 669) {
    //   // Access token hết hiệu lực, chuyển hướng về trang đăng nhập

    //   const navigate = useNavigate();
    //   navigate("/login");
    // }
    return Promise.reject(error);
  }
);

export default axiosClient;
