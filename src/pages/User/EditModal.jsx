import React from "react";
import { Form, Input } from "antd";

function EditModal(props) {
  return (
    <div>
      {/* <Form
        // form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          dataIndex="usrUsername"
        >
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="modifier"
          dataIndex="usrUsername"
          className="collection-create-form_last-form-item"
        >
          <Input type="textarea" />
        </Form.Item>
      </Form> */}
      <Form
      //   labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}
      >
        <Form.Item label="First Name" initialValuee="usrUsername">
          <Input initialValuee={"usrUsername"} />
        </Form.Item>
        <Form.Item label="Last Name">
          <Input disabled />
        </Form.Item>
        <Form.Item label="Email">
          <Input value={"usrUsername"} disabled />
        </Form.Item>
      </Form>
    </div>
  );
}

export default EditModal;
