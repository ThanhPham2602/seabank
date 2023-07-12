import React, { useContext, useEffect } from "react";
import { Button, Drawer } from "antd";
import { UserContext } from "./UserContext";
import userApi from "../../Api/userApi";
import EditDrawer from "./EditDrawer";

function DrawerUser() {
  const { data, dispatch } = useContext(UserContext);

  const id = data.userID;

  useEffect(() => {
    userApi
      .get(id)
      .then((response) => {
        // console.log("response", response);
        dispatch({
          type: "getUserById",
          payload: response.data.body.dataRes,
        });
      })
      .catch((error) => console.error(error));
  }, [id]);

  const onClose = () => {
    dispatch({ type: "drawerClose" });
  };
  return (
    <div>
      <Drawer placement="right" onClose={onClose} open={data.drawerOpen}>
        <EditDrawer />
      </Drawer>
    </div>
  );
}

export default DrawerUser;
