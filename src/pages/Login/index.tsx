import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, IconButton, Link, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

const index = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();


    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleLogin = () => {
        const storedUser = localStorage.getItem('userAccount');
        if (storedUser) {
            const user = JSON.parse(storedUser);

            if (user.username === username && user.password === password) {
                alert('Login successful!');
                setError(null);
                navigate('/profile')
            } else {
                setError('نام کاربری یا رمز عبور اشتباه است');
            }
        } else {
            setError('هیچ حساب کاربری موجود نیست');
        }
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
                <Typography variant="h4" sx={{ fontWeight: '900' }}>
                    کندا ایده
                </Typography>
                <Typography variant="subtitle1" sx={{ marginBottom: 4 }}>
                    تجربه مهندسی خلاق
                </Typography>

                <TextField
                    label="نام کاربری"
                    variant="standard"
                    fullWidth
                    margin="dense"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="رمز عبور"
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
                {error && <Typography color="error" sx={{ marginTop: 2 }}>{error}</Typography>}

                <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center", alignItems: "center", marginTop: "2rem" }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ marginBottom: 2, backgroundColor: '#8B5CF6', borderRadius: "5rem", fontSize: "1rem", width: "50%", margin: "auto" }}
                        onClick={handleLogin}
                    >
                        ورود به سامانه
                    </Button>

                    <Box sx={{ display: "flex", width: "100%", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
                        <Box sx={{ backgroundColor: "#999", height: "1px", width: "30%" }}></Box>
                        <Typography variant="caption" sx={{ color: "#999", fontSize: "0.5rem" }}>آیا حساب کاربری ندارید؟</Typography>
                        <Box sx={{ backgroundColor: "#999", height: "1px", width: "30%" }}></Box>
                    </Box>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ marginBottom: 2, backgroundColor: '#999', borderRadius: "5rem", fontSize: "1rem", width: "50%", margin: "auto" }}
                    >
                        <Link href="/create" color='#fff' sx={{ textDecoration: "none" }}>
                            ساخت حساب کاربری
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

export default index;
