import React, { useState, useEffect, useContext } from 'react';
import * as S from './styles';

import { Context } from '../../context/AuthContext';

import Swal from 'sweetalert2';

import Header from '../../components/Header';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';

function Login() {
    const { authenticated, handleLogin } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            handleLogin(email, password);
        }
    }
	
	return (
            <S.Container>
                <Header type="unauth_header" />
                <S.Title>Acesse sua Conta</S.Title>
                <S.Content onKeyPress={handleKeyPress} className="new_theme">
                    <Input className="new_theme" label="E-mail" type="text" name="email" id="email_login" placeholder="Seu E-mail" onChange={e => setEmail(e.target.value)} value={email}></Input>
                    <Input className="new_theme" label="Senha" type="password" name="senha" id="senha_login" placeholder="Sua Senha" onChange={e => setPassword(e.target.value)} value={password}></Input>
                    <FormButton id="login_button" onClick={() => handleLogin(email, password)}>Entrar</FormButton>
                </S.Content>
                <S.Row>
                    <S.GridContainer>
                        <S.Half>
                            <S.SmallCaption href="/lostpassword">Esqueci minha senha</S.SmallCaption>
                        </S.Half>
                        <S.Half>
                            <S.SmallCaption href="/register">Criar uma conta</S.SmallCaption>
                        </S.Half>
                    </S.GridContainer>
                </S.Row>
            
            </S.Container>
	    )
	}
	
	export default Login;