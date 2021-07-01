import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Content = styled.div`
 display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;

    h1 {
        color: #EE6B26;
    }
    P {
        color: #20295F;
    }
`

export const QrCodeArea = styled.div`
    width: 100%;
    height: 300px;
    background: red;
`