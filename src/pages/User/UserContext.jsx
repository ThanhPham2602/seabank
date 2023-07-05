import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [userData, setUserData] = useState([]);
  // console.log("object child", children);
  const CallApi = axios.post(
    "https://gwextdev.seabank.com.vn/seabank/seabank-external/api/v1/ticketing/tttn/feticketing/process",
    {
      body: {
        command: "GET_ENQUIRY",
        enquiry: {
          authenType: "getUsers",
          accessToken: sessionStorage.getItem("accessToken"),
          searchDataInfo: {
            paginatorInfo: {
              page: 1,
              pageSize: 250,
            },
            filterInfo: {
              searchValue: "",
              usrStatus: "ACTIVE",
              usrRole: "",
            },
            sortingInfo: {
              sortColumn: "usr_create_date",
              direction: "desc",
            },
          },
        },
      },
      header: {
        api: "TTTN_TICKETING_API",
        apiKey: "MS13276ZIDANDWYSB2Cl89VARNAAH",
        channel: "Ticketing",
        context: "PC",
        location: "10.9.12.90",
        priority: "1",
        reqType: "REQUEST",
        requestAPI: "t24Server",
        requestNode: "10.9.10.14",
        subChannel: "VHT",
        synasyn: "true",
        trusted: "false",
        userID: "1365778600",
      },
    },
    {
      headers: {
        "X-Ibm-Client-Id": "e71a73007d4f0621989a1c83f44ff9be",
        "X-Ibm-Client-Secret": "cc40a9b637f745a4d042850b1e89fdd5",
      },
    }
  );

  useEffect(() => {
    CallApi.then((response) => {
      console.log("object res", response.data.body.dataRes.rows);
      setUserData(response.data.body.dataRes.rows);
      console.log("object data", userData);
    }).catch((error) => console.error(error));
  }, []);

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
