import axios from "axios"
import { API_URL,Clients } from '../utils/Endpoints';

export const GetAllClients = async()=>{
    const dataCLients = []
    const request = axios.get(API_URL+Clients)
    .then(response =>{
        console.log(response.data);
        dataCLients.push(response.data);

       
    }).finally(() =>{
        console.log("request completed");
    }).catch(error =>{
        console.error(error);
        throw error;
    })

    return dataCLients;
}