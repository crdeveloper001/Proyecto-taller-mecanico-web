import { useEffect, useState } from "react";
import { addClient, deleteClient, getClients, searchClientByName, updateClient } from '../Services/ClientsService';

const useClientsSettings = () => {

    const [newClient, setNewClient] = useState({
        _id: "",
        Name: "",
        Surname: "",
        Email: "",
        Phone: 0,
        CurrentAddress: "",
        VehicleDetails: {
            _id: 0,
            Brand: "",
            Model: "",
            Type: "",
            EngineCapacity: 0,
            RegistrationPlate: ""
        }
    });
    const [currentClients, setCurrentClients] = useState([{}])
    const [selectedClient, setSelectedClient] = useState({})
    const [confirmationAdded, setConfirmationAdded] = useState(false);
    const [showUserInformation, setShowUserInformation] = useState(false);
    const [showCreateNewJob, setShowCreateNewJob] = useState(false);

    const handleCloseUserInformation = () => {
        setShowUserInformation(false);
    }
    const handleCloseCreateNewJob = () => {
        setShowCreateNewJob(false);
    }
    const handleShowUserInformation = (client) => {
        saveClientDetailSelected(client);
        setShowUserInformation(true);
      };
    
      const handleShowCreateJob = (client) => {
        saveClientDetailSelected(client);
        setShowCreateNewJob(true);
      };
    

    const saveClientDetailSelected = (details) => {
        setSelectedClient(details);
    }

    const getCurrentClients = () => {

        useEffect(() => {

            const response = getClients().then(results => {
                setCurrentClients(results);
            }).catch(error => {
                console.log(error);
            })
        }, [])
    }

    const createNewClient = (e) => {

        addClient(newClient).then(results => {
            setConfirmationAdded(true);

        }).catch(error => {
            alert(error)
        })
        cleanFields(e)

    }

    const updateClientData = async () => {
        setNewClient((prevState) => ({
            ...prevState,
            _id: e.target.value,
        }));
        const response = updateClient(newClient);
        return response;
    }

    const deleteClientSelected = (id) => {
        const response = deleteClient(id);
        return response;
    }

    const searchOneClient = async (e) => {
        if (e.target.value === "") {
            const response = getClients().then(results => {
                setCurrentClients(results);
            }).catch(error => {
                console.log(error);
            })
            return;
        }

        try {
            const items = await searchClientByName(e.target.value);
            setCurrentClients(items); 
        } catch (error) {
            console.error('Error retrieving clients:', error.response?.data || error.message);
            setCurrentClients([]); 
        }
    };


    const saveNewClient = (e) => {
        setNewClient((prevState) => {
            switch (e.target.id) {
                case "InputId":
                    return {
                        ...prevState,
                        _id: e.target.value,
                    };
                case "InputName":
                    return {
                        ...prevState,
                        Name: e.target.value,
                    };
                case "InputLastName":
                    return {
                        ...prevState,
                        Surname: e.target.value,
                    };
                case "InputEmail":
                    return {
                        ...prevState,
                        Email: e.target.value,
                    };
                case "InputPhone":
                    return {
                        ...prevState,
                        Phone: e.target.value,
                    };
                case "InputAddress":
                    return {
                        ...prevState,
                        CurrentAddress: e.target.value,
                    };
                case "InputVehicleBrand":
                    return {
                        ...prevState,
                        VehicleDetails: {
                            ...prevState.VehicleDetails,
                            Brand: e.target.value,
                        },
                    };
                case "InputVehicleModel":
                    return {
                        ...prevState,
                        VehicleDetails: {
                            ...prevState.VehicleDetails,
                            Model: e.target.value,
                        },
                    };
                case "InputVehicleType":
                    return {
                        ...prevState,
                        VehicleDetails: {
                            ...prevState.VehicleDetails,
                            Type: e.target.value,
                        },
                    };
                case "InputVehicleCapacity":
                    return {
                        ...prevState,
                        VehicleDetails: {
                            ...prevState.VehicleDetails,
                            EngineCapacity: e.target.value,
                        },
                    };
                case "InputVehicleRegistrationPlate":
                    return {
                        ...prevState,
                        VehicleDetails: {
                            ...prevState.VehicleDetails,
                            RegistrationPlate: e.target.value,
                        },
                    };
                default:
                    console.log("no input selected");
                    return prevState;
            }
        });
    };
    /**CLEAN FORM BY TAKING ID FOR EACH FORM CONTROL IN E PARAMETER */
    const cleanFields = (e) => {
        for (let index = 0; index < e.target.length; index++) {
            const element = e.target[index];
            document.getElementById(element.id).value = '';
        }
    }

    return {
        newClient,
        currentClients,
        selectedClient,
        confirmationAdded,
        showUserInformation,
        showCreateNewJob,
        handleCloseUserInformation,
        handleCloseCreateNewJob,
        handleShowUserInformation,
        handleShowCreateJob,
        saveNewClient,
        saveClientDetailSelected,
        getCurrentClients,
        createNewClient,
        updateClientData,
        deleteClientSelected,
        searchOneClient,
    }

}

export default useClientsSettings