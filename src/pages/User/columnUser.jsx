import { EditOutlined } from "@ant-design/icons";
// import DrawerUser from "./Drawer";
import { ProFormSwitch } from "@ant-design/pro-components";
import UserModal from "./UserModal";
import Link from "antd/es/typography/Link";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Button } from "antd";

export const Columns = () => {
  const { data, dispatch } = useContext(UserContext);

  return [
    {
      title: "Tài khoản",
      dataIndex: "usrUsername",
      ellipsis: true,
      width: "100px",
      search: true,
      formItemProps: {
        rules: [
          {
            required: true,
            message: "đây là message",
          },
        ],
      },
      render: (_, record) => (
        <Link
          onClick={() => {
            // DrawerUser(record.usrUid);
            dispatch({ type: "drawerOpen", payload: record.usrUid });
            // console.log(" record.usrUid", record.usrUid);
            // console.log("dataUid", data);
          }}
          // id={record.usrUid}
        >
          {record.usrUsername}
        </Link>
      ),
    },
    {
      disable: true,
      title: "Trạng thái",
      dataIndex: "usrStatus",
      filters: true,
      onFilter: true,
      ellipsis: true,
      width: "100px",
      valueType: "select",
      valueEnum: {
        ACTIVE: {
          text: "Hoạt động",
          status: "success",
        },
        INACTIVE: {
          text: "Không hoạt động",
          status: "error",
        },
      },
    },
    {
      title: "Email",
      dataIndex: "usrEmail",
      search: true,
      ellipsis: true,
      width: "150px",
    },
    {
      title: "Phòng ban",
      dataIndex: "usrPosition",
      hideInSearch: true,
      ellipsis: true,
      width: "210px",
    },
    {
      title: "Họ và tên",
      render: (_, record) => {
        const { usrFirstName, usrLastName } = record;
        return `${usrLastName} ${usrFirstName}`;
      },
      search: true,
      ellipsis: true,
      width: "155px",
    },
    {
      title: "Số điện thoại",
      dataIndex: "usrPhone",
      search: true,
      ellipsis: true,
      width: "70px",
    },
    {
      title: "Nhóm",
      dataIndex: "grpName",
      filters: true,
      onFilter: true,
      ellipsis: true,
      valueType: "select",
      width: "120px",
    },
    {
      title: "Ngày tạo",

      dataIndex: "usrCreateDate",
      valueType: "date",
      sorter: true,
      hideInSearch: true,
      ellipsis: true,
      width: "80px",
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "usrUpdateDate",
      valueType: "date",

      hideInSearch: true,
      ellipsis: true,
      width: "110px",
    },

    {
      title: "Hành động",
      valueType: "option",
      ellipsis: true,
      key: "option",
      fixed: "right",
      width: "100px",
      render: (text, record, _, action) => [
        <div
          style={{
            display: "flex",
            alignItems: "center",

            gap: "8px",
            // boxShadow: "0 2px 4px rgba(0, 0, 0, 1)",
          }}
        >
          {/* <UserModal
            key="editable"
            noStyle
            id={record.usrUid}
            style={{ width: "32px", height: "32px", padding: "0" }}
          /> */}
          <Button
            key="editable"
            style={{ width: "32px", padding: "0" }}
            onClick={() => {
              dispatch({ type: "modalOpen", payload: record.usrUid });
              dispatch({ type: "setUserID", payload: record.usrUid });
            }}
            icon={<EditOutlined />}
          />

          <ProFormSwitch
            key={"switch"}
            noStyle
            initialValue={record.usrStatus}
          />
        </div>,
      ],
    },
  ];
};
