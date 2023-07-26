import { EditOutlined } from "@ant-design/icons";
import masterDataApi from "../../Api/MasterDataApi";
import Link from "antd/es/typography/Link";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Badge, Button, notification, Switch } from "antd";
import userApi from "../../Api/userApi";

export const Columns = () => {
  const { data, dispatch } = useContext(UserContext);
  console.log("object data", data);
  // const UserList = data.getAllUser;

  // const groupName = data?.getGroups;
  // const typeBussiness = data?.getAllMDT?.TypeBusiness;

  // console.log("object type", typeBussiness);
  // console.log("object type 1111111111", groupName);

  const handleStatusChange = (usrUid, checked) => {
    const newStatus = checked ? "ACTIVE" : "INACTIVE";
    // console.log("object data", data);
    dispatch({ type: "loadingChecked", payload: usrUid });
    console.log("newStatus", checked);
    userApi
      .inActiveUser(usrUid, newStatus)
      .then((response) => {
        dispatch({
          type: "inActiveUser",
        });

        if (response?.data?.body?.status === "OK") {
          dispatch({ type: "updateUserStatus", payload: checked });
          notification.success({
            message: "Cập nhật thành công",
          });
        } else {
          notification.error({
            message: "Cập nhật không thành công",
          });
        }
        dispatch({ type: "loadingChecked", payload: usrUid });

        // console.log("data: : sạdasd", data);
      })
      .catch((error) => {
        console.error(error);
        notification.error({
          message: "Lỗi mạng",
        });
      });
  };

  return [
    {
      title: "Tài khoản",
      dataIndex: "usrUsername",
      ellipsis: true,
      width: "100px",
      search: true,
      // colSize: ["md", "xs", "sm"],
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
            console.log("id column", record);
            dispatch({ type: "drawerOpen", payload: record });
            // userApi
            //   .get(record.usrUid)
            //   .then((response) => {
            //     console.log("response", response);
            //     dispatch({
            //       type: "getUserById",
            //       payload: response.data.body.dataRes,
            //     });

            //   })
            //   .catch((error) => console.error(error));
          }}
        >
          {record.usrUsername}
          {/* {console.log("object", record)} */}
        </Link>
      ),
    },
    {
      // disable: true,
      title: "Trạng thái",
      dataIndex: "usrStatus",
      filters: true,
      onFilter: true,
      search: true,
      // colSize: ["md", "xs", "sm"],
      ellipsis: true,
      width: "100px",
      valueType: "select",
      initialValue: "ACTIVE",
      valueEnum: {
        ACTIVE: {
          text: <Badge status="success" text="Hoạt động"></Badge>,
        },
        INACTIVE: {
          text: <Badge status="error" text="Không hoạt động"></Badge>,
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

      hideInSearch: true,
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
      hideInSearch: true,
    },
    {
      title: "Nhóm",
      dataIndex: "grpCode",
      filters: true,
      onFilter: true,
      ellipsis: true,
      valueType: "select",
      width: "120px",
      hideInTable: true,
      // valueEnum:
      //   groupName && groupName.length > 0
      //     ? groupName.reduce((acc, option) => {
      //         acc[option.grpCode] = { text: option.grpName };
      //         return acc;
      //       }, {})
      //     : {},
      request: async () => {
        const res = await masterDataApi.getGroups({ page: 1, pageSize: 10 });
        const data = res.data.body.dataRes.rows;
        dispatch({ type: "getGroups", payload: data });
        // console.log("res:: ", res.data.body.dataRes.rows);
        return data.map((value) => ({
          label: value.grpName,
          value: value.grpCode,
        }));
      },
    },
    {
      title: "Nhóm nghiệp vụ",
      dataIndex: "code",
      filters: true,
      onFilter: true,
      ellipsis: true,
      hideInTable: true,
      valueType: "select",
      width: "120px",
      // valueEnum:
      //   typeBussiness && typeBussiness.length > 0
      //     ? typeBussiness.reduce((acc, option) => {
      //         acc[option.code] = { text: option.name };
      //         return acc;
      //       }, {})
      //     : {},
      request: async () => {
        //   masterDataApi
        // .getAll()
        // .then((response) => {
        //   const data2 = response.data.body.dataRes;
        //   console.log("object data2", data2);
        //   dispatch({ type: "getAllMDT", payload: data2 });
        // })
        // .catch((error) => console.error(error));
        // }
        const res = await masterDataApi.getAll();

        const data = res.data.body.dataRes.TypeBusiness;
        dispatch({ type: "getAllMDT", payload: data });
        // console.log("res:: ", data);
        return data.map((value) => ({
          label: value.name,
          value: value.code,
        }));
      },
    },
    {
      title: "Nhóm nghiệp vụ",
      dataIndex: "typeBusiness",
      filters: true,
      onFilter: true,
      ellipsis: true,
      // valueType: "select",
      width: "120px",
      hideInSearch: true,
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
          <Button
            key="editable"
            style={{ width: "32px", padding: "0" }}
            onClick={() => {
              dispatch({ type: "modalOpen", payload: record.usrUid });
              dispatch({ type: "setUserID", payload: record.usrUid });
              userApi
                .get(record.usrUid)
                .then((response) => {
                  // console.log("object res", response.data.body.dataRes);
                  dispatch({
                    type: "getUserById",
                    payload: response.data.body.dataRes,
                  });
                })
                .catch((error) => console.error(error));
            }}
            icon={<EditOutlined />}
          />
          {console.log(" record ", record.loading)}
          <Switch
            key="switch"
            defaultChecked={record.usrStatus === "ACTIVE"}
            // checked={}
            loading={record.loading}
            // onClick={console.log("object record", record)}
            onChange={(checked) => handleStatusChange(record.usrUid, checked)}
          />
        </div>,
      ],
    },
  ];
};
