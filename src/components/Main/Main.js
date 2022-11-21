import { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import Navbar from "../Navbar";
import Footer from "../Footer";
import UserContext from "../contexts/UserContext";
import { getTransactions } from '../../services/myWallet';
import Transaction from './Transaction';
import dayjs from 'dayjs';

import '../style.css';



export default function Main() {

    const [dataTransactions, setDataTransactions] = useState([]);

    const { userData } = useContext(UserContext);

    useEffect(() => {
        getData();
    }, []);

    function getData() {
        getTransactions(JSON.parse(localStorage.getItem('token')))
            .then((res) => {
                setDataTransactions(res.data);
                console.log(res.data);
                console.log(dataTransactions);
            }).catch(

        )

    }

    return (
        <>
            <Navbar name={userData} />
            <Wrapper>
                <div>
                   {(dataTransactions.transactions?.length > 0) ? (
                        dataTransactions.transactions.map(item => (
                            <Transaction
                                key={item.id}
                                id={item.id}
                                date={item.date}
                                description={item.description}
                                type={item.type}
                                value={item.value}
                            />

                        ))
                    ) : (
                        console.log("vazio")
                    )} 
                </div>


                <div className='balance'>
                    <span>Saldo</span> 
                    <span className='value'>R$ {dataTransactions.balance}</span>   
                </div>
            </Wrapper>
            <Footer />
        </>
    );
}

const Wrapper = styled.div`
    width: 90%;
    height: 446px;
    margin: 0 auto;
    margin-top: 70px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .balance{
        width: 95%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 17px;
        line-height: 28px;
        
        .value{
            color:  #03AC00;
        }
    }
    
`;