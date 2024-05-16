import axios from "axios"
import { API_URL, Clients } from '../Utils/Endpoints';

// Function to fetch all clients
export const getClients = async () => {
    try {
        const response = await axios.get(`${API_URL}${Clients}`);
        return response.data;
    } catch (error) {
        console.error('Error getting clients:', error);
        throw error;
    }
};

// Function to search for clients by name
export const searchClientByName = async (name) => {
    try {
        const response = await axios.get(`${API_URL}${Clients}/${name}`);
        return response.data;
    } catch (error) {
        console.error('Error searching clients:', error);
        throw error;
    }
};

// Function to add a new client
export const addClient = async (clientInfo) => {
    try {
        const response = await axios.post(`${API_URL}${Clients}`, clientInfo);
        return response.data;
    } catch (error) {
        console.error('Error adding client:', error);
        throw error;
    }
};

// Function to update an existing client
export const updateClient = async (updatedClient) => {
    try {
        const response = await axios.put(`${API_URL}${Clients}`, updatedClient);
        return response.data;
    } catch (error) {
        console.error('Error updating client:', error);
        throw error;
    }
};

// Function to delete a client by ID
export const deleteClient = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}${Clients}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting client:', error);
        throw error;
    }
};