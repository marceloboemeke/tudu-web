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
        if (!email || !password) {
            return Swal.fire({  
                title: 'Ops!',  
                type: 'warning',  
                text: "Preencha E-mail e Senha para acessar!",
                confirmButtonColor: '#ed6a5a'
            });
        }

        await api.post('/auth', { 'email': email, 'password': password })
        .then(response => {
            const token = response.data.token;
            localStorage.setItem('@tuudu-web-app/authtoken', token);
            api.defaults.headers.Authorization = `Bearer ${token}`;
            setAuthenticated(true);
            history.push('/tasks');
        }).catch(error => {
            Swal.fire({  
                title: 'Ops!',  
                type: 'error',  
                text: "E-mail ou Senha incorretos. Verifique e tente novamente!",
                confirmButtonColor: '#ed6a5a'
            }).then(() => {
                setAuthenticated(false);
            });
        });
    }

    async function handleLogout() {
        Swal.fire({  
            title: 'Sair da conta',  
            type: 'question',  
            text: "Deseja realmente sair da sua conta?",
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: 'Sair',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#ed6a5a',
            cancelButtonColor: '#0B3954'
        }).then((result) => {
			if (result.isConfirmed) {
                setAuthenticated(false);
                localStorage.removeItem('@tuudu-web-app/authtoken');
                api.defaults.headers.Authorization = undefined;
                history.push('/');
            }
        });
    }

    async function handleRegister(name, email, password) {
        if (!name || !email || !password) {
            return Swal.fire({  
                title: 'Ops!',  
                type: 'warning',  
                text: "Preencha Nome, E-mail e Senha para se registrar!",
                confirmButtonColor: '#ed6a5a'
            });
        }

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