import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Typography, Box, Container, CircularProgress, Alert } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const AdminProducts = () => {
    const [productName, setproductName] = useState('');
    const [productsData, setProductsData] = useState([]);
    const [error, setError] = useState(null);
    const [dataLoading, setDataLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitResult, setSubmitResult] = useState(null); 

    const handleInputChange = (event) => {
        setProductName(event.target.value);
    };

    const columns = [
        { field: 'id', headerName: '#', width: 70 },
        { field: 'name', headerName: 'Название', width: 130 },
        { field: 'price', headerName: 'Цена', width: 130 },
        { field: 'brand', headerName: 'Бренд', width: 130 }
    ];
    const paginationModel = { page: 0, pageSize: 5 };

    //useEffect
    useEffect(() => {
        const productsRequest = async () => {
            setDataLoading(true);
            try {
                const response = await fetch('https://localhost:7193/products/get-products/');
                if (response.ok) {
                    const productsResponse = await response.json();
                    setProductData(productsResponse);
                }
            } catch (error) {
                setError(error);
            } finally {
                setDataLoading(false);
            }
        };
        productsRequest();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/products/add-products/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productName),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setProductName('');
            setSubmitResult({ success: true, message: 'Бренд успешно добавлен!' });
        } catch (error) {
            console.error('Error:', error);
            setSubmitResult({ success: false, message: 'Ошибка при добавлении бренда.' });
        } finally {
            setLoading(false);
            // Таймаут для скрытия сообщения
            setTimeout(() => setSubmitResult(null), 3000);
        }
    };

    return (
        <Container>
            <Box display="flex" justifyContent="center" alignItems="flex-start" height="100vh">
                <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
                    <Typography variant="h5" component="h2" style={{ marginBottom: '16px' }}>
                        Бренды
                    </Typography>
                    <Link to="/admin/main" style={{ textDecoration: 'none' }}>
                        <Button sx={{ mb: 10 }} variant="contained" color="secondary">Назад</Button>
                    </Link>

                    {dataLoading ? (
                        <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                            <CircularProgress />
                        </Box>
                    ) : (
                        <>
                            {productsData && productsData.length > 0 ? (
                                <DataGrid
                                    rows={productsData}
                                    columns={columns}
                                    initialState={{ pagination: { paginationModel } }}
                                    pageSize={10}
                                    rowsPerPageOptions={[5, 10, 20]}
                                    pagination
                                    paginationMode="client"
                                    checkboxSelection
                                    sx={{ border: 0, mb: 3 }}
                                />
                            ) : (
                                <Typography variant="body1" color="textSecondary" align="center" sx={{ mb: 10 }}>
                                    Нет доступных брендов.
                                </Typography>
                            )}

                            <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
                                <TextField
                                    label="Название"
                                    variant="outlined"
                                    fullWidth
                                    value={productName}
                                    onChange={handleInputChange}
                                    required
                                    sx={{ mr: 2 }}
                                    disabled={loading}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    style={{ marginTop: '16px' }}
                                    disabled={loading}
                                >
                                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Добавить'}
                                </Button>
                            </form>

                            {submitResult && (
                                <Box sx={{ mt: 2 }}>
                                    <Alert severity={submitResult.success ? 'success' : 'error'}>
                                        {submitResult.message}
                                    </Alert>
                                </Box>
                            )}
                        </>
                    )}
                </Paper>
            </Box>
        </Container>
    );
};

export { AdminProducts };