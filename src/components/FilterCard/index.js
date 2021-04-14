import React from 'react';
import * as S from './styles';

import { FaFilter } from 'react-icons/fa';

function FilterCard({title, actived}) {
  return (
    <S.Container actived={actived} > 
        <FaFilter id="icon"/>
        <span>{title}</span>
    </S.Container>
  )
}

export default FilterCard;
