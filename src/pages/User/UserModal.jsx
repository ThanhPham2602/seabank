import React, { useContext, useEffect } from "react";
import { Modal } from "antd";
// import { EditOutlined } from "@ant-design/icons";
import EditModal from "./EditModal";
import userApi from "../../Api/userApi";
import { UserContext } from "./UserContext";

const UserModal = () => {
  const { data, dispatch } = useContext(UserContext);

  const id = data.userID;
  const check = data.id;

  useEffect(() => {
    userApi
      .get(id)
      .then((response) => {
        // console.log("object res", response.data.body.dataRes);
        dispatch({
          type: "getUserById",
          payload: response.data.body.dataRes,
        });
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleCancel = () => {
    dispatch({ type: "modalClose" });
    dispatch({ type: "setUserID", payload: undefined });
  };

  return (
    <>
      <Modal
        width={"800px"}
        title={check ? "Cập nhật người dùng" : "Tạo mới người dùng"}
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
