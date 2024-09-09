import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Typography, Box, Container, CircularProgress, Alert } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const AdminBrands = () => {
    const [brandName, setBrandName] = useState('');
    const [brandsData, setBrandsData] = useState([]);
    const [error, setError] = useState(null);
    const [dataLoading, setDataLoading] = useState(false);
    const [loading, setLoading] = useState(false);

    //alert
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertVisible, setAlertVisible] = useState(false);

    const handleInputChange = (event) => {
        setBrandName(event.target.value);
    };
    const columns = [
        { field: 'id', headerName: '#', width: 70 },
        { field: 'name', headerName: 'Название', width: 130 }
      ];
    const paginationModel = { page: 0, pageSize: 5 };

    //useEffect
    useEffect(() => {
        const brandsRequest = async() => {
            setDataLoading(true);
            try {                
                const response = await fetch('https://localhost:7193/brands/get-brands/');
                if (response.ok) {
                    const brandsResponse = await response.json();
                    setBrandsData(brandsResponse);
                }                
            } catch (error) {
                setError(error);
            } finally {
                setDataLoading(false);
            }
        };
        brandsRequest();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setAlertVisible(false);

        try {
            const response = await fetch('https://localhost:7193/brands/add-brands/', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: brandName }),
            });

            if (!response.ok) {

                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setBrandName('');
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }

    };
    //
    return (
        <Container>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="flex-start"
                height="100vh"                
            >       
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
                            {brandsData && brandsData.length > 0 ? (
                                <DataGrid
                                    rows={brandsData}
                                    columns={columns}
                                    initialState={{ pagination: { paginationModel } }}
                                    pageSizeOptions={[5, 10]}
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
                                    value={brandName}
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
                            {alertVisible && 
                                <Alert 
                                    severity={alertSeverity} 
                                    style={{ marginTop: '16px' }}
                                >
                                    {alertMessage}
                                </Alert>
                            }
                        </>
                    )}
                </Paper>  
            </Box>
        </Container>
    );
};

export { AdminBrands };