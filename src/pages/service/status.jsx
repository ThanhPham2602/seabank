import userApi from "../../Api/userApi";
import { useContext } from "react";
import { UserContext } from "../User/UserContext";
import { notification } from "antd";

export const HandleStatusChange = (usrUid, checked) => {
  const newStatus = checked ? "ACTIVE" : "INACTIVE";
  const { data, dispatch } = useContext(UserContext);

  userApi
    .inActiveUser(usrUid, newStatus)
    .then((response) => {
      dispatch({
        type: "inActiveUser",
      });
      if (response?.data?.body?.status === "OK") {
        notification.success({
          message: "Cập nhật thành công",
        });
      } else {
        notification.error({
          message: "Cập nhật không thành công",
        });
      }
    })
    .catch((error) => console.error(error));
};
