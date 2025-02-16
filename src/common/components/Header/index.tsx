import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Container } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Container>
        <Toolbar>
          <img
            src="https://storage.googleapis.com/a1aa/image/CGKh8Z-RFE4OPoYuZCkZ19fz_5mNIu6ZvQESiUvRgxQ.jpg"
            alt="Euphoria logo with the text 'Euphoria Keep it classy.'"
            style={{ height: 40, marginRight: 16 }}
          />
          <Typography variant="h6" color="textPrimary" noWrap>
            Shop
          </Typography>
          <Typography variant="h6" color="textSecondary" noWrap style={{ marginLeft: 16 }}>
            Men
          </Typography>
          <Typography variant="h6" color="textSecondary" noWrap style={{ marginLeft: 16 }}>
            Women
          </Typography>
          <Typography variant="h6" color="textSecondary" noWrap style={{ marginLeft: 16 }}>
            Combos
          </Typography>
          <Typography variant="h6" color="textSecondary" noWrap style={{ marginLeft: 16 }}>
            Joggers
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
          <IconButton color="inherit">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
