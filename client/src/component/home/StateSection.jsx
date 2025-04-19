import React from 'react';
import { Box, Typography, Stack, Paper } from '@mui/material';
import { FaUserGraduate, FaUsers, FaVideo, FaUserFriends } from 'react-icons/fa';

const stats = [
    {
        icon: <FaUserGraduate size={24} />,
        count: '300',
        label: 'Instructor',
        bgColor: '#4caf50', // Green
        iconBgColor: '#e8f5e9',
    },
    {
        icon: <FaUsers size={24} />,
        count: '20,000+',
        label: 'Student',
        bgColor: '#9c27b0', // Purple
        iconBgColor: '#f3e5f5',
    },
    {
        icon: <FaVideo size={24} />,
        count: '10,000+',
        label: 'Video',
        bgColor: '#f06292', // Pink
        iconBgColor: '#fce4ec',
    },
    {
        icon: <FaUserFriends size={24} />,
        count: '1,00,000+',
        label: "User's",
        bgColor: '#42a5f5', // Blue
        iconBgColor: '#e3f2fd',
    },
];

const StatsSection = () => {
    return (
        <Box
            sx={{
                py: 10,
                px: { xs: 2, sm: 4 },
                bgcolor: 'white',
            }}
        >
            <Box
                className={"container mx-auto"}
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4,' + ' 1fr)' },
                    gap: 3,
                }}
            >
                {stats.map((stat, index) => (
                    <Paper
                        key={index}
                        elevation={3}
                        sx={{
                            p: 3,
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                            },
                        }}
                    >
                        {/* Icon */}
                        <Box
                            sx={{
                                width: 60,
                                height: 60,
                                bgcolor: stat.iconBgColor,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: stat.bgColor,
                            }}
                        >
                            {stat.icon}
                        </Box>

                        {/* Count & Label */}
                        <Stack>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                sx={{ color: stat.bgColor }}
                            >
                                {stat.count}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {stat.label}
                            </Typography>
                        </Stack>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
};

export default StatsSection;