import axios from "axios"
import { API_URL, Inventory } from '../Utils/Endpoints';


// Function to fetch all inventory items
export const getItemsInventory = async () => {
  try {
    const response = await axios.get(`${API_URL}${Inventory}`);
    return response.data;
  } catch (error) {
    console.error('Error getting inventory items:', error);
    throw error;
  }
};

// Function to search for inventory items by name
export const searchInventoryByName = async (name) => {
  try {
    const response = await axios.get(`${API_URL}${Inventory}/${name}`);
    return response.data;
  } catch (error) {
    console.error('Error searching inventory items:', error);
    throw error;
  }
};

// Function to add a new inventory item
export const postInventory = async (item) => {
  try {
    console.log(item)
    const response = await axios.post(`${API_URL}${Inventory}`, item);
    return response.data;
  } catch (error) {
    console.error('Error adding inventory item:', error);
    throw error;
  }
};

// Function to update an existing inventory item
export const putInventory = async (updatedInventory) => {
  try {
    const response = await axios.put(`${API_URL}${Inventory}`, updatedInventory);
    return response.data;
  } catch (error) {
    console.error('Error updating inventory item:', error);
    throw error;
  }
};

// Function to delete an inventory item by ID
export const deleteInventory = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}${Inventory}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting inventory item:', error);
    throw error;
  }
};