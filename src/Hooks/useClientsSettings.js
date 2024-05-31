import { useState, useEffect } from "react";
import { addClient, deleteClient, getClients, searchClientByName, updateClient } from '../Services/ClientsService';

const useClientsSettings = () => {
    
    const [newClient, setNewClient] = useState({});
    const [currentClients, setCurrentClients] = useState([])
    const [selectedClient,setSelectedClient] = useState({})
    
    const saveClientDetailSelected = (details) =>{
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

        e.preventDefault()
        addClient(newClient).then(results => {
            alert("CLIENTE AGREGADO");
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

    const searchOneClient = (e) => {
        const response = searchClientByName(e.target.value);
        return response;
    }

    const saveNewClient = (e) => {
        switch (e.target.id) {
            case "InputId":
                setNewClient((prevState) => ({
                    ...prevState,
                    _id: e.target.value,
                }));
                break;
            case "InputName":
                setNewClient((prevState) => ({
                    ...prevState,
                    Name: e.target.value,
                }));
                break;
            case "InputLastName":
                setNewClient((prevState) => ({
                    ...prevState,
                    Surname: e.target.value,
                }));
                break;
            case "InputEmail":
                setNewClient((prevState) => ({
                    ...prevState,
                    Email: e.target.value,
                }));
                break;
            case "InputPhone":
                setNewClient((prevState) => ({
                    ...prevState,
                    Phone: e.target.value,
                }));
                break;
            case "InputAddress":
                setNewClient((prevState) => ({
                    ...prevState,
                    CurrentAddress: e.target.value,
                }));
                break;
            case "InputCity":
                setNewClient((prevState) => ({
                    ...prevState,
                    City: e.target.value,
                }));
                break;
            case "InputState":
                setNewClient((prevState) => ({
                    ...prevState,
                    State: e.target.value,
                }));
                break;
            case "InputZipcode":
                setNewClient((prevState) => ({
                    ...prevState,
                    Zipcode: e.target.value,
                }));
                break;
            default:
                console.log("no input selected");
                break;
        }

    }
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