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
    const [currentClients, setCurrentClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState({});
    const [confirmationAdded, setConfirmationAdded] = useState(false);
    const [showUserInformation, setShowUserInformation] = useState(false);
    const [showCreateNewJob, setShowCreateNewJob] = useState(false);

    // Fetch clients on mount
    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        try {
            const results = await getClients();
            setCurrentClients(results);
        } catch (error) {
            console.error(error);
        }
    };

    const handleShowUserInformation = (client) => {
        setSelectedClient(client);
        setShowUserInformation(true);
    };

    const handleShowCreateJob = (client) => {
        setSelectedClient(client);
        setShowCreateNewJob(true);
    };

    const createNewClient = async (e) => {
        try {
            await addClient(newClient);
            setConfirmationAdded(true);
            cleanFields(e);
        } catch (error) {
            alert(error);
        }
    };

    const updateClientData = async () => {
        return await updateClient(newClient);
    };

    const deleteClientSelected = async (id) => {
        return await deleteClient(id);
    };

    const searchOneClient = async (e) => {
        const searchValue = e.target.value;
        try {
            if (searchValue === "") {
                await fetchClients();
            } else {
                const items = await searchClientByName(searchValue);
                setCurrentClients(items);
            }
        } catch (error) {
            console.error('Error retrieving clients:', error.response?.data || error.message);
            setCurrentClients([]);
        }
    };

    const saveNewClient = (e) => {
        const { id, value } = e.target;
        setNewClient((prevState) => {
            // Vehicle details mapping
            const vehicleFields = {
                InputVehicleBrand: "Brand",
                InputVehicleModel: "Model",
                InputVehicleType: "Type",
                InputVehicleCapacity: "EngineCapacity",
                InputVehicleRegistrationPlate: "RegistrationPlate"
            };

            if (vehicleFields[id]) {
                return {
                    ...prevState,
                    VehicleDetails: {
                        ...prevState.VehicleDetails,
                        [vehicleFields[id]]: value
                    }
                };
            }

            const fieldMap = {
                InputId: "_id",
                InputName: "Name",
                InputLastName: "Surname",
                InputEmail: "Email",
                InputPhone: "Phone",
                InputAddress: "CurrentAddress"
            };

            return fieldMap[id] ? { ...prevState, [fieldMap[id]]: value } : prevState;
        });
    };

    const cleanFields = (e) => {
        Array.from(e.target.elements).forEach(element => {
            if (element.value !== undefined) element.value = '';
        });
    };

    return {
        newClient,
        currentClients,
        selectedClient,
        confirmationAdded,
        showUserInformation,
        showCreateNewJob,
        handleCloseUserInformation: () => setShowUserInformation(false),
        handleCloseCreateNewJob: () => setShowCreateNewJob(false),
        handleShowUserInformation,
        handleShowCreateJob,
        saveNewClient,
        createNewClient,
        updateClientData,
        deleteClientSelected,
        searchOneClient,
    };
};

export default useClientsSettings;
