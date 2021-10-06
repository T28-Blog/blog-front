import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif,Slack-Lato,appleLogo;
        width: 100%;
        min-width: 1230px;
        background-color: #fff;
    };
    button{
        display: flex;
        cursor: pointer;
        border: none;
        outline: none;
        border-radius: 5px;
    };
    input{
        display: flex;
        outline: none;
    }
`;

export default GlobalStyle;
