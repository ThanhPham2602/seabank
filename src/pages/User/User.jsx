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
import { Button, Dropdown, Select, Space, Tag } from "antd";
import { useRef, useContext } from "react";
import { UserContext } from "./UserContext";
// import axios from "axios";
import { columns } from "./columnUser";

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
  // console.log("object data", data);
  const { userData } = useContext(UserContext);
  console.log("object userData", userData);

  const handleSearch = (value) => {
    console.log("Từ khóa tìm kiếm:", value);
    // Xử lý tìm kiếm dữ liệu tại đây
  };

  return (
    <ProTable
      columns={columns}
      actionRef={actionRef}
      cardBordered
      dataSource={userData}
      request={async (params, sort, filter) => {
        console.log(sort, filter);
        console.log("object params", params);
        const response = await {
          page: params.current,
          pageSize: params.pageSize,
        };
        // await waitTime(1000);
        // console.log("accesstoken", sessionStorage.getItem("accessToken"));
        return { data: response.result, success: Boolean, total: Number };
      }}
      search={{
        filterType: "light",
        placeholder: "Tìm kiếm",
        onSearch: handleSearch,
        // onReset: handleReset,
        // searchText: "Tìm",
        // resetText: "Đặt lại",
        // enterButtonText: "Tìm",
        // resetButtonProps: {
        //   icon: <ReloadOutlined />,
        // },
        // submitButtonProps: {
        //   icon: <SearchOutlined />,
        // },
      }}
      scroll={{ x: "1000px" }}
      editable={{
        type: "multiple",
      }}
      // columnsState={{
      //   persistenceKey: "pro-table-singe-demos",
      //   persistenceType: "localStorage",
      //   onChange(value) {
      //     // console.log("value: ", value);
      //   },
      // }}
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
      // form={{
      //   syncToUrl: (values, type) => {
      //     if (type === "get") {
      //       return {
      //         ...values,
      //         created_at: [values.startTime, values.endTime],
      //       };
      //     }
      //     return values;
      //   },
      // }}
      pagination={{
        pageSizeOptions: ["10", "20", "50", "100"],
        pageSize: "10",
        // onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle="Danh sách người dùng"
      toolBarRender={() => [
        // <Search />,
        <Button
          key="button"
          icon={<PlusOutlined />}
          onClick={() => {
            actionRef.current?.reload();
          }}
          type="primary"
        >
          Tạo người dùng
        </Button>,
      ]}
    />
  );
};

export default User;
