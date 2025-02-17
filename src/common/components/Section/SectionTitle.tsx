import { Box, Typography } from '@mui/material';

const SectionTitle = (props: React.PropsWithChildren<object>) => {
  return (
    <Box sx={{ paddingBottom: 2, paddingTop: 2 }} display="flex" alignItems="center" gap={1}>
      <Box width={4} height={24} bgcolor="blue" borderRadius="full"></Box>
      <Typography variant="h6" fontWeight="bold" color="textPrimary">
        {props.children}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
