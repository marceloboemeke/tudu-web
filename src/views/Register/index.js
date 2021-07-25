import React, { useState, useEffect, useContext } from 'react';
import * as S from './styles';

import { Context } from '../../context/AuthContext';

import Swal from 'sweetalert2';

import Header from '../../components/Header';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';

function Register() {
    const { authenticated, handleLogin, handleRegister } = useContext(Context);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
	
	return (
            <S.Container>
                <Header type="unauth_header" />
                <S.Title>Crie sua conta</S.Title>
                <S.Content>
                    <Input label="Nome" type="text" name="name" id="name_login" placeholder="Seu Nome" onChange={e => setName(e.target.value)} value={name}></Input>
                    <Input label="E-mail" type="text" name="email" id="email_login" placeholder="Seu E-mail" onChange={e => setEmail(e.target.value)} value={email}></Input>
                    <Input label="Senha" type="password" name="senha" id="senha_login" placeholder="Sua Senha" onChange={e => setPassword(e.target.value)} value={password}></Input>
                    <FormButton id="register_button" onClick={() => handleRegister(name, email, password)}>Criar minha conta</FormButton>
                </S.Content>
                <S.Row>
                    <S.SmallCaption href="/login">Já tenho uma conta</S.SmallCaption>   
                </S.Row>
            
            </S.Container>
	    )
	}
	
	export default Register;