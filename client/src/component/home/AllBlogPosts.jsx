import React from 'react';
import {Box, Grid, Card, CardMedia, CardContent, Typography, Button} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image1 from '../../../public/images/blog1.png'

const blogPosts = [
    {
        author: 'Alec Whitten',
        date: '17 Jan 2022',
        title: 'Bill Walsh leadership lessons',
        description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
        image: Image1
    },
    {
        author: 'Alec Whitten',
        date: '17 Jan 2022',
        title: 'Bill Walsh leadership lessons',
        description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
        image: Image1
    },
    {
        author: 'Alec Whitten',
        date: '17 Jan 2022',
        title: 'Bill Walsh leadership lessons',
        description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
        image: Image1
    },
];

const AllBlogPosts = () => {
    return (
        <Box className={"container mx-auto px-5 lg:px-0 py-10"}>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 5}}>
                <Typography variant={"h5"}>
                    All Blog Posts
                </Typography>
                <Button>
                    <ArrowForwardIcon />
                </Button>
            </Box>
            {/* Blog Posts Grid */}
            <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-5 space-y-5">
                {blogPosts.map((post, index) => (
                    <Card key={index} sx={{ boxShadow: '0 4px 20px rgba(0,0,0,0.05)', borderRadius: 2, overflow: 'hidden' }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={post.image}
                            alt={post.title}
                        />
                        <CardContent sx={{ p: 3 }}>
                            <Typography variant="body2" color="primary.main" mb={1}>
                                {post.author} • {post.date}
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="h6" fontWeight="medium">
                                    {post.title}
                                </Typography>
                                <ArrowForwardIcon sx={{ color: '#1976d2' }} />
                            </Box>
                            <Typography variant="body2" color="text.secondary" mt={1}>
                                {post.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default AllBlogPosts;