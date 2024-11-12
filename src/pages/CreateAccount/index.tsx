import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, IconButton, InputAdornment, Link } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSubmit = () => {
        const userData = { firstName, lastName, username, password, email, phone };
        localStorage.setItem('userAccount', JSON.stringify(userData));
        console.log(userData)
        alert("Account created successfully!");
        navigate('/profile')

    };

    return (
        <Container sx={{ display: 'grid', gridTemplateColumns: "1fr 1.3fr", height: '100vh', alignItems: 'center', width: "85%", margin: "auto" }}>

            {/* Right Side - Login Form */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 4,
                }}
            >

                <Typography variant="subtitle1">
                    ساخت حساب کاربری جدید
                </Typography>

                <TextField
                    label="نام"
                    variant="standard"
                    fullWidth
                    margin="dense"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                    label="نام خانوادگی"
                    variant="standard"
                    fullWidth
                    margin="dense"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                    label="نام کاربری"
                    variant="standard"
                    fullWidth
                    margin="dense"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="کلمه ی عبور"
                    variant="standard"
                    fullWidth
                    margin="dense"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="ایمیل"
                    variant="standard"
                    fullWidth
                    margin="dense"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="شماره تماس"
                    variant="standard"
                    fullWidth
                    margin="dense"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center", alignItems: "center", marginTop: "2rem" }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ marginBottom: 2, backgroundColor: '#8B5CF6', borderRadius: "5rem", fontSize: "1rem", width: "50%", margin: "auto" }}
                        onClick={handleSubmit}
                    >
                        ثبت نام!!
                    </Button>

                    <Box sx={{ display: "flex", width: "100%", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
                        <Box sx={{ backgroundColor: "#999", height: "1px", width: "30%" }}></Box>
                        <Typography variant="caption" sx={{ color: "#999", fontSize: "0.5rem" }}>آیا حساب کاربری دارید؟</Typography>
                        <Box sx={{ backgroundColor: "#999", height: "1px", width: "30%" }}></Box>
                    </Box>
                    <Button variant="contained" color="secondary" sx={{ marginBottom: 2, backgroundColor: '#999', borderRadius: "5rem", fontSize: "1rem", width: "50%", margin: "auto" }}>
                        <Link href="/" color='#fff' sx={{ textDecoration: "none" }}>
                            وارد شوید!!
                        </Link>
                    </Button>
                </Box>
            </Box>

            {/* Left Side */}
            <Box
                sx={{
                    flex: 1,
                    backgroundColor: '#8B5CF6',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 4,
                    height: "90vh",
                    width: "100%",
                    borderRadius: "1rem"
                }}
            >
            </Box>
        </Container>
    );
};

export default Index;
