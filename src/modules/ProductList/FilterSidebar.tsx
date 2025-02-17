import {
  Box,
  Typography,
  Slider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const FilterSidebar: React.FC = () => {
  return (
    <Box width="25%" p={3} bgcolor="white" borderRight="1px solid #e0e0e0">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6">Filter</Typography>
        <FilterListIcon color="action" />
      </Box>
      <Box mb={3}>
        {/* <Typography variant="subtitle1" gutterBottom>
          Tops
        </Typography> */}
        <List>
          {[
            'Printed T-shirts',
            'Plain T-shirts',
            'Kurti',
            'Boxers',
            'Full sleeve T-shirts',
            'Joggers',
            'Payjamas',
            'Jeans',
          ].map((text) => (
            <ListItem key={text} component="div">
              <ListItemText sx={{ cursor: 'pointer' }} primary={text} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="chevron">
                  <ChevronRightIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box ml={2}>
        <Typography variant="subtitle1" gutterBottom>
          Price
        </Typography>
        <Slider defaultValue={50} aria-labelledby="price-slider" />
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography>$70</Typography>
          <Typography>$600</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterSidebar;
