import React, { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Link,
    Paper,
    IconButton,
    InputAdornment, Stack
} from '@mui/material';
import { styled } from '@mui/system';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';


const FormWrapper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(5),
    borderRadius: theme.spacing(2),
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: 420,
}));

const StyledButton = styled(Button)({
    backgroundColor: '#a66beb',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#8b5cd9',
    },
});

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => setShowPassword(prev => !prev);

    return (
       <Box sx={{
           display: {xs:"block" , md:"flex"},
           background: {
               xs: 'linear-gradient(135deg, #f5d0a9 0%, #a66beb 100%)',
               md: 'none'
           },
           color: {xs: "black", md:"white"},
       }}>
           <Box sx={{
               width: {xs:"100%" , md: "50%"},
               background: {
                   xs: 'none',
                   md: 'linear-gradient(135deg, #f5d0a9 0%, #a66beb 100%)'
               },
               color: "white",
           }}>
               <Stack
                   height={{xs: "20vh", md: "100vh"}}
                   display="flex"
                   justifyContent={{xs: "flex-end", md: "center"}}
                   alignItems="center"
                   px={2}
               >
                   <Typography variant="h3" fontWeight="bold" gutterBottom>
                       Welcome Back!
                   </Typography>
                   <Typography variant="h6" sx={{ opacity: 0.9 }}>
                       We're happy to see you again.
                   </Typography>
               </Stack>
           </Box>
           {/* Right Side - Login Form */}
           <Box sx={{
               width: {xs:"100%" , md: "50%"},
           }}>
               <Box
                   height={{xs:"80vh", md: "100vh"}}
                   display="flex"
                   justifyContent="center"
                   alignItems="center"
                   px={2}
               >
                   <FormWrapper elevation={3}>
                       <Typography variant="h5" fontWeight="600" gutterBottom>
                           Login to Your Account
                       </Typography>
                       <Typography variant="body2" color="text.secondary" gutterBottom>
                           Enter your credentials to access your dashboard.
                       </Typography>

                       <TextField
                           label="Email or Username"
                           variant="outlined"
                           fullWidth
                           margin="normal"
                           placeholder="you@example.com"
                           autoComplete="username"
                       />

                       <TextField
                           label="Password"
                           type={showPassword ? 'text' : 'password'}
                           variant="outlined"
                           fullWidth
                           margin="normal"
                           placeholder="Enter your password"
                           autoComplete="current-password"
                           InputProps={{
                               endAdornment: (
                                   <InputAdornment position="end">
                                       <IconButton onClick={handleTogglePassword} edge="end">
                                           {showPassword ? <VisibilityOff /> : <Visibility />}
                                       </IconButton>
                                   </InputAdornment>
                               ),
                           }}
                       />

                       <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                           <FormControlLabel
                               control={<Checkbox color="primary" />}
                               label="Remember Me"
                           />
                           <Link href="#" underline="hover" color="primary">
                               Forgot Password?
                           </Link>
                       </Box>

                       <StyledButton variant="contained" fullWidth sx={{ mt: 3, py: 1.2 }}>
                           Login
                       </StyledButton>

                       <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                           New User?{' '}
                           <Link component={RouterLink} to="/register" underline="hover" color="primary">
                               Sign Up
                           </Link>
                       </Typography>
                   </FormWrapper>
               </Box>
           </Box>
       </Box>
    );
};

export default Login;
