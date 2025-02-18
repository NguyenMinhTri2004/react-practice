import {
  Box,
  Typography,
  Slider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Radio,
  RadioGroup,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const categories = ['T-Shirts', 'Jackets', 'Sweaters', 'Shoes', 'Pants', 'Dresses', 'Shirts'];

interface FilterSidebarProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
  priceRange: number[];
  onPriceChange: (range: number[]) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedType,
  onTypeChange,
  priceRange,
  onPriceChange,
}) => {
  return (
    <Box width="25%" p={3} bgcolor="white" borderRight="1px solid #e0e0e0">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6">Filter</Typography>
        <FilterListIcon color="action" />
      </Box>

      <Box mb={3}>
        <Typography variant="subtitle1" gutterBottom>
          Category
        </Typography>
        <RadioGroup value={selectedType} onChange={(e) => onTypeChange(e.target.value)}>
          <List>
            {categories.map((text) => (
              <ListItem key={text} component="div" onClick={() => onTypeChange(text)}>
                <ListItemText sx={{ cursor: 'pointer' }} primary={text} />
                <ListItemSecondaryAction>
                  <Radio value={text} checked={selectedType === text} />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </RadioGroup>
      </Box>

      <Box ml={2}>
        <Typography variant="subtitle1" gutterBottom>
          Price
        </Typography>
        <Slider
          value={priceRange}
          onChange={(_, newValue) => onPriceChange(newValue as number[])}
          min={10}
          max={600}
          aria-labelledby="price-slider"
        />
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography>${priceRange[0]}</Typography>
          <Typography>${priceRange[1]}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterSidebar;
