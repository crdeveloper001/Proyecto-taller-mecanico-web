import axios from 'axios';
// Base URL of your Spring Boot backend
import { API_URL, Users, SearchUser } from '../Utils/Endpoints';

// Function to fetch all users
export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}${Users}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

// Function to search for users by name
export const searchUsersByName = async (name) => {
    try {
        const response = await axios.get(`${API_URL}${SearchUser}/${name}`);
        return response.data;
    } catch (error) {
        console.error('Error searching users:', error);
        throw error;
    }
};

// Function to add a new user
export const addUser = async (newUser) => {
    try {
        const response = await axios.post(`${API_URL}${Users}`, newUser);
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};

// Function to update an existing user
export const updateUser = async (updatedUser) => {
    try {
        const response = await axios.put(`${API_URL}${Users}`, updatedUser);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

// Function to delete a user by ID
export const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`${API_URL}${Users}/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};
