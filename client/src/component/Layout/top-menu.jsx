import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const TopMenu = () => {
    return (
        <Box
            style={{backgroundColor: "var(--blue-dark)"}}
            sx={{
                p: 2,
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}
        >
            <Box
                className={"container mx-auto"}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mx: 'auto',
                    flexWrap: 'wrap',
                    gap: 2,
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

                {/* Action Buttons */}
                <Stack direction="row" spacing={2}>
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: 'white',
                            color: 'white',
                            textTransform: 'none',
                            borderRadius: '5px',
                            px: 3,
                            py: 0.5,
                            '&:hover': {
                                borderColor: 'white',
                                bgcolor: 'rgba(255, 255, 255, 0.1)',
                            },
                        }}
                    >
                        Sign Up
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: '#f39c12',
                            color: 'white',
                            textTransform: 'none',
                            borderRadius: '5px',
                            px: 3,
                            py: 0.5,
                            '&:hover': {
                                bgcolor: '#e67e22',
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