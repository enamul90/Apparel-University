import React from 'react';
import {Grid, Card, CardMedia, CardContent, Typography, Link, Box} from '@mui/material';
import Image1 from '../../../public/images/About1.png'

const AboutSection = () => {
    return (
        <Box sx={{backgroundColor: 'var(--cream-white)'}}>
            <Card className={"container mx-auto px-5 md:px-0 py-10"} sx={{boxShadow: 0, backgroundColor: 'transparent'}}>
                <Box className="block md:flex space-x-5 space-y-5" boxShadow={"none"}>
                    <Box className="w-full md:w-[40%]">
                        {/* Left side: Image */}
                        <CardMedia
                            component="img"
                            height="300"
                            width="100%"
                            image={Image1}
                            alt="Modern building"
                            sx={{ borderRadius: 2 }}
                        />
                    </Box>
                    <Box className="w-full md:w-[60%]">
                        <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom>
                                About Our Digital University
                            </Typography>
                            <Typography variant="body1" color="text.secondary" paragraph>
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                            </Typography>
                            <Link href="#" variant="body2" color="primary">
                                More Details →
                            </Link>
                        </CardContent>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
};

export default AboutSection;