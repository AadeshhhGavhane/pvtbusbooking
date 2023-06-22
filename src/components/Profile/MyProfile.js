import React from 'react'
import { Box, Grid, TextField } from '@mui/material';

const Rightbar = () => {
  return (
   
<Box sx={{ marginTop: '50px' }}>
  <Grid container spacing={9} justifyContent="center" direction="row">
    <Grid item xs={12} md={3}>
      <TextField
        fullWidth
        className="dobby"
        label="First Name"
        variant="outlined"
      />
    </Grid>
    <Grid item xs={12} md={3}>
      <TextField
        fullWidth
        id="outlined-basic"
        className="dobby"
        label="Last Name"
        variant="outlined"
      />
    </Grid>
    <Grid/>

    <Grid container spacing={9} justifyContent="center" direction="column"></Grid>
     <Grid item xs={12} md={3}>
      <TextField
        fullWidth
        className="dobby"
        label="Contact"
        variant="outlined"
      />
    </Grid>
    <Grid item xs={12} md={3}>
      <TextField
        fullWidth
        id="outlined-basic"
        className="dobby"
        label="Email"
        variant="outlined"
      /> 
     </Grid> 
  </Grid>
</Box>
  )
}

export default Rightbar
