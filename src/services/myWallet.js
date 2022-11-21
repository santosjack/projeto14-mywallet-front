import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function signup(data){
    const promise = axios.post(`${BASE_URL}/sign-up`, data);
    return promise;
}
//ok
function login(data){
    const promise = axios.post(`${BASE_URL}/sign-in`, data);
    return promise;
}

//ok
function getTransactions(token){
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const promise = axios.get(`${BASE_URL}/transactions`, config);
    return promise;
}

export {signup, login, getTransactions, };