import React, { useState, useEffect } from 'react';
import * as S from './styles';

import api from '../../services/api';

// nossos componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

function Task() {
  const [lateCount, setLateCount] = useState();
  const [type, setType] = useState();

  async function lateVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response => {
      setLateCount(response.data.length);
      console.log(response.data.length);
    })
  }

  useEffect(() => {
    lateVerify();
  }, []);

  return (
    <S.Container>
      <Header lateCount={lateCount}/>
      <S.Form>
        <S.TypeIcons>
          {
            TypeIcons.map((icon, index) =>(
              index > 0 &&
              <button type="button" onClick={() => setType(index)}>
                <img src={icon} alt="Tipo da Tarefa"
                className={type && type !== index && 'inative'} />
              </button>
            ))
          }
        </S.TypeIcons>

        <S.Input>
          <span>Título</span>
          <input type="text" placeholder="Título da tarefa..." />
        </S.Input>
        <S.TextArea>
          <span>Descrição</span>
          <textarea rows={5} placeholder="Título da tarefa..." />
        </S.TextArea>
        <S.Input>
          <span>Data</span>
          <input type="date" placeholder="Título da tarefa..." />
          {/* <img src={iconCalendar} alt="Calendário" /> */}
        </S.Input>
        <S.Input>
          <span>Hora</span>
          <input type="time" placeholder="Título da tarefa..." />
          {/* <img src={iconClock} alt="Horas" /> */}
        </S.Input>
        <S.Options>
          <div>
            <input type="checkbox" />
            <span>CONCLUÍDO</span>
          </div>
          <button type="button">EXCLUIR</button>
        </S.Options>
        <S.Save>
          <button type="button">Salvar</button>
        </S.Save>
      </S.Form>
      <Footer />
    </S.Container>

  )
}

export default Task;
