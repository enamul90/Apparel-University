import React from "react";
import {
    Box,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Backdrop,
    Avatar,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Image from "../../../../public/images/course1.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const courses = Array(12).fill({
    title: "Machine Learning 6+ Projects in Python & R",
    image: Image,
    views: "12.5k",
    detailsLink: "#",
});

const PremiumCourses = () => {
    return (
        <Box className="container mx-auto px-5 lg:px-0 my-10">
            {/* Header */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    bgcolor: "var(--blue-dark)",
                    color: "#fff",
                    px: { xs: 2, md: 4 },
                    py: 3,
                    mb: 5,
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}

            >
                <Box maxWidth={{ xs: "100%", md: "70%" }}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        Premium Courses
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)" }}>
                        Vestibulum sed dolor et diam mollis maximus vel nec dolor. Donec varius purus at eleifend porta.
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        borderRadius: 8,
                        bgcolor: "var(--orange-bright)",
                        fontWeight: 600,
                        textTransform: "none",
                        px: 3,
                        ml: 3,
                        whiteSpace: "nowrap",
                        "&:hover": {
                            bgcolor: "var(--orange-bright-hover, #e67e22)",
                        },
                    }}
                >
                    Buy Premium
                </Button>
            </Box>

            {/* Course Grid */}
            <Box position="relative" sx={{ px: { xs: 0, md: 2 } }} >
                <Grid
                    container
                    spacing={3}
                    sx={{
                        filter: "blur(1.5px)",
                        pointerEvents: "none",
                        userSelect: "none",
                        opacity: 0.8,
                        p: 4
                    }}
                >
                    {courses.map((course, index) => (
                        <Grid size={{ xs: 6, sm: 4, md: 4 , lg:3}} key={index}>
                            <Card
                                sx={{
                                    borderRadius: 3,
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                                    transition: "transform 0.25s ease",
                                    "&:hover": {
                                        transform: "scale(1.02)",
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="160"
                                    image={course.image}
                                    alt="Course"
                                    sx={{
                                        borderTopLeftRadius: 12,
                                        borderTopRightRadius: 12,
                                        objectFit: "cover",
                                    }}
                                />
                                <CardContent>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={600}
                                        gutterBottom
                                        noWrap
                                    >
                                        {course.title}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {course.views} views
                                    </Typography>
                                    <Button>
                                        More Details <ArrowForwardIcon />
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Lock Overlay */}
                <Backdrop
                    open
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 10,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(33, 150, 243, 0.2)",
                        backdropFilter: "blur(2px)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        textAlign: "center",
                    }}
                >
                    <Avatar
                        sx={{
                            bgcolor: "warning.main",
                            width: 90,
                            height: 90,
                            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        }}
                    >
                        <LockIcon sx={{ fontSize: 44, color: "#fff" }} />
                    </Avatar>
                    <Typography
                        variant="h6"
                        mt={2}
                        fontWeight={600}
                        color="white"
                        sx={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
                    >
                        Premium Access Required
                    </Typography>
                </Backdrop>
            </Box>
        </Box>
    );
};

export default PremiumCourses;
