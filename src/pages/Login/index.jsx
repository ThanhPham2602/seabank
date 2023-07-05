import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Tabs, notification } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./index.css";
import axios from "axios";
// import axios from "axios";

function IndexLogin() {
  const navigate = useNavigate();
  const onFinish = async (data) => {
    console.log("data:: ", data);
    const res = await axios.post(
      "https://gwextdev.seabank.com.vn/seabank/seabank-external/api/v1/ticketing/tttn/feticketing/process",
      {
        body: {
          command: "Get_TRANSACION",
          transaction: {
            authenType: "get_token",
            userName: data?.username,
            passWord: data?.password,
          },
        },
        header: {
          api: "TTTN_TICKETING_API",
          apiKey: "MS13276ZIDANDWYSB2Cl89VARNAAH",
          channel: "Ticketing",
          context: "PC",
          location: "10.9.12.90",
          priority: "1",
          reqType: "REQUEST",
          requestAPI: "t24Server",
          requestNode: "10.9.10.14",
          subChannel: "VHT",
          synasyn: "true",
          trusted: "false",
          userID: "1365778600",
        },
      },
      {
        headers: {
          "X-Ibm-Client-Id": "e71a73007d4f0621989a1c83f44ff9be",
          "X-Ibm-Client-Secret": "cc40a9b637f745a4d042850b1e89fdd5",
        },
      }
    );
    sessionStorage.setItem(
      "accessToken",
      res?.data?.body?.dataRes?.accessToken
    );
    console.log("res:: ", res);
    if (res?.data?.body?.status === "OK") {
      navigate("/system/user");
      notification.success({ message: "Đăng nhập thành công" });
    } else {
      notification.error({ message: "Đăng nhập không thành công" });
    }
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
