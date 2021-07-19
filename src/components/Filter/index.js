import React from 'react';
import * as S from './styles';

function Filter({ title, active, onClick }) {
    return (
        <S.FilterItem className={active}><a href="#" onClick={onClick}>{title}</a></S.FilterItem>
    );
}
  
  export default Filter;