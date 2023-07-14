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

// export const waitTimePromise = async (time = 100) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, 100);
//   });
// };

// export const waitTime = async (time = 100) => {
//   await waitTimePromise(time);
// };

const User = () => {
  const actionRef = useRef();
  const { data, dispatch } = useContext(UserContext);

  useEffect(() => {
    userApi
      .getAll({ page: 1, pageSize: 10 })
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
        const data2 = response.data.body.dataRes;
        console.log("object data2", data2);
        dispatch({ type: "getAllMDT", payload: data2 });
      })
      .catch((error) => console.error(error));

    masterDataApi
      .getGroups({ page: 1, pageSize: 10 })
      .then((response) => {
        const data3 = response.data.body.dataRes.rows;
        console.log("object data3", data3);
        dispatch({ type: "getGroups", payload: data3 });
      })
      .catch((error) => console.error(error));
  }, []);

  // const handleSearch = (value) => {
  //   console.log("object value::", value);
  //   actionRef.current?.reload({ searchText: value });
  // };

  return (
    <>
      <ProTable
        columns={Columns()}
        actionRef={actionRef}
        cardBordered
        dataSource={data.getAllUser?.rows}
        request={async (params, sort, filter) => {
          console.log("object params", params);
          // console.log("object sort", sort);
          console.log("object filter", filter);

          const response = await userApi.getAll({
            page: params.current,
            pageSize: params.pageSize,
          });
          const data = response?.data?.body?.dataRes;
          dispatch({ type: "getAllUser", payload: data });
          return { data: data, success: true };
        }}
        scroll={{ x: "1000px" }}
        editable={{
          type: "multiple",
        }}
        rowKey="usrUid"
        search={{
          labelWidth: "auto",
        }}
        // onSearch={handleSearch}
        searchText
        options={{
          setting: {
            listsHeight: 400,
          },
        }}
        pagination={{
          pageSizeOptions: ["10", "20", "50", "100"],
          // pageSize: "10",
          defaultPageSize: 10,
          total: data.getAllUser?.totalRecord,
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
