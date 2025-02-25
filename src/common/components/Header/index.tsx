import React, { useState, useEffect } from 'react';
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
import { Container, Badge, Button, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { useTranslation } from 'react-i18next';
import { useCurrency } from '@/context/CurrencyContext';
import { useTheme } from '@/context/ThemeContext';
import { Brightness4, Brightness7 } from '@mui/icons-material';

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
  const { currency, toggleCurrency } = useCurrency();
  const cartItems = useAppSelector((state) => state.cart.items);
  const { i18n } = useTranslation();
  const { t }: { t: (key: string) => string } = useTranslation();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const changeLanguage = (lng: string) => {
    i18n
      .changeLanguage(lng)
      .then(() => console.log(`Switched to ${lng}`))
      .catch((err) => console.error('Error switching language:', err));
  };

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { path: '/', label: t('menu.shop') },
    { path: '/productList/men', label: t('menu.men') },
    { path: '/productList/women', label: t('menu.women') },
    { path: '/quoteform', label: t('menu.quoteForm') },
    { path: '/twojs', label: t('menu.twojs') },
  ];

  const [selectedPath, setSelectedPath] = useState<string | null>(location.pathname);

  useEffect(() => {
    if (!selectedPath) {
      setSelectedPath('/');
    }
  }, [selectedPath]);

  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar sx={{ cursor: 'pointer' }}>
          {navLinks.map((link) => (
            <Typography
              key={link.path}
              sx={{
                cursor: 'pointer',
                marginLeft: 2,
                fontWeight: selectedPath === link.path ? 'bold' : 'normal',
              }}
              variant="body1"
              color="textSecondary"
              noWrap
              onClick={() => setSelectedPath(link.path)}
            >
              <Link to={link.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                {link.label}
              </Link>
            </Typography>
          ))}
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
          <Link to="/cart">
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
      <div>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ my: 2 }}>
          <Button variant="contained" color="primary" onClick={() => changeLanguage('en')}>
            English
          </Button>
          <Button variant="contained" color="secondary" onClick={() => changeLanguage('vi')}>
            Tiếng Việt
          </Button>
          <Button variant="contained" color="primary" onClick={toggleCurrency}>
            Chuyển sang {currency === 'USD' ? 'VND' : 'USD'}
          </Button>
          <IconButton onClick={toggleTheme} color="inherit">
            {theme === 'light' ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </Stack>
      </div>
    </AppBar>
  );
};

export default Header;
