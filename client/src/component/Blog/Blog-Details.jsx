import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Button, Box, Avatar, Divider } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for custom styling
const HeaderImage = styled('img')({
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
});

const SidebarCard = styled(Card)({
    marginTop: '20px',
    padding: '16px',
});

const CourseCard = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
});

const CourseMedia = styled(CardMedia)({
    height: 140,
});

const BlogDetails = () => {
    // Sample data for courses
    const courses = [
        { title: 'Machine Learning A-Z', rating: 4.5, price: '$19.99', image: 'https://via.placeholder.com/150' },
        { title: 'Deep Learning A-Z', rating: 4.7, price: '$24.99', image: 'https://via.placeholder.com/150' },
        { title: 'Python for Data Science', rating: 4.3, price: '$14.99', image: 'https://via.placeholder.com/150' },
        { title: 'AI for Beginners', rating: 4.6, price: '$29.99', image: 'https://via.placeholder.com/150' },
    ];

    return (
        <Box className={"container mx-auto px-5 lg:px-0 py-10"}>
            {/* Header Image */}
            <HeaderImage
                src="https://via.placeholder.com/1200x300?text=Header+Image"
                alt="Header"
            />

            {/* Main Content and Sidebar */}
            <Grid container spacing={4} sx={{ marginTop: 2 }}>
                {/* Main Content */}
                <Grid item xs={12} md={8}>
                    <Typography variant="h4" gutterBottom>
                        There Are Many Variations of Passages of Lorem Ipsum
                    </Typography>
                    <Typography variant="body1" paragraph>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                        May 16, 2017
                    </Typography>
                </Grid>

                {/* Sidebar */}
                <Grid size={{xs: 12, md:12}}>
                    <SidebarCard>
                        <Typography variant="h6" gutterBottom>
                            Comments
                        </Typography>
                        <Box display="flex" alignItems="center" mb={2}>
                            <Avatar alt="Alex L." sx={{ marginRight: 2 }} />
                            <Box>
                                <Typography variant="subtitle2">Alex L.</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Really helpful! Thanks for the info.
                                </Typography>
                            </Box>
                        </Box>
                        <Divider />
                        <Box display="flex" alignItems="center" mt={2}>
                            <Avatar alt="Brian M." sx={{ marginRight: 2 }} />
                            <Box>
                                <Typography variant="subtitle2">Brian M.</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Great article! Looking forward to more.
                                </Typography>
                            </Box>
                        </Box>
                    </SidebarCard>
                </Grid>
            </Grid>

            {/* Related Courses Section */}
            <Typography variant="h5" sx={{ marginTop: 4, marginBottom: 2 }}>
                Related Courses
            </Typography>
            <Box className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4" >
                {courses.map((course, index) => (
                    <Box  key={index}>
                        <CourseCard>
                            <CourseMedia image={course.image} title={course.title} />
                            <CardContent>
                                <Typography variant="body1" component="div">
                                    {course.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Rating: {course.rating} ★
                                </Typography>
                                <Typography variant="body1" color="primary">
                                    {course.price}
                                </Typography>
                                <Button variant="contained" color="primary" sx={{ marginTop: 1 }}>
                                    Learn Now
                                </Button>
                            </CardContent>
                        </CourseCard>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default BlogDetails;