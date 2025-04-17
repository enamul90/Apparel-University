import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import HeadsetIcon from '@mui/icons-material/Headset';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const companies = [
    {
        name: 'Company Name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
    },
    {
        name: 'Company Name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
    },
    {
        name: 'Company Name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
    },
    {
        name: 'Company Name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
    },
];

const WorkedWithSection = () => {
    return (
        <Box className={"container mx-auto px-5 lg:px-5 py-10"}>
            {/* Section Title */}
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ color: '#123456', textAlign: 'center', mb: 5 }}
            >
                Who We Have Worked With So Far
            </Typography>

            {/* Swiper Carousel */}
            <Swiper
                modules={[Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    960: { slidesPerView: 3 },
                }}
                style={{
                    '--swiper-pagination-color': '#f5a623',
                    '--swiper-pagination-bullet-inactive-color': '#d3d3d3',
                    '--swiper-pagination-bullet-inactive-opacity': '0.5',
                    '--swiper-pagination-bullet-size': '10px',
                    '--swiper-pagination-bullet-horizontal-gap': '6px',
                    paddingBottom: '60px',
                }}
            >
                {companies.map((company, index) => (
                    <SwiperSlide key={index}>
                        <Card
                            sx={{
                                cursor: 'pointer',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                borderRadius: 3,
                                textAlign: 'center',
                                p: 3,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <HeadsetIcon sx={{ fontSize: 40, color: '#1976d2', mb: 2 }} />
                            <CardContent sx={{ p: 0 }}>
                                <Typography variant="h6" fontWeight="medium" mb={1}>
                                    {company.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {company.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default WorkedWithSection;