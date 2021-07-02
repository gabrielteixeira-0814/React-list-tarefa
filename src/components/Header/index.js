import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

function Header({ clickNotification }) {
  
  const [lateCount, setLateCount] = useState();

  async function lateVerify() {
    await api.get(`/task/filter/late/${isConnected}`)
    .then(response => {
      setLateCount(response.data.length);
      // console.log(response.data.length);
    })
  }

  async function Logout() {
    localStorage.removeItem('@todo/macaddress');
    window.location.reload();
  }

  useEffect(() => {
    lateVerify();
  }, []);

  return (
    <S.Container>
      <S.LeftSide>
          <img src={logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">
          Início
        </Link>
        <span className="dividir" />
        <Link to="/task">
          Nova Tarefa
        </Link>
        <span className="dividir" />
        { !isConnected ?
          <Link to="/qrcode">
            Sincronizar Celular
          </Link>
        :
        <button type="button" onClick={Logout}>SAIR</button>
      }
        {
          lateCount &&
          <>
            <span className="dividir"/>
            <button onClick={clickNotification} id="notification">
              <img src={bell}alt="Notificação" />
              <span>{lateCount}</span>
            </button>
          </>
        }

      </S.RightSide>
    </S.Container>
  )
}

export default Header;
