import { Container, Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  heroContent: {
    backgroundColor: '#00AEEF',
    backgroundImage:
      'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7bzYu0ZTHfL_fTeyErFvxMDVv2WtJVcy1g&s)',
    padding: theme.spacing(8, 0, 6),
    position: 'relative',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  heroImage: {
    height: '600px',
    width: '400px',
  },
}));

const HeroSection: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box color="white">
            <Typography variant="h6">T-Shirt / Tops</Typography>
            <Typography variant="h2" component="h1" gutterBottom>
              Summer Value Pack
            </Typography>
            <Typography variant="h6">cool / colorful / comfy</Typography>
            <div className={classes.heroButtons}>
              <Button variant="contained" color="primary">
                Shop Now
              </Button>
            </div>
          </Box>
          {/* <img
            src="https://storage.googleapis.com/a1aa/image/bvA3RKOUHiGobUFLDC6DgPLJ9xGeJb9L5FltKwT0zXQ.jpg"
            alt="Woman holding shopping bags"
            className={classes.heroImage}
          /> */}
        </Box>
      </Container>
      {/* <IconButton className={classes.heroButtons} style={{ position: 'absolute', left: 0, top: '50%' }}>
        &lt;
      </IconButton>
      <IconButton className={classes.heroButtons} style={{ position: 'absolute', right: 0, top: '50%' }}>
        &gt;
      </IconButton> */}
    </div>
  );
};

export default HeroSection;
