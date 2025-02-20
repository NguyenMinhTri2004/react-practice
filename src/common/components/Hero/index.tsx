import { Container, Typography, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  hero: {
    position: 'relative',
    color: 'white',
    padding: '4rem 0',
    textAlign: 'center',
    backgroundColor: '#3b82f6',
  },
  heroImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.5,
  },
});

const HeroSection: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.hero}>
      <Container>
        <Typography variant="h2" component="h1" gutterBottom>
          Summer Value Pack
        </Typography>
        <Typography variant="h5" paragraph>
          Get the best deals on summer fashion
        </Typography>
        <Button variant="contained" color="primary">
          Shop Now
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
