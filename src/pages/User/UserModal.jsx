import React, { useState } from "react";
import { Button, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";
import EditModal from "./EditModal";

const UserModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* <Button
        type="primary"
        onClick={showModal}
        // icon={<EditOutlined />}
        style={{
          backgroundColor: "white",
          color: "black",
          border: "1px solid ",
          width: "32px",
        }}
      >
        <EditOutlined />
      </Button> */}
      <Button
        key="editable"
        style={{ width: "32px", padding: "0" }}
        onClick={showModal}
        icon={<EditOutlined />}
      ></Button>

      <Modal
        title="Cập nhật người dùng"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <EditModal />
      </Modal>
    </>
  );
};

export default UserModal;
