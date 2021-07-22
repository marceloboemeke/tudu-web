import React from 'react';
import * as S from './styles';

function Filter({ title, active, onClick }) {
    return (
        <S.FilterItem className={active}><p onClick={onClick}>{title}</p></S.FilterItem>
    );
}
  
  export default Filter;