import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: 'white',
      }}
    >
      <Box sx={{ position: 'relative', display: 'inline-block' }}>
        <Typography variant="h1" component="span" sx={{ fontWeight: 'bold', color: 'gray.800' }}>
          4
        </Typography>
        <Typography
          variant="h1"
          component="span"
          sx={{ fontWeight: 'bold', color: 'gray.800', mx: 2 }}
        >
          0
        </Typography>
        <Typography variant="h1" component="span" sx={{ fontWeight: 'bold', color: 'gray.800' }}>
          4
        </Typography>
      </Box>
      <Typography variant="h5" component="h1" sx={{ mt: 2, fontWeight: 'bold', color: 'gray.900' }}>
        Oops! Page not found
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, color: 'gray.500' }}>
        The page you are looking for might have been removed or temporarily unavailable.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2, bgcolor: 'purple.600', '&:hover': { bgcolor: 'purple.700' } }}
        onClick={() => navigate('/')}
      >
        Back to HomePage
      </Button>
    </Container>
  );
};

export default NotFound;
