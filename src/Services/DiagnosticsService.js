import axios from "axios"
import { API_URL, Diagnostics } from '../Utils/Endpoints';

export const getDiagnostics = async () => {
    try {
      const response = await axios.get(`${API_URL}${Diagnostics}`);
      return response.data;
    } catch (error) {
      console.error('Error getting diagnostics:', error);
      throw error;
    }
  };
  
  // Function to search for diagnostics by type
  export const searchDiagnosticsByType = async (type) => {
    try {
      const response = await axios.get(`${API_URL}${Diagnostics}/${type}`);
      return response.data;
    } catch (error) {
      console.error('Error searching diagnostics:', error);
      throw error;
    }
  };
  
  // Function to add a new diagnostic
  export const postDiagnostics = async (diagnosticInfo) => {
    try {
      const response = await axios.post(`${API_URL}${Diagnostics}`, diagnosticInfo);
      return response.data;
    } catch (error) {
      console.error('Error adding diagnostic:', error);
      throw error;
    }
  };
  
  // Function to update an existing diagnostic
  export const putDiagnostics = async (updatedDiagnostic) => {
    try {
      const response = await axios.put(`${API_URL}${Diagnostics}`, updatedDiagnostic);
      return response.data;
    } catch (error) {
      console.error('Error updating diagnostic:', error);
      throw error;
    }
  };
  
  // Function to delete a diagnostic by ID
  export const deleteDiagnostics = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}${Diagnostics}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting diagnostic:', error);
      throw error;
    }
  };