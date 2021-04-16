import axios from 'axios';

let headers

export const login = async (user) => {
    await axios.post("http://localhost:8080/auth", user).then(
        (respone) => {
            headers = respone.headers
        }
    )
}

export const getHeaders = () => {
    return headers;
}