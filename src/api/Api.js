import axios from 'axios';
import {setToken} from '../services/auth';

export const signIn = async (user) => {
    await axios.post("http://localhost:8080/auth", user).then(
        response => {
            setToken(response.headers.authorization);
        }
    )
}

export const signUp = async (user) => {
    await axios.post("http://localhost:8080/usuario", user).then(
        () => console.log(user)
    )
}