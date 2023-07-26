import { PlusOutlined } from "@ant-design/icons";

import { ProTable } from "@ant-design/pro-components";
import { Button } from "antd";
import { useRef, useContext } from "react";
import { UserContext } from "./UserContext";

import { Columns } from "./columnUser";
import { useEffect } from "react";
import userApi from "../../Api/userApi";
import UserModal from "./UserModal";
import DrawerUser from "./Drawer";
import masterDataApi from "../../Api/MasterDataApi";

const User = () => {
  const actionRef = useRef();
  const { data, dispatch } = useContext(UserContext);

  // useEffect(() => {
  //   userApi
  //     .getAll({ page: 1, pageSize: 10 })
  //     .then((response) => {
  //       // console.log("object res", response.data.body.dataRes.rows);
  //       const data = response.data.body.dataRes.rows;
  //       dispatch({ type: "getAllUser", payload: data });
  //       // setData(newData)
  //     })
  //     .catch((error) => console.error(error));
  //   masterDataApi
  //     .getAll()
  //     .then((response) => {
  //       const data2 = response.data.body.dataRes;
  //       console.log("object data2", data2);
  //       dispatch({ type: "getAllMDT", payload: data2 });
  //     })
  //     .catch((error) => console.error(error));

  //   masterDataApi
  //     .getGroups({ page: 1, pageSize: 10 })
  //     .then((response) => {
  //       const data3 = response.data.body.dataRes.rows;
  //       console.log("object data3", data3);
  //       dispatch({ type: "getGroups", payload: data3 });
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <>
      <ProTable
        columns={Columns()}
        actionRef={actionRef}
        cardBordered
        dataSource={data.getAllUser?.rows}
        request={async (params, sort, filter) => {
          // console.log("object params", params);
          // console.log("object filter", filter);
          const filtersData = {
            keyword: params.keyword,
            page: params.current,
            pageSize: params.pageSize,
            usrUsername: params.usrUsername,
            usrStatus: params.usrStatus,
            usrEmail: params.usrEmail,
            usrPhone: params.usrPhone,
            grpCode: params.grpCode,
            code: params.code,
          };

          const response = await userApi.getAll(filtersData);
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
          labelWidth: "120",
        }}
        searchText
        options={{
          // setting: {
          //   listsHeight: 300,
          // },
          search: true,
        }}
        pagination={{
          pageSizeOptions: ["10", "20", "50", "100"],
          // pageSize: "10",
          defaultPageSize: 10,
          total: data.getAllUser?.totalRecord,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} trên ${total} người dùng`,
        }}
        dateFormatter="string"
        headerTitle="Danh sách người dùng"
        toolbar={{
          actions: [
            <Button
              key="button"
              style={{ backgroundColor: "#FF4D4F" }}
              icon={<PlusOutlined />}
              onClick={() => {
                dispatch({ type: "modalOpen", payload: null });
              }}
              type="primary"
            >
              Tạo người dùng
            </Button>,
          ],
        }}
      />
      <DrawerUser />
      <UserModal />
    </>
  );
};

export default User;
