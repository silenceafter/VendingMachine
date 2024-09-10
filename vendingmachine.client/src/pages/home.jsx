import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Link to="/shop" style={{ textDecoration: 'none' }}>                                            
            <Button variant="contained" color="primary">Начать покупки</Button>
        </Link>
    );
};

export { Home };
