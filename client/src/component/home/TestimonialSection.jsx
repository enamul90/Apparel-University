import React from 'react';
import { Box, Typography, Button, Stack, Card, CardMedia, CardContent, Link } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import image1 from "../../../public/images/Testimonial1.png"
import image2 from "../../../public/images/Testimonial2.png"
import image3 from "../../../public/images/Testimonial3.png"

const testimonials = [
    {
        name: 'Prof. Dr. Mohammad Abu Yousuf',
        title: 'Vice Chancellor',
        image: image1,
        description:
            "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived, not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
    },
    {
        name: 'Prof. Dr. Mohammad Abu Yousuf',
        title: 'Vice Chancellor',
        image: image2,
    },
    {
        name: 'Prof. Dr. Mohammad Abu Yousuf',
        title: 'Vice Chancellor',
        image: image3,
    },
];

const TestimonialSection = () => {
    return (
        <Box
            sx={{
                py: 6,
                px: { xs: 2, sm: 4 },
                bgcolor: 'white',
            }}
        >
            <Box
                className={"container mx-auto"}
            >
                {/* Main Testimonial Card */}
                <Card
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        borderRadius: 2,
                        boxShadow: 3,
                        mb: 4,
                        p: 4,
                        overflow: 'hidden',
                    }}
                >
                    {/* Image */}
                    <Stack>
                        <CardMedia
                            component="img"
                            image={testimonials[0].image}
                            alt={testimonials[0].name}
                            sx={{
                                width: { xs: '100%', md: 300 },
                                height: { xs: 300, md: 'auto' },
                                objectFit: 'cover',
                            }}
                        />
                        <Box>
                            <Typography variant="h6" fontWeight="medium">
                                {testimonials[0].name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {testimonials[0].title}
                            </Typography>
                        </Box>
                    </Stack>

                    {/* Content */}
                    <CardContent
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box>
                            <Typography variant="h5" fontWeight="bold" mb={2}>
                                What I Think About Our University
                            </Typography>
                            <Typography variant="body2" color="text.secondary" mb={2}>
                                {testimonials[0].description}
                            </Typography>
                        </Box>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: '#1976d2',
                                    color: 'white',
                                    textTransform: 'none',
                                    borderRadius: '20px',
                                    px: 3,
                                    '&:hover': { bgcolor: '#1565c0' },
                                }}
                            >
                                More Details
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>

                {/* Smaller Testimonial Cards */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                        gap: 3,
                    }}
                >
                    {testimonials.slice(1).map((testimonial, index) => (
                        <Card
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                borderRadius: 2,
                                boxShadow: 2,
                                overflow: 'hidden',
                            }}
                        >
                            {/* Image */}
                            <CardMedia
                                component="img"
                                image={testimonial.image}
                                alt={testimonial.name}
                                sx={{
                                    width: 150,
                                    height: 150,
                                    objectFit: 'cover',
                                }}
                            />

                            {/* Content */}
                            <CardContent sx={{ p: 2, flex: 1 }}>
                                <Typography variant="h6" fontWeight="medium">
                                    {testimonial.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mb={1}>
                                    {testimonial.title}
                                </Typography>
                                <Link
                                    href="#"
                                    sx={{
                                        color: '#1976d2',
                                        textDecoration: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        '&:hover': { color: '#1565c0' },
                                    }}
                                >
                                    More Details
                                    <ArrowForward fontSize="small" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default TestimonialSection;