import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ContenidoContext } from '../context/ContenidoContext';




export const HomePage = () => {

    return (
        <div>
            <div className='titulo1'>
                <h1>hola mundo 111111111111111111111111111111111111111</h1>
            </div>


            <Outlet />
        </div>
    );
};