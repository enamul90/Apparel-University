import React from 'react';
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Grid,
    Typography,
    Button,
} from '@mui/material';
import { Star, PlayCircleFilled, ArrowForward } from '@mui/icons-material';

const DataList = [
    {
        image: 'https://placehold.co/150x150',
        title: 'Machine Learning A-Z™: Hands-On Python & R In Data...',
        rating: '5.0',
        status: 'DESIGN',
    },
    {
        image: 'https://placehold.co/150x150',
        title: 'Machine Learning A-Z™: Hands-On Python & R In Data...',
        rating: '5.0',
        status: 'DESIGN',
    },
    {
        image: 'https://placehold.co/300x150',
        title: 'Machine Learning A-Z™: Hands-On Python & R In Data...',
        rating: '4.0',
        status: 'DESIGN',
    },
];

const CourseList = () => {
    return (
        <Box sx={{ backgroundColor: '#e8f0fe', p: 3 }}>
            <Grid container spacing={3} justifyContent="center">
                {DataList.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: '8px',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                overflow: 'hidden',
                                transition: 'transform 0.2s',
                                '&:hover': { transform: 'scale(1.02)' },
                            }}
                        >
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    alt="video"
                                    sx={{ height: 150, objectFit: 'cover' }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        borderRadius: '50%',
                                        padding: '5px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <PlayCircleFilled sx={{ color: '#fff', fontSize: 40 }} />
                                </Box>
                            </Box>
                            <CardContent sx={{ p: 2, flexGrow: 1 }}>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography
                                        variant="caption"
                                        sx={{ fontSize: '12px', fontWeight: 500, color: '#757575' }}
                                    >
                                        {item.status}
                                    </Typography>
                                    <Box display="flex" alignItems="center">
                                        <Typography
                                            variant="caption"
                                            sx={{ fontSize: '12px', fontWeight: 500, color: '#f5c518' }}
                                        >
                                            {item.rating}
                                        </Typography>
                                        <Star sx={{ color: '#f5c518', ml: 0.5, fontSize: 16 }} />
                                    </Box>
                                </Box>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        lineHeight: 1.4,
                                        mt: 1,
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        mt: 2,
                                        backgroundColor: '#1a73e8',
                                        color: 'white',
                                        textTransform: 'none',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        padding: '6px 16px',
                                        borderRadius: '4px',
                                        '&:hover': { backgroundColor: '#1557b0' },
                                    }}
                                    endIcon={<ArrowForward />}
                                >
                                    Start Learn
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CourseList;