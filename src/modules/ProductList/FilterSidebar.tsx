import React, { useState } from 'react';
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
  Collapse,
  IconButton,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { categories } from '@/assets/fakeData';

type FilterSidebarProps = {
  selectedType: string;
  onTypeChange: (type: string) => void;
  priceRange: number[];
  onPriceChange: (range: number[]) => void;
};

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedType,
  onTypeChange,
  priceRange,
  onPriceChange,
}) => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);

  const handleCategoryToggle = () => {
    setOpenCategory((prev) => !prev);
  };

  const handlePriceToggle = () => {
    setOpenPrice((prev) => !prev);
  };

  return (
    <Box width="25%" p={3} bgcolor="white" borderRight="1px solid #e0e0e0">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6">Filter</Typography>
        <FilterListIcon color="action" />
      </Box>

      <Box mb={3}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          onClick={handleCategoryToggle}
          sx={{ cursor: 'pointer' }}
        >
          <Typography variant="subtitle1" gutterBottom>
            Category
          </Typography>
          <IconButton size="small">
            {openCategory ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>
        <Collapse in={openCategory}>
          <RadioGroup value={selectedType} onChange={(e) => onTypeChange(e.target.value)}>
            <List>
              {categories.map((text) => (
                <ListItem key={text} component="div">
                  <ListItemText sx={{ cursor: 'pointer' }} primary={text} />
                  <ListItemSecondaryAction>
                    <Radio
                      value={text}
                      checked={selectedType === text}
                      onChange={() => onTypeChange(text)}
                      aria-label={`Select ${text}`}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </RadioGroup>
        </Collapse>
      </Box>

      <Box mb={3}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          onClick={handlePriceToggle}
          sx={{ cursor: 'pointer' }}
        >
          <Typography variant="subtitle1" gutterBottom>
            Price
          </Typography>
          <IconButton size="small">
            {openPrice ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>
        <Collapse in={openPrice}>
          <Box ml={2}>
            <Slider
              value={priceRange}
              onChange={(_, newValue) => onPriceChange(newValue as number[])}
              min={10}
              max={999999}
              aria-labelledby="price-slider"
            />
            <Box display="flex" justifyContent="space-between" mt={1}>
              <Typography>${priceRange[0]}</Typography>
              <Typography>${priceRange[1]}</Typography>
            </Box>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};

export default FilterSidebar;
