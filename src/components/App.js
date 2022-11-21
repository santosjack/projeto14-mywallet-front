import { useState } from 'react';
import UserContext from './contexts/UserContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Main from './Main/Main';

import GlobalStyle from '../assets/styles/globalStyle';


export default function App () {
    const [userData, setUserData] = useState(null);
    const contextValue = {userData, setUserData};

    return(
        <UserContext.Provider value={contextValue}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Signup />} />
                    <Route path='/main' element={<Main />} />
                    <Route path='/entrada'  />
                    <Route path='/saida'  />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}