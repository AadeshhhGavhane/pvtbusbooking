import React, {useState} from "react";
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
import { useAuth0 } from "@auth0/auth0-react";

export default function Review() {
  const { user } = useAuth0();
  let gg = user.email
  const [email, setEmail] = useState(gg);
  console.log(email);

  const sendEmail = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/okok", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },body:JSON.stringify({
            email
        })
        
    });
    console.log(res)
  };

 
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
      
      <Button onClick={sendEmail} variant="contained" size="large" sx={{width:'50%', top:"50px"}} marginTop='500px' startIcon={<PaymentIcon/>}> Proceed to pay</Button>
     </Box>
    </>
  );
}