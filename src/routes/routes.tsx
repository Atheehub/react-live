import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { Home } from '../components/home';
import AuthRoute from './authRoute';
import { Footer } from '../components/footer';
import { Client } from '../components/client';
import { Staff } from '../components/staff';
import { EmptyPage } from '../components/404';

export const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<AuthRoute roles={['Admin', 'Client', 'Staff']}><Home /></AuthRoute>} />
            <Route path="/client" element={<AuthRoute roles={['Admin', 'Client']}><Client /></AuthRoute>} />
            <Route path="/staff" element={<AuthRoute roles={['Admin', 'Staff']}><Staff /></AuthRoute>} />
            <Route path="/404" element={<EmptyPage />} />
            <Route path="*" element={<EmptyPage />} />
        </Routes>
    )

};
