import React, { createContext, useReducer } from "react";
// import axios from "axios";
// import userApi from "../../Api/userApi";
// import { type } from "@testing-library/user-event/dist/type";

export const UserContext = createContext();

const initialData = {
  getAllUser: {},
  modalOpen: false,
  drawerOpen: false,
  userID: null,

  // loadingChecked: false,
};
const reducer = (state, action) => {
  // console.log("object state", state);
  switch (action.type) {
    // case "getAllUser":
    //   return { ...state, getAllUser: action.payload };
    case "getAllUser": {
      const def = action.payload?.rows;

      let newRowsWithLoading = def.map((item) => ({
        ...item,
        loading: false,
      }));
      return {
        ...state,
        getAllUser: {
          ...action.payload,
          rows: newRowsWithLoading,
        },
      };
    }

    case "getUserById":
      return { ...state, getUserById: action.payload };

    case "addUser":
      return { ...state, addUser: action.payload };

    case "updateUser":
      return { ...state };

    case "inActiveUser":
      return { ...state };

    case "removeUser":
      return { ...state };

    case "modalOpen":
      return { ...state, modalOpen: true, userID: action.payload };

    case "modalClose":
      return { ...state, modalOpen: false };

    case "drawerOpen":
      return { ...state, drawerOpen: true, infor: action.payload };

    case "drawerClose":
      return { ...state, drawerOpen: false, userID: null };

    case "setUserID":
      return { ...state, id: action.payload };

    case "getAllMDT":
      return { ...state, getAllMDT: action.payload };

    case "getGroups":
      return { ...state, getGroups: action.payload };

    case "loadingChecked": {
      // const abd = { ...state, loading: action.payload };
      console.log("abd", action.payload);

      const ind = state?.getAllUser?.rows.findIndex(
        (item) => item.usrUid === action.payload
      );
      const List = [...state?.getAllUser?.rows];
      List[ind] = {
        ...List[ind],
        loading: !List[ind].loading,
      };

      // const loadingCheck = state?.getAllUser?.rows.map((item) =>
      //   item.usrUid === action.payload
      //     ? { ...item, loading: !item.loading }
      //     : item
      // );

      return {
        ...state,
        getAllUser: {
          ...state.getAllUser,
          rows: List,
        },
      };
    }

    case "updateUserStatus":
      return { ...state, updateStatus: action.payload };

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
