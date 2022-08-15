import axios from 'axios';

const server = "http://localhost:8000"
const headers = {
    'Content-Type': 'application/json',
}



export async function  SendPostRequest (endpoint, data) {
    
    return await axios.post(server + endpoint, data, {
        headers: headers
    })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log("error", error)
            return error;
        });
}
