import React, { useState } from 'react';
import Image1 from '../../../public/images/blog1.png';
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AllBlog = () => {
    const [showBtn, setShowBtn] = useState(false);

    const handleCategoryBtn = () => {
        setShowBtn(!showBtn);
    };

    return (
        <Box sx={{ bgcolor: '#f9fafb', py: 6 }}>
            {/* Header and Category Button */}
            <Box
                className="container mx-auto px-4 xl:px-0"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 4,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 'bold', color: '#1a202c', letterSpacing: '-0.025em' }}
                >
                    Blog List
                </Typography>
                <Box sx={{ position: 'relative' }}>
                    {/* Toggle Button for smaller screens */}
                    <Button
                        onClick={handleCategoryBtn}
                        aria-label="Toggle category menu"
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            p: 1,
                            minWidth: 'auto',
                            color: '#1a202c',
                            '&:hover': { bgcolor: '#e5e7eb' },
                        }}
                    >
                        <FaBars size={24} />
                    </Button>
                    {/* Category Dropdown for Mobile */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 40,
                            right: 0,
                            minWidth: 200,
                            bgcolor: 'white',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            borderRadius: 2,
                            display: showBtn ? { xs: 'flex', md: 'none' } : 'none',
                            flexDirection: 'column',
                            py: 2,
                            transition: 'all 0.3s ease-in-out',
                        }}
                    >
                        {['Category 1', 'Category 2', 'Category 3', 'Category 4'].map((category, idx) => (
                            <NavLink
                                key={idx}
                                to="/"
                                style={{
                                    padding: '10px 20px',
                                    color: '#4a5568',
                                    textDecoration: 'none',
                                    '&:hover': { bgcolor: '#f7fafc' },
                                }}
                                onClick={() => setShowBtn(false)}
                            >
                                {category}
                            </NavLink>
                        ))}
                    </Box>
                    {/* Category List for Desktop */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 3,
                            alignItems: 'center',
                        }}
                    >
                        {['Category 1', 'Category 2', 'Category 3', 'Category 4'].map((category, idx) => (
                            <NavLink
                                key={idx}
                                to="/"
                                style={{
                                    color: '#4a5568',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    padding: '8px 12px',
                                    borderRadius: 4,
                                    transition: 'background-color 0.2s',
                                }}
                                sx={{
                                    '&:hover': { bgcolor: '#e5e7eb' },
                                }}
                            >
                                {category}
                            </NavLink>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* Blog List */}
            <Box className="container mx-auto px-4 xl:px-0">
                <Grid container spacing={{xs:1 ,md:2, lg:3}}>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Grid size={{ xs: 12, sm:6, md: 4 , lg:4,}}  key={i}>
                            <Card
                                sx={{
                                    borderRadius: 3,
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    src={Image1}
                                    alt={`Blog Image`}
                                    loading="lazy"
                                    sx={{
                                        width: '100%',
                                        maxHeight: 250,
                                        objectFit: 'cover',
                                        borderTopLeftRadius: 12,
                                        borderTopRightRadius: 12,
                                    }}
                                />
                                <CardContent sx={{ p: 3 }}>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: 'var(--blue-dark)', mb: 1 }}
                                    >
                                        ALEC WHITTEN • 17 JAN 2022 {i + 1}
                                    </Typography>
                                    <Typography fontWeight={'bold'} variant="body2" sx={{ color: '#4a5568', mb: 2 }}>
                                        BILL WALSH LEADERSHIP LESSONS {i + 1}.
                                        <ArrowForwardIcon sx={{ ml: 1, color: 'primary.main' }} />
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                                            Like to know the secret of transforming a 2-14 team into a 3x Super Bowl winning dynasty?
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box className="container mx-auto px-4 xl:px-0 py-10">
                Pagination
            </Box>
        </Box>
    );
};

export default AllBlog;