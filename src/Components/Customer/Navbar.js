import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../css/carousel.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const cart = useSelector((state) => state.cart.cart || []);

  useEffect(() => {
    console.log("Cart updated:", cart); // Log cart to verify updates
    setCartCount(cart.length); // Update cartCount based on cart state
  }, [cart]); // Re-run useEffect when `cart` changes

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Lavanya</Link>
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button color="inherit">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          </Button>
          <Button color="inherit">
            <Link to="/About" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
          </Button>
          <Button color="inherit">
            <Link to="/ViewOrder" style={{ color: 'white', textDecoration: 'none' }}>Orders</Link>
          </Button>
          <Button color="inherit">
            <Link to="/Cart" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Badge badgeContent={cartCount} color="error" showZero>
                <ShoppingCartIcon />
              </Badge>
              <span style={{ marginLeft: '5px' }}>Cart</span>
            </Link>
          </Button>
          <Button color="inherit" >
            <Link to="/CustomerLogin" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
          </Button>
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
