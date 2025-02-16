import { Container, Grid, Typography, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#1f2937',
    color: 'white',
    padding: '4rem 0',
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <ul>
              <li>
                <Button color="inherit">About Us</Button>
              </li>
              <li>
                <Button color="inherit">Careers</Button>
              </li>
              <li>
                <Button color="inherit">Press</Button>
              </li>
              <li>
                <Button color="inherit">Blog</Button>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <ul>
              <li>
                <Button color="inherit">Contact Us</Button>
              </li>
              <li>
                <Button color="inherit">FAQs</Button>
              </li>
              <li>
                <Button color="inherit">Shipping & Returns</Button>
              </li>
              <li>
                <Button color="inherit">Order Status</Button>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <ul>
              <li>
                <Button color="inherit">Privacy Policy</Button>
              </li>
              <li>
                <Button color="inherit">Terms of Service</Button>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
