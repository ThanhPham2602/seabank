import userApi from "../../Api/userApi";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../User/UserContext";
import { notification } from "antd";

const useHandleStatusChange = (usrUid, checked) => {
  // console.log("usrUid: :", usrUid);
  // console.log("checked: :", checked);

  // const newStatus = checked ? "ACTIVE" : "INACTIVE";
  // const { data, dispatch } = useContext(UserContext);
  console.log(123);
  // const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    // const updateUserStatus = () => {
    //   userApi
    //     .inActiveUser(usrUid, newStatus)
    //     .then((response) => {
    //       dispatch({
    //         type: "inActiveUser",
    //       });
    //       if (response?.data?.body?.status === "OK") {
    //         notification.success({
    //           message: "Cập nhật thành công",
    //         });
    //       } else {
    //         notification.error({
    //           message: "Cập nhật không thành công",
    //         });
    //       }
    //     })
    //     .catch((error) => console.error(error));
    // };
    // return updateUserStatus();
  }, []);
  // return isOnline
};
export default useHandleStatusChange;
