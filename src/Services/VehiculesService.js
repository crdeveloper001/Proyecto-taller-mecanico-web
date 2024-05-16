import axios from "axios"
import { API_URL, Vehicles } from '../Utils/Endpoints';

export const getClients = async () => {
    try {
      const response = await axios.get(`${API_URL}${Vehicles}`);
      return response.data;
    } catch (error) {
      console.error('Error getting vehicles:', error);
      throw error;
    }
  };
  
  // Function to search for vehicles by brand
  export const searchVehiclesByBrand = async (brand) => {
    try {
      const response = await axios.get(`${API_URL}${Vehicles}/${brand}`);
      return response.data;
    } catch (error) {
      console.error('Error searching vehicles:', error);
      throw error;
    }
  };
  
  // Function to add a new vehicle
  export const postVehicles = async (vehicleInfo) => {
    try {
      const response = await axios.post(`${API_URL}${Vehicles}`, vehicleInfo);
      return response.data;
    } catch (error) {
      console.error('Error adding vehicle:', error);
      throw error;
    }
  };
  
  // Function to update an existing vehicle
  export const putVehicles = async (updatedVehicle) => {
    try {
      const response = await axios.put(`${API_URL}${Vehicles}`, updatedVehicle);
      return response.data;
    } catch (error) {
      console.error('Error updating vehicle:', error);
      throw error;
    }
  };
  
  // Function to delete a vehicle by ID
  export const deleteVehicles = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}${Vehicles}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting vehicle:', error);
      throw error;
    }
  };