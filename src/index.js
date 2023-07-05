import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import viVN from "antd/locale/vi_VN";

import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";
// import { ProConfigProvider } from "@ant-design/pro-components";
// import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider locale={viVN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
