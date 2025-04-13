import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Slide1 from '../../../public/images/hero1.png';
import {Box, Button, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

const HeroSection = () => {
    return (
        <Swiper
            pagination={{ dynamicBullets: true }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Box
                    sx={{
                        width: '100%',
                        height: '100vh',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Background image */}
                    <img
                        src={Slide1}
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay with gradient */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background:
                                'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.1))',
                            zIndex: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            px: 2,
                            textAlign: 'center',
                        }}
                    >
                        <Box sx={{ color: 'white', maxWidth: '800px' }}>
                            <Typography
                                variant="h3"
                                component="h1"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
                                    mb: 2,
                                }}
                            >
                                Learn Anytime, Anywhere
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 400,
                                    fontSize: { xs: '1rem', sm: '1.2rem' },
                                }}
                            >
                                with Expert-Led Courses Tailored to You
                            </Typography>
                            <Button
                                style={{backgroundColor: "var(--orange-bright)"}}
                                sx={{
                                    color: "var(--grey-light)",
                                    marginTop: "20px",
                                    paddingX: "10px"
                                }}
                            >
                                <Link to={"/"}>
                                    More Details
                                </Link>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box
                    sx={{
                        width: '100%',
                        height: '100vh',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Background image */}
                    <img
                        src={Slide1}
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay with gradient */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background:
                                'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.1))',
                            zIndex: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            px: 2,
                            textAlign: 'center',
                        }}
                    >
                        <Box sx={{ color: 'white', maxWidth: '800px' }}>
                            <Typography
                                variant="h3"
                                component="h1"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
                                    mb: 2,
                                }}
                            >
                                Learn Anytime, Anywhere
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 400,
                                    fontSize: { xs: '1rem', sm: '1.2rem' },
                                }}
                            >
                                with Expert-Led Courses Tailored to You
                            </Typography>
                            <Button
                                style={{backgroundColor: "var(--orange-bright)"}}
                                sx={{
                                    color: "var(--grey-light)",
                                    marginTop: "20px",
                                    paddingX: "10px"
                                }}
                            >
                                <Link to={"/"}>
                                    More Details
                                </Link>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box
                    sx={{
                        width: '100%',
                        height: '100vh',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Background image */}
                    <img
                        src={Slide1}
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay with gradient */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background:
                                'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.1))',
                            zIndex: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            px: 2,
                            textAlign: 'center',
                        }}
                    >
                        <Box sx={{ color: 'white', maxWidth: '800px' }}>
                            <Typography
                                variant="h3"
                                component="h1"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
                                    mb: 2,
                                }}
                            >
                                Learn Anytime, Anywhere
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 400,
                                    fontSize: { xs: '1rem', sm: '1.2rem' },
                                }}
                            >
                                with Expert-Led Courses Tailored to You
                            </Typography>
                            <Button
                                style={{backgroundColor: "var(--orange-bright)"}}
                                sx={{
                                    color: "var(--grey-light)",
                                    marginTop: "20px",
                                    paddingX: "10px"
                                }}
                            >
                                <Link to={"/"}>
                                    More Details
                                </Link>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </SwiperSlide>
        </Swiper>
    );
};

export default HeroSection;
