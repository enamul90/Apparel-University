import React from 'react';
import {Box, CardMedia, Typography} from "@mui/material";
import CourseBanner from '../../../public/images/courseBanner1.png'
import CourseList from "../home/CourseList.jsx";
import PremiumCourses from "./premium-courses/PremiumCourses.jsx";

const Course = () => {
    return (
        <div>
            <Box sx={{position: 'relative'}}>
                <CardMedia
                    component="img"
                    width="100%"
                    height="100%"
                    src={CourseBanner}
                />
                <Typography variant="h5" component="p"
                    sx={{
                        position:'absolute',
                        top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        fontWeight: 'bold',
                    }}>
                    ALL OUR COURSES
                </Typography>
            </Box>
            <CourseList />
            <PremiumCourses />
        </div>
    );
};

export default Course;