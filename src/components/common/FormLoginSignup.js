import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        width: 303px;
        display: flex;
        flex-direction: column;
        align-items: center;

        div{
            color: white;
            width: 180px;
            height: 50px;
            margin-bottom: 32px;
            font-size: 32px;
            text-align: center;
        }
    }

    
    .form{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 25px;

        input::placeholder{
            color: #DBDBDB;
            font-size: 20px;
            line-height: 25px;
        }

        input:focus{
            border: 1px solid #52B6FF;
        }
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 45px;
    padding: 1em;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 6px;
`;

export const Button = styled.button`
    width: 100%;
    height: 45px;
    background-color: #A328D6;
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 21px;
    line-break: 26px;
    text-align: center;
`;

export const LinkForm = styled(Link)`
    color: white;
    text-align: center;
    font-size: 14px;
    line-height: 17px;
`;