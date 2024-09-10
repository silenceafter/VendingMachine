import React, { useState, useEffect } from 'react';
import { Box, Button, Select, MenuItem, Slider, Typography, Container, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { BrandDropdown } from '../components/brandDropdown';
import { ProductGrid } from '../components/productGrid';

const Shop = () => {
    const [value, setValue] = useState(50);
    const [option, setOption] = useState('');
    const [brandName, setBrandName] = useState('');
    const [brandsData, setBrandsData] = useState([]);
    const [error, setError] = useState(null);
    const [dataLoading, setDataLoading] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOptionChange = (event) => {
        setOption(event.target.value);
    };

    const handleButtonClick = () => {
        alert(`Вы выбрали: ${option}, стоимость: ${value}`);
    };

    const handleBrandChange = (brandName) => {
        if (brandName) {
            setBrandName(brandName);
        }        
    };

    useEffect(() => {
        //получить бренды
        const brandsRequest = async () => {
            setDataLoading(true);
            try {
                const response = await fetch('/brands/get-brands/');
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

        //получить товары
        const productsRequest = async () => {
            try {
                const response = await fetch('/products/get-products/');
                if (response.ok) {
                    const productsResponse = await response.json();
                    setProductsData(productsResponse);
                }
            } catch (error) {
                setError(error);
            } finally {
                setDataLoading(false);
            }
        };
        productsRequest();
    }, []);

    return (
        <Container>
            <Box display="flex" justifyContent="center" alignItems="flex-start" height="100vh">
                <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
                    <Typography variant="h5" component="h2" style={{ marginBottom: '16px' }}>
                        Газированные напитки
                    </Typography>                    
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ padding: 2, border: '1px solid #ccc', borderRadius: '8px', mb: 2 }}
                    >
                        <BrandDropdown onChange={handleBrandChange} />
                        <Box sx={{ width: 300, mr: 2 }}>
                            <Typography gutterBottom>Стоимость: {value}</Typography>
                            <Slider
                            value={value}
                            onChange={handleSliderChange}
                            aria-labelledby="continuous-slider"
                            min={0}
                            max={100}
                            />
                        </Box>
                        <Button variant="contained" onClick={handleButtonClick}>
                            Выбрано
                        </Button>
                    </Box>
                    <ProductGrid props={brandName} />
                </Paper>
            </Box>
        </Container>
    );
};

export { Shop };
