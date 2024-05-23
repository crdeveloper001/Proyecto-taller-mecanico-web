import { useState, useEffect } from "react";
import { Authorization } from "../Services/AuthenticationService";
import { useNavigate } from "react-router-dom";

const useAuthentication = () => {
  const [currentCredentials, setCurrentCredentials] = useState({
    email: "",
    password: "",
  });
  const [sessionPayload, setSessionPayload] = useState({});

  const saveEmailInfo = (e) => {
    setSessionPayload({});
    setCurrentCredentials((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };

  const savePasswordInfo = (e) => {
    setSessionPayload({});
    setCurrentCredentials((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  const AuthorizationFlow = async () => {
    if (currentCredentials !== null) {
      await Authorization(currentCredentials)
        .then(async (results) => {
          if (results.payload !== null) {
            setSessionPayload(results);
            localStorage.setItem(
              "sessionPayloadInfo",
              JSON.stringify(sessionPayload)
            );
          }
        })
        .catch((error) => {
          console.error("general error", error.response.data.auth_key);
          switch (error.response.data.auth_key) {
            case "USER_NOT_FOUND":
              alert("User not found! please try again");
              break;
          }
        });
    }
  };

  return {
    currentCredentials,
    sessionPayload,
    saveEmailInfo,
    savePasswordInfo,
    AuthorizationFlow,
  };
};

export default useAuthentication;
