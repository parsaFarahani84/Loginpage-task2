import { useEffect, useState } from 'react';
import { Box, Typography, Avatar, Link } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

interface User {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
}

const ProfilePage = () => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('userAccount');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userAccount');
        setUser(null);
        navigate('/');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f0f0f0',
                gap: '1rem',
            }}
        >
            <Box
                sx={{
                    height: '80vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Avatar
                    src="/path-to-avatar-image.jpg"
                    alt={user?.firstName || 'User'}
                    sx={{
                        width: 100,
                        height: 100,
                        backgroundColor: '#ddd',
                    }}
                />
                <LogoutIcon sx={{ color: '#999', cursor: 'pointer' }} onClick={handleLogout} />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    width: '80%',
                    maxWidth: '600px',
                    backgroundColor: '#8B5CF6',
                    borderRadius: '1rem',
                    padding: '2rem',
                    color: 'white',
                    position: 'relative',
                    height: '80vh',
                }}
            >
                {/* User Info */}
                <Box sx={{ marginRight: '3rem', display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                        اطلاعات کاربری
                    </Typography>
                    <Typography>نام: {user?.firstName || 'نام'} </Typography>
                    <Typography>نام‌خانوادگی: {user?.lastName || 'نام‌خانوادگی'} </Typography>
                    <Typography>نام کاربری: {user?.username || 'نام کاربری'} </Typography>
                    <Typography>ایمیل: {user?.email || 'ایمیل'} </Typography>
                    <Typography>شماره تماس: {user?.phone || 'شماره تماس'} </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ProfilePage;
