import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Skeleton, Button, Switch } from "antd";

import { EditOutlined } from "@ant-design/icons";
import useHandleStatusChange from "../service/status";
function EditDrawer({ infor, id }) {
  const { data, dispatch } = useContext(UserContext);
  console.log("infor", infor);

  // const { handleStatusChange } = useHandleStatusChange();
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
            key="editabledrawer"
            style={{ width: "32px", padding: "0" }}
            onClick={() => {
              dispatch({ type: "modalOpen", payload: infor?.usrUid });
              dispatch({ type: "setUserID", payload: infor?.usrUid });
              console.log("state", data);
              console.log("rec", infor);
            }}
            icon={<EditOutlined />}
          />

          <Switch
            key={"switch"}
            defaultChecked={infor?.usrStatus === "ACTIVE"}
            // checked={ === "ACTIVE"}
            // onChange={handleStatusChange}
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
          {`${infor?.grpName}`}
        </p>
        <p>Khu vực: </p>
        <p>Công việc: </p>
      </div>
    </Skeleton>
  );
}

export default EditDrawer;
