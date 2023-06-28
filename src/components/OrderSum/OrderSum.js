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
    <Box  marginLeft={'600px'} width={'400px'} height={'500px'} marginTop={'50px'} align='center'   borderColor={'red'} border={1} borderRadius={10}>
    <Grid container width={'350px'} >
      <Grid item  xs  alignContent={'center'}>
        <Typography marginTop={'50px'}variant="h4">Order Summary</Typography>
      </Grid>
      </Grid>
       
      <Grid item width={'350px'} marginY='15px' lg='6'  align='left'>
        <Typography variant="h6">~From:</Typography>
      </Grid>
      <Grid item width={'350px'} marginY='15px' lg='6' align='left' >
        <Typography variant="h6">~To:</Typography>
      </Grid>
      <Grid item width={'350px'} marginY='15px'  lg='6' align='left'>
        <Typography variant="h6">~Date:</Typography>
        </Grid>
      <Grid item width={'350px'} marginY='15px'  lg='6' align='left'>
        <Typography variant="h6">~Journey Type:</Typography>
      </Grid>
      <Grid item width={'350px'} marginY='15px'  lg='6' align='left'>
        <Typography variant="h6">~Bus Type:</Typography>
      </Grid>
      <Grid item width={'350px'}  lg='6' align='left' >
        <Typography variant="h6">~Total Amount After Taxes:</Typography>
      </Grid>
      
      <Button variant="contained" size="large" sx={{width:'50%', top:"50px"}} marginTop='500px' startIcon={<PaymentIcon/>}> Proceed to pay</Button>
     </Box>
    </>
  );
}