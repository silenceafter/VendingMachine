import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/actions/authActions';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    useEffect(() => {    
        const handleSubmit = async () => {            
            dispatch(logout());
            navigate('/');            
        };
        handleSubmit();
    }, []);
    return null;
};

export { Logout };