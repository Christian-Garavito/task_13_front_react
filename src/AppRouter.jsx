import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, InicioContenido, TablaContenido, TablaTipoContenido, TablaTipoGeneros } from './pages';

// Componente que define las rutas de la aplicación
export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/'>
                <Route index element={<HomePage />} />
                <Route path='iniciocontenido' element={<InicioContenido />} />
                <Route path='tablacontenido' element={<TablaContenido />} />
                <Route path='tablatipocontenido' element={<TablaTipoContenido />} />
                <Route path='tablatipogeneros' element={<TablaTipoGeneros />} />
            </Route>

            {/* Ruta de redireccionamiento para rutas no encontradas */}
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
};

