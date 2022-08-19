import axios from 'axios';

const server = "http://localhost:8000"
const headers = {
    'Content-Type': 'application/json',
}



export async function SendPostRequest(endpoint, data) {

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



export async function SendGetRequest(endpoint, data) {
    return await axios.get(server + endpoint, {
        params: data
    })
        .then(function (response) {
            console.log(response);
            return response
        })
        .catch(function (error) {
            console.log("error", error)
            return error;
        });
}


export async function SendPutRequest(endpoint, data) {
    return await axios.put(server + endpoint, data, {
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


