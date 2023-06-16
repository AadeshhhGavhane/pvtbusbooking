import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';


const ProfilePage2 = ({mode,setMode}) => {
    return (
      <Box flex={1} p={3} 
      
      sx={{ display: { xs: "none", sm: "block" } }}>
    
        <Box position="fixed">
<List>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
               <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText primary="My Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
               <DirectionsBusFilledIcon/>
              </ListItemIcon>
              <ListItemText primary="My Bookings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
               <DepartureBoardIcon/>
              </ListItemIcon>
              <ListItemText primary="Manage Bookings" />
            </ListItemButton>
          </ListItem>

     </List>

   </Box>
   </Box>
  )
}

export default ProfilePage2
