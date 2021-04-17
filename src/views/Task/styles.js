import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.div`
    width: 50%;
`

export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .inative{
        opacity: 0.5;
    }

    button {
        background: none;
        border: none;
    }


    img {
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;

        &:hover {
            opacity: 0.5;
        }
    }

`

export const Input = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;

   span {
    color: #707070;
    margin-bottom: 5px;

   }

   input {
       font-size: 16px;
       padding: 15px;
       border: none;
       border-bottom: #
   }
`