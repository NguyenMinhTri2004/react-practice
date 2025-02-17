import { Container } from '@mui/material';

const Section = (props: React.PropsWithChildren<object>) => {
  return (
    <Container sx={{ padding: 2 }} maxWidth="xl">
      {props.children}
    </Container>
  );
};

export default Section;
