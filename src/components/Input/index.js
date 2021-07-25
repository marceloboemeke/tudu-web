import React from 'react';

import * as S from './styles.js';

function Input({ label, type, name, id, placeholder, onChange, value, className }) {
    return (
        <S.Input className={className}>
            <label htmlFor={id}>{label}</label>
            {
                type === "textarea" ?
                <textarea name={name} id={id} placeholder={placeholder} onChange={onChange} value={value || ''}></textarea>
                :
                <input type={type} name={name} id={id} placeholder={placeholder} onChange={onChange} value={value || ''} />
            }
        </S.Input>
    )
}

export default Input;