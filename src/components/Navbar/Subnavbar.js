import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar, Tooltip } from '@mui/material';
import { Menu as MenuIcon, Adb as AdbIcon } from '@mui/icons-material';

function Subnavbar() {
    const menuItems = [
        { label: 'Travel Details', link: '/travel-details' },
        { label: 'Confirm Bus type', link: '/confirm-bus-type' },
        { label: 'Review Journey', link: '/review-journey' },
        { label: 'Payment', link: '/payment' },
    ]
  return (
    <AppBar position="static" sx={{ backgroundColor: 'orange' }}>
      <Toolbar disableGutters>
        
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'black',
            textDecoration: 'none',
          }}
        >
            &nbsp;&nbsp;&nbsp;&nbsp;{menuItems.map((item, index) => (
            <React.Fragment key={index}>
              {index !== 0 && <>&nbsp;&nbsp;--->&nbsp;</>}
              {`${index + 1}. ${item.label}`}
            </React.Fragment>
          ))}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Travel Details ----->&nbsp;
            Confirm Bus type ----->&nbsp;
            Review Journey------>&nbsp;
            Payment
        </Typography>
        

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <Menu
            id="menu-appbar"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <MenuItem>
              <Typography textAlign="center"></Typography>
            </MenuItem>
          </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'Black',
            textDecoration: 'none',
          }}
        >
          
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />

        <Box sx={{ flexGrow: 0 }}>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Subnavbar;
