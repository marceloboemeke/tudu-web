import React, { useContext } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Context } from '../../context/AuthContext';

function Header({ lateCount, notificationClick }) {
    const { handleLogout } = useContext(Context);

    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="Logo Tudu" />
            </S.LeftSide>
            <S.RightSide>
                <ul>
                    <li><Link to="/tasks">Início</Link></li>
                    <span></span>
                    <li><Link to="/tasks/new">Nova tarefa</Link></li>
                    <span></span>
                    <li><p onClick={handleLogout}>Sair</p></li>
                </ul>
            </S.RightSide>
        </S.Container>
    );
}
  
  export default Header;