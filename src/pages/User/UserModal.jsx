import React, { useContext, useEffect } from "react";
import { Modal } from "antd";
// import { EditOutlined } from "@ant-design/icons";
import EditModal from "./EditModal";
import userApi from "../../Api/userApi";
import { UserContext } from "./UserContext";

const UserModal = () => {
  const { data, dispatch } = useContext(UserContext);

  const id = data.userID;
  const checkID = data.id;

  // console.log("id: : ", id);
  // console.log("data: : ", data);
  // console.log("check: :", checkID);
  // const HandleModal = async () => {
  //   await userApi
  //     .get(id)
  //     .then((response) => {
  //       // console.log("object res", response.data.body.dataRes);
  //       dispatch({
  //         type: "getUserById",
  //         payload: response.data.body.dataRes,
  //       });
  //     })
  //     .catch((error) => console.error(error));
  // };

  const handleCancel = () => {
    dispatch({ type: "modalClose" });
    dispatch({ type: "setUserID", payload: undefined });
  };

  return (
    <>
      <Modal
        // onClick={HandleModal}
        // loading={!checkID ? true : false}
        width={"800px"}
        title={checkID ? "Cập nhật người dùng" : "Tạo mới người dùng"}
        open={data.modalOpen}
        destroyOnClose
        onCancel={handleCancel}
        footer={null}
      >
        <EditModal />
      </Modal>
    </>
  );
};

export default UserModal;
