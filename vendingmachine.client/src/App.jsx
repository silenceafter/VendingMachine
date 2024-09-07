import './app.css';
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import Header from './components/header';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Logout } from './pages/logout';
import { AdminMain } from './pages/admin/main';

const App = () => {
    //
    return (
        <Router>            
            <div className="App">
                <CssBaseline />
                <Container maxWidth="lg">
                    <Header title="Автомат по продаже напитков" />
                    <main>
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/admin/main" element={<AdminMain />} />
                        </Routes>
                    </main>
                </Container>
            </div>
        </Router>
    );
};

export default App;
