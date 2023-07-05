import {
  EllipsisOutlined,
  PlusOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Row, Select, Space, Tag } from "antd";
import {
  ProTable,
  TableDropdown,
  ProFormSwitch,
  Search,
} from "@ant-design/pro-components";
import UserModal from "./UserModal";
import DrawerUser from "./Drawer";
import Link from "antd/es/typography/Link";

// const [open, setOpen] = useState(false);
//   const showDrawer = () => {
//     setOpen(true);
//   };
//   const onClose = () => {
//     setOpen(false);
//   };
export const columns = [
  //   {
  //     dataIndex: "index",
  //     valueType: "indexBorder",
  //     width: 48,
  //   },
  {
    title: "Tài khoản",
    dataIndex: "usrUsername",
    // copyable: true,
    ellipsis: true,
    width: "100px",
    search: true,
    // tip: "đây là tip",
    formItemProps: {
      rules: [
        {
          required: true,
          message: "đây là message",
        },
      ],
    },
    // render: (_, record) => {<Link onClick={()=>(showDrawer)}>{record.usrUsername}</Link> },
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
        status: "error",
      },
      INACTIVE: {
        text: "Không hoạt động",
        status: "Success",
        // disabled: true,
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
  // {
  //   disable: true,
  //   title: "Email",
  //   dataIndex: "labels",
  //   search: false,
  //   // renderFormItem: (_, { userData }) => {
  //   //   return userData(_);
  //   // },
  //   render: (_, userData) => (
  //     <Space>
  //       {userData.map(({ name, color }) => (
  //         <Tag color={color} key={name}>
  //           {name}
  //         </Tag>
  //       ))}
  //     </Space>
  //   ),
  // },
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
    // valueEnum:
  },
  {
    title: "Ngày tạo",
    // key: "showTime",
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
    // hideInTable: true,
    // search: {
    //   transform: (value) => {
    //     return {
    //       startTime: value[0],
    //       endTime: value[1],
    //     };
    //   },
    // },
    hideInSearch: true,
    ellipsis: true,
    width: "110px",
  },
  {
    title: "Hành động",
    valueType: "option",
    ellipsis: true,
    key: "option",

    width: "100px",
    render: (text, record, _, action) => [
      <div
        style={{
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          // alignContent: "center",
          gap: "8px",
          // boxShadow: "0 2px 4px rgba(0, 0, 0, 1)",
        }}
      >
        <UserModal
          key="editable"
          noStyle
          style={{ width: "32px", height: "32px", padding: "0" }}
          // onClick={()=> }
        />
        {/* <Button
          key="editable"
          style={{ width: "32px", padding: "0" }}
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
          icon={<EditOutlined />}
        ></Button> */}

        <ProFormSwitch key={"switch"} noStyle initialValue={record.usrStatus} />
      </div>,

      // <TableDropdown
      //   key="actionGroup"
      //   onSelect={() => action?.reload()}
      //   menus={[
      //     { key: "copy", name: "copy" },
      //     { key: "delete", name: "xóa" },
      //   ]}
      // />,
    ],
  },
];
