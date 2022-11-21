import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


export default function Footer () {
    
    const navigate = useNavigate();

    return(
        <Wrapper>
            <div onClick={() => navigate('/entrada')}>
                <img src="" alt="" />
                Nova entrada
            </div>
            <div onClick={() => navigate('/saida')}>
                <img src="" alt="" />
                Nova Saída
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 140px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div{
        width: 40%;
        height: 80%;
        font-size: 18px;
        line-height: 22px;
        color: white;
        background: #A328D6;
        border-radius: 5px;
    }

`;