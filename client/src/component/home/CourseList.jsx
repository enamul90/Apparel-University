import React from 'react';
import { Box, Stack, Typography, Card, CardMedia, CardContent } from "@mui/material";
import Image1 from '../../../public/images/course1.png';
import Image2 from '../../../public/images/course2.png';
import Image3 from '../../../public/images/course3.png';

const CourseList = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f7fa', py: 10 }}>
            <Box className="container mx-auto px-5 lg:px-0">

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4 }}>
                    {/* ----- Left Section: Main Event  ------ */}
                    <Box sx={{ width: { xs: '100%', lg: '50%' }, display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {/* First News Item */}
                        <Card
                            className={"block md:flex"}
                            sx={{
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                borderRadius: 3,
                                overflow: 'hidden',
                            }}
                        >
                            <CardMedia
                                component="img"
                                sx={{ width: { xs: '100%', md: '40%' }, height: 'auto' }}
                                src={Image2}
                                alt="Migrating to Linear 101"
                            />
                            <CardContent sx={{ p: 3, width: { xs: '100%', md: '60%' } }}>
                                <Typography variant="body2" color="primary.main" mb={1}>
                                    Phoenix Baker • 19 Jan 2022
                                </Typography>
                                <Typography variant="h6" fontWeight="medium" mb={1}>
                                    Migrating to Linear 101
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started...
                                </Typography>
                            </CardContent>
                        </Card>

                        {/* Second News Item */}
                        <Card
                            className={"block md:flex"}
                            sx={{
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                borderRadius: 3,
                                overflow: 'hidden',
                            }}
                        >
                            <CardMedia
                                component="img"
                                sx={{ width: { xs: '100%', md: '40%' }, height: 'auto' }}
                                src={Image2}
                                alt="Migrating to Linear 101"
                            />
                            <CardContent sx={{ p: 3, width: { xs: '100%', md: '60%' } }}>
                                <Typography variant="body2" color="primary.main" mb={1}>
                                    Phoenix Baker • 19 Jan 2022
                                </Typography>
                                <Typography variant="h6" fontWeight="medium" mb={1}>
                                    Migrating to Linear 101
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started...
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>

                    {/*------- Right Section: Newsletter Items -------*/}
                    <Card
                        sx={{

                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                            borderRadius: 3,
                            overflow: 'hidden',
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{width:"100%", height:{xs:"100%", lg:"250px"} }}
                            src={Image1}
                            alt="UX review presentation"
                        />
                        <CardContent sx={{ p: 3, bgcolor: '#fff' }}>
                            <Typography variant="body2" color="primary.main" mb={1}>
                                Olivia Rhye • 20 Jan 2022
                            </Typography>
                            <Typography variant="h5" fontWeight="medium" mb={2}>
                                UX Review Presentations
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                How do you create compelling presentations that wow your colleagues and impress your managers?
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
};

export default CourseList;