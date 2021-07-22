import React from 'react';
import * as S from './styles';

import { Link } from 'react-router-dom';

function FormButton({ type, id, onClick, to, children }) {

    return (
        <>
        {
        type === 'link' ?
        <S.LinkFormButton href={to} className="form_button" {...id ? `id=${id}` : ''}>{children}</S.LinkFormButton>
        :
        <S.FormButton className="form_button" id={id} onClick={onClick}>{children}</S.FormButton>
        }
        </>
    )
}

export default FormButton;