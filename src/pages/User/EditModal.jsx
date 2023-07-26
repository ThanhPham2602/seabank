import React, { useEffect, useRef } from "react";
import {
  ProForm,
  ProFormTextArea,
  ProFormText,
  ProFormSelect,
  // ProFormSubmitter,
} from "@ant-design/pro-components";
// import { ProFormSubmitter } from "@ant-design/pro-form";
import { Skeleton, Button, notification, Spin } from "antd";
import { useContext } from "react";
import { UserContext } from "./UserContext";

import userApi from "../../Api/userApi";

function EditModal() {
  const { data, dispatch } = useContext(UserContext);

  console.log("object data", data);
  const infor = data?.getUserById;
  const SelectData = data?.getAllMDT;
  const selectData2 = data?.getGroups;
  let check = data?.id;

  useEffect(() => {
    userApi
      .get(check)
      .then((response) => {
        // console.log("object res", response.data.body.dataRes);
        dispatch({
          type: "getUserById",
          payload: response.data.body.dataRes,
        });
      })
      .catch((error) => console.error(error));
  }, [check]);

  // console.log("selectdataa::", selectData2);
  // console.log("selectdataa1::", SelectData);

  const handleSubmit = async (value) => {
    console.log("object value", value);
    // Thực hiện chức năng của nút "Submit" tại đây
    !check
      ? userApi
          .add(value)
          .then((response) => {
            dispatch({ type: "addUser", payload: value });
            dispatch({ type: "modalClose" });

            if (response?.data?.body?.status === "OK") {
              notification.success({ message: "Tạo người dùng thành công" });
            } else {
              notification.error({
                message: "Tạo người dùng không thành công",
              });
            }
          })
          .catch((error) => console.error(error))
      : userApi
          .update({ ...value, usrUid: check })
          .then((response) => {
            dispatch({ type: "updateUser", payload: value });
            dispatch({ type: "modalClose" });
            console.log("object val", value);
            console.log("object id", check);
            if (response?.data?.body?.status === "OK") {
              notification.success({
                message: "Cập nhật người dùng thành công",
              });
            } else {
              notification.error({
                message: "Cập nhật người dùng không thành công",
              });
            }
          })
          .catch((error) => console.error(error));
  };
  return (
    <Skeleton loading={!check ? false : !infor ? true : false}>
      <ProForm
        initialValues={infor}
        grid
        onFinish={(value) => handleSubmit(value)}
        submitter={{
          resetButtonProps: false,
          searchConfig: {
            submitText: "Xác nhận",
          },
          submitButtonProps: {},
          render: (_, doms) => {
            const handleCancel = () => {
              // Thực hiện chức năng của nút "Cancel" tại đây
              dispatch({ type: "modalClose" });
              // dispatch({ type: "drawerClose" });
            };

            return (
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  type="default"
                  onClick={handleCancel}
                  style={{ marginRight: 10 }}
                >
                  Hủy
                </Button>

                {/* <Button
                  type="primary"
                  onClick={handleSubmit}
                  style={{ marginRight: 10 }}
                >
                  Xác nhận
                </Button> */}
                {doms}
              </div>
            );
          },
        }}
      >
        <ProFormText
          colProps={{ lg: 8, md: 8, sm: 8, xs: 24 }}
          width="md"
          name="usrUsername"
          label="Tài khoản"
          rules={[{ required: true, message: "Please!" }]}
        />
        <ProFormText
          colProps={{ lg: 8, md: 8, sm: 8, xs: 24 }}
          width="md"
          name="usrEmail"
          label="Email"
        />
        <ProFormSelect
          colProps={{ lg: 8, md: 8, sm: 8, xs: 24 }}
          width="md"
          name="usrStatus"
          label="Trạng thái"
          valueEnum={{
            ACTIVE: {
              text: "Hoạt động",
              status: "success",
            },
            INACTIVE: {
              text: "Không hoạt động",
              status: "error",
            },
          }}
          rules={[{ required: true, message: "Please!" }]}
        />
        <ProFormText
          colProps={{ lg: 8, md: 8, sm: 8, xs: 24 }}
          width="md"
          name="usrLastName"
          label="Họ"
        />
        <ProFormText
          colProps={{ lg: 8, md: 8, sm: 8, xs: 24 }}
          width="md"
          name="usrFirstName"
          label="Tên"
        />
        <ProFormTextArea
          colProps={{ lg: 8, md: 8, sm: 8, xs: 24 }}
          width="md"
          name="usrPosition"
          label="Phòng ban"
        />
        <ProFormText
          colProps={{ lg: 8, md: 8, sm: 8, xs: 24 }}
          width="md"
          name="usrPhone"
          label="Số điện thoại"
          // rules={[{ required: true, message: "Please!" }]}
        />
        <ProFormSelect
          colProps={{ lg: 8, md: 8, sm: 8, xs: 24 }}
          width="md"
          label="Nhóm nghiệp vụ"
          // request={async () => [
          //   { label: "description", value: "defaultValue" },
          // ]}

          options={SelectData.map((value) => {
            return {
              value: value.code,
              label: value.name,
            };
          })}
          rules={[{ required: true, message: "Please select!" }]}
        />
        <ProFormSelect
          colProps={{ lg: 8, md: 8, sm: 8, xs: 24 }}
          width="md"
          name="grpName"
          label="Nhóm"
          // request={async () => [
          //   { label: "description", value: "defaultValue" },
          // ]}
          initialValue={infor}
          options={selectData2.map((value) => {
            return {
              label: value.grpName,
              value: value.grpCode,
            };
          })}
          rules={[{ required: true, message: "Please select!" }]}
        />
        <ProFormText
          colProps={{ lg: 8, md: 8, sm: 8, xs: 24 }}
          width="md"
          name="usrJob"
          label="Công việc"
        />
        <ProFormText
          colProps={{ lg: 8, md: 8, sm: 8, xs: 24 }}
          width="md"
          name="usrLocation"
          label="Khu vực"
        />
      </ProForm>
    </Skeleton>
  );
}

export default EditModal;
