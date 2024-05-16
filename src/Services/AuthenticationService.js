import axios from "axios"
import { Authentication, API_URL } from '../Utils/Endpoints';

export const Authorization = async (credentials) => {

    if (credentials) {
        const request = await axios({
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            url: API_URL + Authentication,
            data:{
                email:credentials.email,
                password:credentials.password
            }
           
        });

        return request.data;

    }
}