import { useState, useEffect } from "react";

import history from '../../services/history';
import api from '../../services/api';
import Swal from "sweetalert2";

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
        history.push('/');
    }

    async function handleRegister(name, email, password) {
        await api.post('/user', { 'name': name, 'email': email, 'password': password })
        .then(response => {
            const token = response.data.token;
            localStorage.setItem('@tuudu-web-app/authtoken', token);
            api.defaults.headers.Authorization = `Bearer ${token}`;
            Swal.fire({  
                title: 'Sucesso!',  
                type: 'success',  
                text: 'Parabéns! Agora você está cadastrado no Tuudu! Você já pode criar suas tarefas...',
                confirmButtonColor: '#ed6a5a'
            }).then(() => {
                setAuthenticated(true);
                history.push('/tasks');
            });
        }).catch(error => {
            Swal.fire({  
                title: 'Ops!',  
                type: 'error',  
                text: 'Houve um problema durante o cadastro. Pedimos desculpas!',
                confirmButtonColor: '#ed6a5a'
            }).then(() => {
                setAuthenticated(false);
            });
        });
    }

    return { authenticated, loading, handleLogin, handleLogout, handleRegister };

}