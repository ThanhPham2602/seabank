import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Skeleton, Button } from "antd";
import { ProFormSwitch } from "@ant-design/pro-components";
import { EditOutlined } from "@ant-design/icons";
function EditDrawer() {
  const { data, dispatch } = useContext(UserContext);
  const infor = data?.getUserById;
  console.log("object info", infor);

  return (
    <Skeleton loading={!infor ? true : false}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>
          {infor?.usrLastName} {infor?.usrFirstName}
        </h2>
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
              dispatch({ type: "modalOpen", payload: infor?.usrUid });
            }}
            icon={<EditOutlined />}
          />

          <ProFormSwitch
            key={"switch"}
            noStyle
            initialValue={infor?.usrStatus}
          />
        </div>
      </div>
      <div>
        <p>Tài khoản: {` ${infor?.usrUsername}`} </p>
        <p>Trạng thái: </p>
        <p>
          Email:
          {` ${infor?.usrEmail}`}
        </p>
        <p>
          Phòng ban:
          {` ${infor?.usrPosition}`}
        </p>
        <p>
          Họ và tên:
          {` ${infor?.usrLastName} ${infor?.usrFirstName}`}
        </p>
        <p>
          Số điện thoại:
          {/* {`${"usrPhone"}`} */}
        </p>
        <p>Nhóm nghiệp vụ: </p>
        <p>
          Nhóm:
          {/* {`${"grpName"}`} */}
        </p>
        <p>Khu vực: </p>
        <p>Công việc: </p>
      </div>
    </Skeleton>
  );
}

export default EditDrawer;
