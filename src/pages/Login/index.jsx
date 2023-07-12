import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Tabs, notification } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./index.css";
import Cookies from "js-cookie";
import authenApi from "../../Api/authenApi";
// import axios from "axios";

function IndexLogin() {
  const navigate = useNavigate();
  const onFinish = async (data) => {
    console.log("data:: ", data);

    authenApi
      .login(data?.username, data?.password)
      .then((res) => {
        Cookies.set("access_token", res?.data?.body?.dataRes?.accessToken);
        // sessionStorage.setItem(
        //   "accessToken",
        //   res?.data?.body?.dataRes?.accessToken
        // );

        if (res?.data?.body?.status === "OK") {
          navigate("/system/user");
          notification.success({ message: "Đăng nhập thành công" });
        } else {
          notification.error({ message: "Đăng nhập không thành công" });
        }
      })
      .catch((err) => {
        notification.error({ message: err.toString?.() });
      });
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Đăng nhập tài khoản`,
    },
  ];

  return (
    <section className="section">
      <div className="login-container">
        <div className="login-top">
          <img src="/image/logo-seabank-black.png" alt="logo" />
          <p>Hệ thống Ticketing Thanh toán trong nước</p>
        </div>
        <div className="login-main">
          <Tabs
            centered
            //   defaultActiveKey="Đăng nhập tài khoản"
            items={items}
            // onChange={onChange}
          />
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tài khoản.",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Tài khoản: "
                allowClear
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu.",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật khẩu:"
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Đăng nhập
            </Button>
          </Form>
        </div>
      </div>

      <footer>
        <p>&copy; 2023 Ngân hàng TMCP Đông Nam Á (SeABank)</p>
      </footer>
    </section>
  );
}

export default IndexLogin;
