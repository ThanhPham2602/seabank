import {
  // EllipsisOutlined,
  PlusOutlined,
  SearchOutlined,
  ReloadOutlined,
  // EditOutlined,
} from "@ant-design/icons";
// import type { ActionType, ProColumns } from '@ant-design/pro-components';
import {
  ProTable,
  // TableDropdown,
  // ProFormSwitch,
  // Search,
} from "@ant-design/pro-components";
import { Button } from "antd";
import { useRef, useContext } from "react";
import { UserContext } from "./UserContext";
// import axios from "axios";
import { Columns } from "./columnUser";
import { useEffect } from "react";
import userApi from "../../Api/userApi";
import UserModal from "./UserModal";
import DrawerUser from "./Drawer";
import masterDataApi from "../../Api/MasterDataApi";

export const waitTimePromise = async (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 100);
  });
};

export const waitTime = async (time = 100) => {
  await waitTimePromise(time);
};

const User = () => {
  const actionRef = useRef();
  const { data, dispatch } = useContext(UserContext);

  useEffect(() => {
    userApi
      .getAll()
      .then((response) => {
        // console.log("object res", response.data.body.dataRes.rows);
        const data = response.data.body.dataRes.rows;
        dispatch({ type: "getAllUser", payload: data });
        // setData(newData)
      })
      .catch((error) => console.error(error));
    masterDataApi
      .getAll()
      .then((response) => {
        const data2 = response.data.body.dataRes.ContentSuggest;
        console.log("object data2", data2);
        dispatch({ type: "getAllMDT", payload: data2 });
      })
      .catch((error) => console.error(error));
  }, [dispatch]);

  return (
    <>
      <ProTable
        columns={Columns()}
        actionRef={actionRef}
        cardBordered
        dataSource={data.getAllUser}
        request={async (params, sort, filter) => {
          // actionRef.current?.reload();
          console.log("object params", params);
          const response = await userApi.getAll(params, sort, filter);
          console.log("object res", response);
          return { data: response.result, success: true };
        }}
        scroll={{ x: "1000px" }}
        editable={{
          type: "multiple",
        }}
        rowKey="usrUid"
        search={{
          labelWidth: "auto",
        }}
        searchText
        options={{
          setting: {
            listsHeight: 400,
          },
        }}
        pagination={{
          pageSizeOptions: ["10", "20", "50", "100"],
          pageSize: "10",
        }}
        dateFormatter="string"
        headerTitle="Danh sách người dùng"
        toolBarRender={() => [
          <Button
            key="button"
            icon={<PlusOutlined />}
            onClick={() => {
              dispatch({ type: "modalOpen" });
            }}
            type="primary"
          >
            Tạo người dùng
          </Button>,
        ]}
      />
      <DrawerUser />
      <UserModal />
    </>
  );
};

export default User;
