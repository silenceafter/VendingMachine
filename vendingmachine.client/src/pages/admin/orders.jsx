import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Typography, Box, Container, CircularProgress, Alert } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { BrandDropdown } from '../../components/brandDropdown';

const AdminOrders = () => {
    return (
        <Container>
            <Box display="flex" justifyContent="center" alignItems="flex-start" height="100vh">
                <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
                    <Typography variant="h5" component="h2" style={{ marginBottom: '16px' }}>
                        Заказы
                    </Typography>
                    <Link to="/admin/main" style={{ textDecoration: 'none' }}>
                        <Button sx={{ mb: 10 }} variant="contained" color="secondary">Назад</Button>
                    </Link>                    
                </Paper>
            </Box>
        </Container>
    );
};

export { AdminOrders };
