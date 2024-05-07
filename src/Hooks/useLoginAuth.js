import { useState,useEffect } from "react";
import { Authorization } from "../Services/AuthenticationService";
const useLoginAuth = () =>{
    const [currentCredentials,setCurrentCredentials] = useState({
        Email:'',
        Password:''
    })

    
    const saveEmailInfo = (e) => {
        console.log(e.target.value);
        setCurrentCredentials(prevState => ({
            ...prevState,
            Email: e.target.value
        }));
    };
    
    const savePasswordInfo = (e) => {
        console.log(e.target.value);
        setCurrentCredentials(prevState => ({
            ...prevState,
            Password: e.target.value
        }));
    };


    const AuthorizationFlow = () => {

        if (currentCredentials !== null) {
           const response = Authorization(currentCredentials);
           

           return response;
        }   



    }

   return{
    currentCredentials,
    saveEmailInfo,
    savePasswordInfo,
    AuthorizationFlow
   }


}

export default useLoginAuth