import axios from "axios"
import {API_URL} from '../Utils/Endpoints';
// Function to fetch all quotes
export const getClients = async () => {
    try {
      const response = await axios.get(`${API_URL}${API_URL}`);
      return response.data;
    } catch (error) {
      console.error('Error getting quotes:', error);
      throw error;
    }
  };
  
  // Function to search for quotes by client
  export const searchQuotesByClient = async (client) => {
    try {
      const response = await axios.get(`${API_URL}${API_URL}/${client}`);
      return response.data;
    } catch (error) {
      console.error('Error searching quotes:', error);
      throw error;
    }
  };
  
  // Function to add a new quote
  export const postQuotes = async (quoteInfo) => {
    try {
      const response = await axios.post(`${API_URL}${API_URL}`, quoteInfo);
      return response.data;
    } catch (error) {
      console.error('Error adding quote:', error);
      throw error;
    }
  };
  
  // Function to update an existing quote
  export const putQuotes = async (updatedQuote) => {
    try {
      const response = await axios.put(`${API_URL}${API_URL}`, updatedQuote);
      return response.data;
    } catch (error) {
      console.error('Error updating quote:', error);
      throw error;
    }
  };
  
  // Function to delete a quote by ID
  export const deleteQuotes = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting quote:', error);
      throw error;
    }
  };