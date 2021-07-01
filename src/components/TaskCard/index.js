/* eslint-disable react-hooks/exhaustive-deps */
import React, {useMemo} from 'react';
import { format } from 'date-fns';
import * as S from './styles';
import dateFormat from 'dateformat';

import typeIcons from  '../../utils/typeIcons';


import iconDefault from '../../assets/default.png';

function TaskCard({type, title, when, done}) {
 
  const date = dateFormat(when, "dd/mm/yyyy");
  const hour = dateFormat(when, "HH:mm");
  console.log(date);

  return (
    <S.Container done={done}>
        <S.TopCard> 
            <img src={typeIcons[type]} alt="Icone da Tarefa" />
            <h3>{title}</h3>
        </S.TopCard>
        <S.BottomCard>
            <strong>{date}</strong>
            <span>{hour}</span>
        </S.BottomCard>
    </S.Container>
  )
}

export default TaskCard;
