import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

//Our components
import Header from '../../components/Header';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';

import bg_home from '../../assets/bg_home_back.png';
import girl_home from '../../assets/bg_home_front.png';

function SiteHome() {

    return (
		<S.Container>
			<Header type="unauth_header" />
			<S.ComposedTitle>
				<p className="title">Um app para quem está</p>
				<p className="subtitle">Organizando Tuudu!</p>
				<FormButton type="link" to="/register" id="home_button">Quero organizar</FormButton>
			</S.ComposedTitle>
			<img className="girl_home" src={girl_home} alt="" />
			<S.Content style={{ backgroundImage: `url(${bg_home})`}}></S.Content>
		</S.Container>
		);
	}
	
	export default SiteHome;