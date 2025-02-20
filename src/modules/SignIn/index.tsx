import React, { useState } from 'react';
import loginImage from '../../assets/images/loginImage.png';
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
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email format'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
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
            src={loginImage}
            alt="Three women wearing sunglasses and smiling"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 4 }}>
          <Typography component="h1" variant="h4" gutterBottom>
            Sign In
          </Typography>
          <Button fullWidth variant="outlined" startIcon={<GoogleIcon />} sx={{ mb: 2 }}>
            Continue With Google
          </Button>
          <Button fullWidth variant="outlined" startIcon={<TwitterIcon />} sx={{ mb: 2 }}>
            Continue With Twitter
          </Button>
          <Divider sx={{ my: 2 }}>OR</Divider>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="User  name or email address"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ''}
                  aria-label="User  name or email address"
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ''}
                  aria-label="Password"
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
              )}
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              <Link href="#" variant="body2">
                Forget your password?
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
