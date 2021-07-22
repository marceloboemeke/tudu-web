import api from "./api";
import { useHistory } from "react-router";

export const isAuthenticated = async () => {
    const authToken = localStorage.getItem('@tuudu-web-app/authtoken');

    if (!authToken) {
        return false;
    }

    await api.post('/auth/validatetoken', { 'token': authToken })
    .then(response => {
        return (response.data.valid === true);
    }).catch(error => {
        return false;
    });
}

export const authenticate = async (email, password) => {
    await api.post('/auth', { 'email': email, 'password': password })
		.then(response => {
            localStorage.setItem('@tuudu-web-app/authtoken', response.data.token);
            return true;
		}).catch(error => {
            return false;
        });
}

// export default { isAuthenticated, authenticate };