import styled from 'styled-components';
import logoutIcon from '../assets/img/logout-icon.svg';

export default function Navbar({ user }) {
    return (
        <Wrapper>
            <div>Olá, {user}</div>
            <img src={logoutIcon} alt="sair" />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;

    img{
        width: 23px;
        height: 24px;
    }

    div{
        font-size: 26px;
        line-height: 32px;
    }
`;
