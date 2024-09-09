import React, { useState } from 'react';
import {
    Box,
    Container,
    Divider,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography,
  } from '@mui/material';
import { green, grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const AdminMain = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };
    const menuItems = [
        { text: 'Бренды', path: '/admin/brands' },
        { text: 'Товары', path: '/admin/products' },
        { text: 'Монеты', path: '/admin/coins' },
        { text: 'Заказы', path: '/admin/orders' }
      ];
    //
    return (
        <Container>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="flex-start"
                height="100vh"                
            >       
                <Paper elevation={4} style={{ padding: '20px', width: '30rem' }}>
                    <Typography variant="h5" component="h2" style={{ marginBottom: '16px' }}>
                        Админ-панель
                    </Typography>
                    <List>
                        {menuItems.map((item, index) => (
                            <div key={index}>
                                <ListItem
                                    button
                                    component={Link}
                                    to={item.path}
                                    selected={selectedIndex === index}
                                    onClick={() => handleListItemClick(index)}
                                    style={{
                                        backgroundColor: selectedIndex === index ? green[100] : 'transparent',
                                        transition: 'background-color 0.3s',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = grey[200]}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = selectedIndex === index ? green[100] : 'transparent'}
                                >
                                    <ListItemText primary={item.text} />
                                </ListItem>
                                <Divider />
                            </div>
                        ))}
                    </List>
                </Paper>
            </Box>           
        </Container>
    );
};

export { AdminMain };
