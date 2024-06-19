import axios from "axios"
import {API_URL, Jobs} from '../Utils/Endpoints';

export const getJobs = async () => {
    try {
        const response = await axios.get(`${API_URL}${Jobs}`);
        return response.data;
    } catch (error) {
        console.error('Error getting jobs:', error);
        throw error;
    }
};

export const searchJobByStatus = async (name) => {
    try {
        const response = await axios.get(`${API_URL}${Jobs}/Search/${name}`);
        return response.data;
    } catch (error) {
        console.error('Error searching jobs:', error);
        throw error;
    }
};


export const addJob = async (jobInfo) => {
    try {
        const response = await axios.post(`${API_URL}${Jobs}`, jobInfo);
        return response.data;
    } catch (error) {
        console.error('Error adding jobs:', error);
        throw error;
    }
};

export const updateJob = async (updatedJob) => {
    try {
        const response = await axios.put(`${API_URL}${Jobs}`, updatedJob);
        return response.data;
    } catch (error) {
        console.error('Error updating jobs:', error);
        throw error;
    }
};

export const deleteJob = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}${Jobs}/Delete/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting jobs:', error);
        throw error;
    }
};