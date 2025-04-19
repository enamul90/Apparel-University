import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TopMenu = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'var(--blue-dark)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                py: 1.5,
            }}
        >
            <Box
                className="container mx-auto"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 2,
                    px: 2,
                }}
            >
                {/* Contact Info */}
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={3}
                    alignItems={{ xs: 'flex-start', sm: 'center' }}
                >
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <FaPhoneAlt style={{ color: 'white', fontSize: 16 }} />
                        <Typography variant="body2" sx={{ color: 'white' }}>
                            01722924089
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <FaEnvelope style={{ color: 'white', fontSize: 16 }} />
                        <Typography variant="body2" sx={{ color: 'white' }}>
                            school@gmail.com
                        </Typography>
                    </Stack>
                </Stack>

                {/* Auth Buttons */}
                <Stack direction="row" spacing={2}>
                    <Button
                        component={Link}
                        to="/register"
                        variant="outlined"
                        sx={{
                            color: 'white',
                            borderColor: 'white',
                            textTransform: 'none',
                            borderRadius: '6px',
                            px: 3,
                            py: 0.7,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                borderColor: 'white',
                            },
                        }}
                    >
                        Sign Up
                    </Button>
                    <Button
                        component={Link}
                        to="/login"
                        variant="contained"
                        sx={{
                            backgroundColor: '#f39c12',
                            color: 'white',
                            textTransform: 'none',
                            borderRadius: '6px',
                            px: 3,
                            py: 0.7,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#e67e22',
                            },
                        }}
                    >
                        Login
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default TopMenu;
