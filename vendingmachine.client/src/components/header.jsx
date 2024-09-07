import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

function Header(props) {
    const { title } = props;
    const { admin } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1, mr: 2 }}
                >
                    {title}
                </Typography>
                <Box
                    display="flex"
                    flexDirection="row"
                    gap={2}
                    alignItems="center"
                >
                    {!admin 
                        ? (
                            <>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    component={RouterLink}
                                    to="/login"
                                >
                                    Войти как администратор
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    component={RouterLink}
                                    to="/logout"
                                >
                                    Выйти
                                </Button>
                            </>
                        )
                    }
                    
                </Box>
            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = { title: PropTypes.string.isRequired };
export default Header;
