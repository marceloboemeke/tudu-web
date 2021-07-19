import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Swal from 'sweetalert2';
import Qr from 'qrcode.react';

import api from '../../services/api';

//Our components
import Header from '../../components/Header';

function QRCode() {

	useEffect(() => {
		
	}, []);
	
	return (
		<S.Container>
			<Header />
			<S.Title>Tudu Web</S.Title>
			<S.Content>
                <Qr fgColor='#ed6a5a' value='getmacaddress' size={200} />
            </S.Content>
            <S.Subtitle>Escaneie o código acima com o app para sincronizar suas tarefas.</S.Subtitle>
		
		</S.Container>
		);
	}
	
	export default QRCode;