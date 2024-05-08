import { useState, useEffect } from "react";
import { Authorization } from "../Services/AuthenticationService";
const useLoginAuth = () => {
    const [currentCredentials, setCurrentCredentials] = useState({
        email: '',
        password: ''
    })
    const [sessionPayload, setSessionPayload] = useState({})

    const saveEmailInfo = (e) => {
        setSessionPayload({})
        console.log(e.target.value);
        setCurrentCredentials(prevState => ({
            ...prevState,
            email: e.target.value
        }));
    };

    const savePasswordInfo = (e) => {
        setSessionPayload({})
        console.log(e.target.value);
        setCurrentCredentials(prevState => ({
            ...prevState,
            password: e.target.value
        }));
    };


    const AuthorizationFlow = async () => {



        if (currentCredentials !== null) {
            await Authorization(currentCredentials)
                .then(async results => {
                    debugger
                    await setSessionPayload(results);

                    console.log("payload", sessionPayload);
                }).finally(() => {
                    
                    switch (sessionPayload.auth_Key) {
                        case "USER_AUTHORIZED":
                            alert("good credentials")
                            break;
                        case "NOT_FOUND":
                            alert("bad credentials")

                    }
                    console.log("authorization flow completed");
                })




            //return sessionPayload;
        }



    }

    return {
        currentCredentials,
        sessionPayload,
        saveEmailInfo,
        savePasswordInfo,
        AuthorizationFlow
    }


}

export default useLoginAuth