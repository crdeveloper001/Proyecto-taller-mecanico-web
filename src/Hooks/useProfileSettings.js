import { useEffect, useState } from "react";
import { updateUser } from '../Services/ProfileServices';

const useProfileSettings = () => {

    const [currentSession, setCurrentSession] = useState(JSON.parse(sessionStorage.getItem("sessionPayloadInfo")));
    const [profileInformation, setProfileInformation] = useState({

        _id: currentSession?.Payload?._id,
        Name: currentSession?.Payload?.Name,
        Surname: currentSession?.Payload?.Surname,
        Phone: currentSession?.Payload?.Phone,
        Email: currentSession?.Payload?.CurrentEmail,
        CurrentPassword: currentSession?.Payload?.CurrentPassword,
        CurrentPosition: currentSession?.Payload?.CurrentPosition,
        Role: currentSession?.Payload?.Role,


    });
    const [enableField, setEnabledField] = useState(true);
    const activeProfileForm = () => {
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
                console.log("No input selected");
                break;
        }

    };

    const createUpdateToProfile = () => {
        return updateUser(profileInformation);
    }


    return {
        profileInformation,
        currentSession,
        enableField,
        activeProfileForm,
        createUpdateToProfile,
        saveProfileInformationByUser
    }


}

export default useProfileSettings;