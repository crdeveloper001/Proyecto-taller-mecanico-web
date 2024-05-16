import axios from "axios"
import { API_URL, Providers } from '../Utils/Endpoints';

// Function to fetch all providers
export const getClients = async () => {
    try {
      const response = await axios.get(`${API_URL}${Providers}`);
      return response.data;
    } catch (error) {
      console.error('Error getting providers:', error);
      throw error;
    }
  };
  
  // Function to search for providers by name
  export const searchProvidersByName = async (name) => {
    try {
      const response = await axios.get(`${API_URL}${Providers}/${name}`);
      return response.data;
    } catch (error) {
      console.error('Error searching providers:', error);
      throw error;
    }
  };
  
  // Function to add a new provider
  export const postProviders = async (providerInfo) => {
    try {
      const response = await axios.post(`${API_URL}${Providers}`, providerInfo);
      return response.data;
    } catch (error) {
      console.error('Error adding provider:', error);
      throw error;
    }
  };
  
  // Function to update an existing provider
  export const putProviders = async (updatedProvider) => {
    try {
      const response = await axios.put(`${API_URL}${Providers}`, updatedProvider);
      return response.data;
    } catch (error) {
      console.error('Error updating provider:', error);
      throw error;
    }
  };
  
  // Function to delete a provider by ID
  export const deleteProviders = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}${Providers}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting provider:', error);
      throw error;
    }
  };