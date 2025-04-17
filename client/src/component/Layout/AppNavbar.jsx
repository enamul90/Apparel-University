import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Box,
    Typography,
    TextField,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Stack,
} from '@mui/material';
import { Search, Menu } from '@mui/icons-material';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Course', path: '/course' },
    { name: 'Blog', path: '/blog' },
    { name: 'Overview', path: '/overview/about-university' },
    { name: 'Officers', path: '/officers/vice-chancellor' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Packages', path: '/packages' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

const AppNavbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        // Add search logic here if needed
    };

    return (
        <Box
            style={{backgroundColor: "var(--gray-light)"}}
            sx={{
                borderBottom: '1px solid #ddd',
                p: 2,
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Box
                className={"container mx-auto"}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 2,
                }}
            >
                {/* Logo */}
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: '#00bcd4', letterSpacing: 1 }}
                >
                    LOGO
                </Typography>

                {/* Search Bar */}
                <TextField
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    variant="outlined"
                    size="small"
                    InputProps={{
                        startAdornment: (
                            <Search sx={{ color: 'grey.500', mr: 1 }} />
                        ),
                        sx: {
                            borderRadius: '20px',
                            bgcolor: '#e0f7fa',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'transparent',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'transparent',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'transparent',
                            },
                        },
                    }}
                    sx={{
                        width: { xs: '100%', sm: 200, md: 300 },
                        display: { xs: 'none', sm: 'block' },
                    }}
                />

                {/* Desktop Navigation */}
                <Stack
                    direction="row"
                    spacing={{ xs: 2, md: 3 }}
                    sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
                >
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            style={{ textDecoration: 'none' }}
                        >
                            {({ isActive }) => (
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: isActive ? '#f39c12' : 'text.primary',
                                        fontWeight: isActive ? 600 : 400,
                                        position: 'relative',
                                        '&:hover': { color: '#f39c12' },
                                        '&:after': {
                                            content: isActive ? '""' : 'none',
                                            position: 'absolute',
                                            bottom: -4,
                                            left: 0,
                                            width: '100%',
                                            height: 2,
                                            bgcolor: '#f39c12',
                                        },
                                    }}
                                >
                                    {item.name}
                                </Typography>
                            )}
                        </NavLink>
                    ))}
                </Stack>

                {/* Mobile Menu Icon */}
                <IconButton
                    sx={{ display: { xs: 'block', md: 'none' } }}
                    onClick={toggleDrawer(true)}
                >
                    <Menu />
                </IconButton>
            </Box>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ width: 250, bgcolor: 'white' }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {navItems.map((item) => (
                            <ListItem key={item.name} sx={{ py: 1 }}>
                                <NavLink
                                    to={item.path}
                                    style={{ textDecoration: 'none', width: '100%' }}
                                >
                                    {({ isActive }) => (
                                        <ListItemText
                                            primary={item.name}
                                            primaryTypographyProps={{
                                                sx: {
                                                    color: isActive ? '#f39c12' : 'text.primary',
                                                    fontWeight: isActive ? 600 : 400,
                                                    textAlign: isActive ? 'center' : 'center',
                                                },
                                            }}
                                        />
                                    )}
                                </NavLink>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};

export default AppNavbar;