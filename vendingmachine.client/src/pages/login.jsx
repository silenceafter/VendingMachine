import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/actions/authActions';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    useEffect(() => {    
        const handleSubmit = async () => {            
            dispatch(login());
            navigate('/admin/test');            
        };
        handleSubmit();
    }, []);
    return null;
};

export { Login };