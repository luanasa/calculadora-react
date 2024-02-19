import styled from 'styled-components';

export const InputContainer = styled.div`
    widht: 100%;
    height: 75px;
    background-color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 28px;

    input {
      border: 1px solid #ddd;
      border-radius: 1px;
      height: 65px;
      width: 100%;
      padding-right: 15px;
      padding-top: 10px;
      text-align: right;
      font-size: 2.5rem;
      overflow-x: auto;
      transition: all .2s ease-in-out;

      &:hover {
        border: 1px solid #bbb;
        -webkit-box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
        box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
      }
    }
`