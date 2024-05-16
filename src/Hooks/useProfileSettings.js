import { useEffect, useState } from "react";
import {updateUser} from '../Services/ProfileServices';

const useProfileSettings = () => {
    const [profileInformation, setProfileInformation] = useState({});
    const [currentPayload, setCurrentPayload] = useState({});
    const [enableField,setEnabledField] = useState(true);

    const activeProfileForm = () =>{
        switch (enableField) {
            case true:
                setEnabledField(false)
                break;
            case false:
                setEnabledField(true)
            default:
                break;
        }
    }

    const getCurrentSession = () => {
        useEffect(() => {
            const profileFromLocalStore = JSON.parse(localStorage.getItem("sessionPayloadInfo"));
            setProfileInformation(profileFromLocalStore.payload);

            console.log(profileFromLocalStore);
        }, [])
    }
    /**UPDATE THE VALUE OF THE STATE ACCORDING TO THE INPUT WHERE USER IS ENTERING INFORMATION */
    const saveProfileInformationByUser = (e) => {
        switch (e.target.id) {
            case "InputName":
                setProfileInformation((prevState) => ({
                    ...prevState,
                    Nombre: e.target.value,
                }));
                break;
            case "InputLastName":
                setProfileInformation((prevState) => ({
                    ...prevState,
                    Apellidos: e.target.value,
                }));
                break;
            case "InputEmail":
                setProfileInformation((prevState) => ({
                    ...prevState,
                    CorreoElectronico: e.target.value,
                }));
                break;
            case "InputPhone":
                setProfileInformation((prevState) => ({
                    ...prevState,
                    Telefono: e.target.value,
                }));
                break;
            case "InputPassword":
                setProfileInformation((prevState) => ({
                    ...prevState,
                    ClaveAcceso: e.target.value,
                }));
                break;

            default:
                console.log("no input selected");
                break;
        }

    };

    const createUpdateToProfile = () =>{
        
        updateUser(profileInformation);

    }

    

    return {
        profileInformation,
        currentPayload,
        enableField,
        activeProfileForm,
        getCurrentSession,
        createUpdateToProfile,
        saveProfileInformationByUser
    }


}

export default useProfileSettings;