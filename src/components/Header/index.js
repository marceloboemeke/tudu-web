import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import notificacao from '../../assets/notificacao.svg';

function Header({ lateCount, notificationClick }) {
    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="Logo Tudu" />
            </S.LeftSide>
            <S.RightSide>
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <span></span>
                    <li><Link to="/task">Nova tarefa</Link></li>
                    <span></span>
                    <li><Link to="/logout">Sair</Link></li>
                    {/* <li><Link to="/qrcode">Sincronizar com o app</Link></li> */}
                    {/* {
                        (lateCount && lateCount > 0 && notificationClick) ?
                        <><span></span>
                        <li><a href="#" onClick={notificationClick}><img src={notificacao} alt="Notificações" />
                            {lateCount && lateCount > 0 ? <span>{lateCount}</span> : '' }
                        </a></li></>
                        :
                        null
                    } */}
                </ul>
            </S.RightSide>
        </S.Container>
    );
}
  
  export default Header;