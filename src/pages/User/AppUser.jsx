import React from "react";
import UserProvider from "./UserContext";
import User from "./User";

function AppUser() {
  return (
    <UserProvider>
      <User />
    </UserProvider>
  );
}

export default AppUser;
