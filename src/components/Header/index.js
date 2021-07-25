import React, { useContext, useState } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo_2.svg';
import menu_bar from '../../assets/menu_bar.svg';

import { Context } from '../../context/AuthContext';

function Header({ type }) {
    const { handleLogout, authenticated } = useContext(Context);
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        let isOpen = menuOpen;
        setMenuOpen(!isOpen);
    }

    if (type && type == "unauth_header" && !authenticated) {
        return (
            <S.Container>
                <S.LeftSide>
                    <img src={logo} alt="Logo Tuudu" />
                </S.LeftSide>
                <S.RightSide>
                    <img className="menu_bar" src={menu_bar} alt="Menu" onClick={() => setMenuOpen(!menuOpen)} />
                    <ul className={`${menuOpen ? 'open' : ''}`}>
                        <li><Link to="/">Início</Link></li>
                        <span></span>
                        <li><Link to="/register">Crie sua conta</Link></li>
                        <span></span>
                        <li><Link to="/login">Entrar</Link></li>
                    </ul>
                </S.RightSide>
            </S.Container>
        );
    }

    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="Logo Tuudu" />
            </S.LeftSide>
            <S.RightSide>
                <img className="menu_bar" src={menu_bar} alt="Menu" onClick={toggleMenu} />
                <ul className={`${menuOpen ? 'open' : ''}`}>
                    <li><Link to="/">Início</Link></li>
                    <span></span>
                    <li><Link to="/tasks">Minhas tarefas</Link></li>
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