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
            debugger
            const profileFromLocalStore = sessionStorage.getItem("sessionPayloadInfo");

            setProfileInformation(profileFromLocalStore.Payload);
            console.log(profileFromLocalStore);
        }, [])
    }
    /**UPDATE THE VALUE OF THE STATE ACCORDING TO THE INPUT WHERE USER IS ENTERING INFORMATION */
    const saveProfileInformationByUser = (e) => {
        switch (e.target.id) {
            case "InputName":
                setProfileInformation((prevState) => ({
                    ...prevState,
                    Name: e.target.value,
                }));
                break;
            case "InputLastName":
                setProfileInformation((prevState) => ({
                    ...prevState,
                    Surname: e.target.value,
                }));
                break;
            case "InputEmail":
                setProfileInformation((prevState) => ({
                    ...prevState,
                    CurrentEmail: e.target.value,
                }));
                break;
            case "InputPhone":
                setProfileInformation((prevState) => ({
                    ...prevState,
                    Phone: e.target.value,
                }));
                break;
            case "InputPassword":
                setProfileInformation((prevState) => ({
                    ...prevState,
                    CurrentPassword: e.target.value,
                }));
                break;

            default:
                console.log("no input selected");
                break;
        }

    };

    const createUpdateToProfile = () =>{
        return updateUser(profileInformation);
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