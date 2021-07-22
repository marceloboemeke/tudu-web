import { useState, useEffect } from "react";

import history from '../../services/history';
import api from '../../services/api';

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('@tuudu-web-app/authtoken');

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${token}`;
            setAuthenticated(true);
        }

        setLoading(false);
    },[]);

    async function handleLogin(email, password) {
        await api.post('/auth', { 'email': email, 'password': password })
        .then(response => {
            const token = response.data.token;
            localStorage.setItem('@tuudu-web-app/authtoken', token);
            api.defaults.headers.Authorization = `Bearer ${token}`;
            setAuthenticated(true);
            history.push('/tasks');
        }).catch(error => {
            setAuthenticated(false);
        });
    }

    async function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('@tuudu-web-app/authtoken');
        api.defaults.headers.Authorization = undefined;
        history.push('/login');
    }

    return { authenticated, loading, handleLogin, handleLogout };

}