import axios from "axios"
import { API_URL, ContactsEmail } from '../Utils/Endpoints';


export const getHistoryEmails = async () => {
    try {
        const response = await axios.get(`${API_URL}${ContactsEmail}`);
        return response.data;
    } catch (error) {
        console.error('Error getting history emails:', error);
        throw error;
    }
};

// Function to send contact info via email
export const postEmailContact = async (contactInfo) => {
    try {
        const response = await axios.post(`${API_URL}${ContactsEmail}`, contactInfo);
        return response.data;
    } catch (error) {
        console.error('Error sending contact info email:', error);
        throw error;
    }
};