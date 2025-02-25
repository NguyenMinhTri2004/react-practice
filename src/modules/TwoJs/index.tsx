import Canvas from './Canvas';
import { Container } from '@mui/material';

const TwoJs = () => {
  return (
    <Container sx={{ marginTop: '100px' }}>
      <h1>Arrow Drawing App</h1>
      <Canvas />
    </Container>
  );
};

export default TwoJs;
