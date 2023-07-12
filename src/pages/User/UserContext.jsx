import React, { createContext, useReducer } from "react";
// import axios from "axios";
// import userApi from "../../Api/userApi";
// import { type } from "@testing-library/user-event/dist/type";

export const UserContext = createContext();

const initialData = { modalOpen: false, drawerOpen: false, userID: null };
const reducer = (state, action) => {
  // console.log("object payload", action.payload);
  // console.log("object state", state);
  switch (action.type) {
    case "getAllUser":
      return { ...state, getAllUser: action.payload };

    case "getUserById":
      return { ...state, getUserById: action.payload };

    case "addUser":
      return { ...state, addUser: action.payload };

    case "updateUser":
      return { ...state };

    case "removeUser":
      return { ...state };

    case "modalOpen":
      return { ...state, modalOpen: true, userID: action.payload };

    case "modalClose":
      return { ...state, modalOpen: false, userID: null };

    case "drawerOpen":
      return { ...state, drawerOpen: true, userID: action.payload };

    case "drawerClose":
      return { ...state, drawerOpen: false, userID: null };

    case "setUserID":
      return { ...state, id: action.payload };

    case "getAllMDT":
      return { ...state, getAllMDT: action.payload };

    default:
      return state;
  }
};

function UserProvider({ children }) {
  // const [userData, setUserData] = useState([]);

  const [data, dispatch] = useReducer(reducer, initialData);

  // UserDispatch("getAllUser");

  return (
    <UserContext.Provider value={{ data, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
