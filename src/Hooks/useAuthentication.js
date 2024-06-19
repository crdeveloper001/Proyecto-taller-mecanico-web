import {useState} from "react";
import {Authorization} from "../Services/AuthenticationService";

const useAuthentication = () => {
    const [currentCredentials, setCurrentCredentials] = useState({
        Email: "",
        Password: "",
    });
    const [sessionPayload, setSessionPayload] = useState({
        Auth_key: "",
        Payload: {
            id: 0,
            Name: "",
            Surname: "",
            Phone: 0,
            CurrentEmail: "",
            CurrentPassword: "",
            CurrentPosition: "",
            Role: ""
        }
    });
    const [isAuthenticated, setIsAutenticated] = useState(false)
    const saveEmailInfo = (e) => {
        setSessionPayload({});
        setCurrentCredentials((prevState) => ({
            ...prevState,
            Email: e.target.value,
        }));
    };

    const savePasswordInfo = (e) => {
        setSessionPayload({});
        setCurrentCredentials((prevState) => ({
            ...prevState,
            Password: e.target.value,
        }));
    };
    /*Send request to backend server and return a payload with authorize or no authorize data*/
    const authorizationFlow = async () => {
        sessionStorage.clear();
        try {
            if (currentCredentials !== null) {
                const dataResponse = await Authorization(currentCredentials);
                switch (dataResponse.data.Auth_key) {
                    case "USER_AUTHORIZED":
                        // Update session payload state
                        setSessionPayload(dataResponse.data);
                        // Ensure state is updated before storing
                        setTimeout(() => {
                            sessionStorage.setItem("sessionPayloadInfo", JSON.stringify(dataResponse.data));
                            setIsAutenticated(true);

                        }, 100);
                        return dataResponse.data
                        break;
                    default:
                        alert("General error on the app, please try again or later");
                }
            }
        } catch (error) {
            if (error.response && error.response.data) {
                alert("User Not Found");
                sessionStorage.clear();

            }
        }
    };


    const authorizationNavigation = () => {
        if (sessionPayload !== null) {
            if (sessionPayload?.Auth_key === "USER_AUTHORIZED") {
                setIsAutenticated(true)
                console.log("user is authenticated")
            } else {
                console.log("user not authenticated")
            }
        }
    }

    return {
        currentCredentials,
        sessionPayload,
        isAuthenticated,
        saveEmailInfo,
        savePasswordInfo,
        authorizationFlow,
        authorizationNavigation
    };
};

export default useAuthentication;
