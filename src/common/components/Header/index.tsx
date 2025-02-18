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
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { Badge } from '@mui/material'

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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar sx={{ cursor: 'pointer' }}>
          {/* <img
            src="https://storage.googleapis.com/a1aa/image/CGKh8Z-RFE4OPoYuZCkZ19fz_5mNIu6ZvQESiUvRgxQ.jpg"
            alt="Euphoria logo with the text 'Euphoria Keep it classy.'"
            style={{ height: 40, marginRight: 16 }}
          /> */}
          <Typography sx={{ cursor: 'pointer' }} variant="body1" color="textPrimary" noWrap>
            <Link to={'/'}>Shop</Link>
          </Typography>
          <Typography
            sx={{ cursor: 'pointer' }}
            variant="body1"
            color="textSecondary"
            noWrap
            style={{ marginLeft: 16 }}
          >
            <Link to={'/productList/men'}>Men</Link>
          </Typography>
          <Typography
            sx={{ cursor: 'pointer' }}
            variant="body1"
            color="textSecondary"
            noWrap
            style={{ marginLeft: 16 }}
          >
            <Link to={'/productList/women'}>Women</Link>
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
          <Link to = "/cart" >
          <IconButton color="inherit">
            <ShoppingCartIcon />
            {totalQuantity > 0 && (
                <Badge
                  badgeContent={totalQuantity}
                  color="error"
                  sx={{
                    position: 'absolute',
                    top: 7,
                    right: 0,
                    transform: 'translate(50%, -50%)',
                    fontSize: 12,
                    borderRadius: '50%',
                  }}
                />
              )}
          </IconButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
