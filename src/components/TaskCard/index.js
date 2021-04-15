/* eslint-disable react-hooks/exhaustive-deps */
import React, {useMemo} from 'react';
import { format } from 'date-fns';
import * as S from './styles';

import iconDefault from '../../assets/default.png';

function TaskCard({type, title, when}) {
  const date = useMemo(() => format(new Date(when), 'dd/MM/yyy'));
  const hour = useMemo(() => format(new Date(when), 'HH:mm') );

  return (
    <S.Container>
        <S.TopCard> 
            <img src={iconDefault} alt="Icone da Tarefa" />
            <h3>{title}</h3>
        </S.TopCard>
        <S.BottomCard>
            <strong>date</strong>
            <span>10:00</span>
        </S.BottomCard>
    </S.Container>
  )
}

export default TaskCard;
