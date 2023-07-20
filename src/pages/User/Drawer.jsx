import React, { useContext, useEffect } from "react";
import { Button, Drawer } from "antd";
import { UserContext } from "./UserContext";

import EditDrawer from "./EditDrawer";

function DrawerUser() {
  const { data, dispatch } = useContext(UserContext);

  const id = data?.infor;
  console.log("object idDrawe", id);

  const onClose = () => {
    dispatch({ type: "drawerClose" });
  };
  return (
    <div>
      <Drawer
        placement="right"
        size="large"
        onClose={onClose}
        // destroyOnClose={true}
        open={data.drawerOpen}
      >
        <EditDrawer infor={id} />
      </Drawer>
    </div>
  );
}

export default DrawerUser;
