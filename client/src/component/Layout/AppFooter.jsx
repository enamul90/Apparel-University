import React from 'react';
import {
    Box,
    Typography,
    Stack,
    Divider,
    Link,
    IconButton,
} from '@mui/material';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const AppFooter = () => {
    return (
        <Box
            sx={{
                color: 'white',
                backgroundColor: "var(--blue-dark)", // Darker, more modern background
                py: 8,
                borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            }}
        >
            <Box
                className={"container mx-auto"}
                sx={{
                    px: { xs: 3, md: 0 },
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                    gap: { xs: 4, md: 6 },
                }}
            >
                {/* Logo & Description Section */}
                <Box>
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{ color: '#00bcd4', mb: 2, letterSpacing: 1 }}
                    >
                        EDUFLEX
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'grey.300',
                            mb: 3,
                            lineHeight: 1.8,
                            fontSize: '14px',
                            maxWidth: '250px',
                        }}
                    >
                        Empowering learning with cutting-edge courses in technology, design, and business.
                    </Typography>
                    <Stack direction="row" spacing={1.5}>
                        {[
                            { icon: <FaFacebookF />, color: '#3b5998', link: 'https://facebook.com' },
                            { icon: <FaInstagram />, color: '#e1306c', link: 'https://instagram.com' },
                            { icon: <FaLinkedinIn />, color: '#0077b5', link: 'https://linkedin.com' },
                            { icon: <FaTwitter />, color: '#1da1f2', link: 'https://twitter.com' },
                            { icon: <FaYoutube />, color: '#ff0000', link: 'https://youtube.com' },
                        ].map((social, index) => (
                            <IconButton
                                key={index}
                                component="a"
                                href={social.link}
                                target="_blank"
                                sx={{
                                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                    width: 40,
                                    height: 40,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        bgcolor: social.color,
                                        transform: 'scale(1.1)',
                                    },
                                }}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Stack>
                </Box>

                {/* Top Category Section */}
                <Box>
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ mb: 3, color: 'white', letterSpacing: 0.5 }}
                    >
                        TOP CATEGORIES
                    </Typography>
                    <Stack spacing={1.5}>
                        {['Development', 'Finance & Accounting', 'Design', 'Business'].map((category) => (
                            <Link
                                key={category}
                                href="#"
                                sx={{
                                    color: 'grey.300',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease',
                                    '&:hover': { color: '#00bcd4' },
                                }}
                            >
                                <Typography variant="body2" sx={{ fontSize: '14px' }}>
                                    {category}
                                </Typography>
                            </Link>
                        ))}
                    </Stack>
                </Box>

                {/* Quick Links Section */}
                <Box>
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ mb: 3, color: 'white', letterSpacing: 0.5 }}
                    >
                        QUICK LINKS
                    </Typography>
                    <Stack spacing={1.5}>
                        {[
                            { name: 'About', link: '#' },
                            { name: 'Become Instructor', link: '#', highlight: true },
                            { name: 'Contact', link: '#' },
                            { name: 'Career', link: '#' },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.link}
                                sx={{
                                    color: 'grey.300',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    transition: 'color 0.3s ease',
                                    '&:hover': { color: '#00bcd4' },
                                    '&:hover .arrow': {
                                        opacity: 1,
                                        transform: 'translateX(6px)',
                                    },
                                }}
                            >
                                <Typography variant="body2" sx={{ fontSize: '14px' }}>
                                    {link.name}
                                </Typography>
                                {link.highlight && (
                                    <Typography
                                        className="arrow"
                                        variant="body2"
                                        sx={{
                                            color: '#00bcd4',
                                            opacity: 0,
                                            transform: 'translateX(0)',
                                            transition: 'all 0.3s ease',
                                            fontSize: '16px',
                                        }}
                                    >
                                        →
                                    </Typography>
                                )}
                            </Link>
                        ))}
                    </Stack>
                </Box>

                {/* Support Section */}
                <Box>
                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ mb: 3, color: 'white', letterSpacing: 0.5 }}
                    >
                        SUPPORT
                    </Typography>
                    <Stack spacing={1.5}>
                        {['Help Center', 'FAQs', 'Terms & Conditions', 'Privacy Policy'].map((support) => (
                            <Link
                                key={support}
                                href="#"
                                sx={{
                                    color: 'grey.300',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease',
                                    '&:hover': { color: '#00bcd4' },
                                }}
                            >
                                <Typography variant="body2" sx={{ fontSize: '14px' }}>
                                    {support}
                                </Typography>
                            </Link>
                        ))}
                    </Stack>
                </Box>
            </Box>

            {/* Copyright Notice */}
            <Divider sx={{ my: 6, borderColor: 'rgba(255, 255, 255, 0.15)' }} />
            <Typography
                variant="body2"
                sx={{
                    color: 'grey.400',
                    textAlign: 'center',
                    fontSize: '13px',
                    letterSpacing: 0.5,
                }}
            >
                © {new Date().getFullYear()} - Eduflex. Designed by{' '}
                <Link href="#" sx={{ color: '#00bcd4', textDecoration: 'none' }}>
                    TemplateCookie
                </Link>
                . All rights reserved.
            </Typography>
        </Box>
    );
};

export default AppFooter;