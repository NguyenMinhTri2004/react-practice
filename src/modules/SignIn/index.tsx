import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Divider,
  Link,
  Box,
  IconButton,
  InputAdornment,
} from '@mui/material';
import {
  Google as GoogleIcon,
  Twitter as TwitterIcon,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { useState } from 'react';

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <Grid container component="main" sx={{ boxShadow: 3 }}>
        <Grid item xs={12} md={6}>
          <img
            src="https://storage.googleapis.com/a1aa/image/VfsJUduacrooNcfvmv6ITlY99E_OVixL8sf6xVhxeKU.jpg"
            alt="Three women wearing sunglasses and smiling"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 4 }}>
          <Typography component="h1" variant="h4" gutterBottom>
            Sign In Page
          </Typography>
          <Button fullWidth variant="outlined" startIcon={<GoogleIcon />} sx={{ mb: 2 }}>
            Continue With Google
          </Button>
          <Button fullWidth variant="outlined" startIcon={<TwitterIcon />} sx={{ mb: 2 }}>
            Continue With Twitter
          </Button>
          <Divider sx={{ my: 2 }}>OR</Divider>
          <Box component="form" noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="User name or email address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              <Link href="#" variant="body2">
                Forget your password
              </Link>
            </Box>
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mb: 2 }}>
              Sign In
            </Button>
            <Typography variant="body2" align="center">
              Don't have an account?{' '}
              <Link href="#" variant="body2">
                Sign up
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignIn;
