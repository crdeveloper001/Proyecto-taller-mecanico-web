import axios from "axios"
import { Authentication, API_URL } from '../Utils/Endpoints';

export const Authorization = async (credentials) => {

    if (credentials) {

        // const mock = {
        //     User_Email: "jefry@gmail.com",
        //     User_Password: "admin123."
        // }

        const request = await axios({
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            url: API_URL + Authentication,
            data: credentials,
           
        });

        return request.data;

    }
}