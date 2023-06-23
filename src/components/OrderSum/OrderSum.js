import React from "react";
import PaymentIcon from '@mui/icons-material/Payment';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  CssBaseline,
  Box,
  Button
} from "@mui/material";
import { pink } from "@mui/material/colors";

export default function Review() {
 
  return (
    <>
    <Box  marginLeft={'1200px'} width={'800px'} height={'680px'} marginTop={'150px'} align='center'   borderColor={'red'} border={1} borderRadius={10}>
    <Grid container width={'700px'} >
      <Grid item  lg='12'  alignContent={'center'}>
        <Typography variant="h1">Order Summary</Typography>
      </Grid>
      </Grid>
       
      <Grid item width={'700px'} marginY='15px' lg='6'  align='left'>
        <Typography variant="h3">~From:</Typography>
      </Grid>
      <Grid item width={'700px'} marginY='15px' lg='6' align='left' >
        <Typography variant="h3">~To:</Typography>
      </Grid>
      <Grid item width={'700px'} marginY='15px'  lg='6' align='left'>
        <Typography variant="h3">~Date:</Typography>
        </Grid>
      <Grid item width={'700px'} marginY='15px'  lg='6' align='left'>
        <Typography variant="h3">~Journey Type:</Typography>
      </Grid>
      <Grid item width={'700px'} marginY='15px'  lg='6' align='left'>
        <Typography variant="h3">~Bus Type:</Typography>
      </Grid>
      <Grid item width={'700px'}  lg='6' align='left' >
        <Typography variant="h3">~Total Amount After Taxes:</Typography>
      </Grid>
      
      <Button variant="contained" size="large" sx={{width:'50%', top:"50px"}} marginTop='500px' startIcon={<PaymentIcon/>}> Proceed to pay</Button>
     </Box>
    </>
  );
}