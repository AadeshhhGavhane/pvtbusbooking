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
      <Box
        marginLeft={{ xs: 'auto', sm: 'auto', md: 0 }}
        marginRight={{ xs: 'auto', sm: 'auto', md: 0 }}
        width={{ xs: '100%', sm: '80%', md: '400px' }}
        height={{ xs: 'auto', sm: 'auto', md: '500px' }}
        marginTop="50px"
        align="center"
        borderColor="red"
        border={1}
        borderRadius={10}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography marginTop="50px" variant="h4">
              Order Summary
            </Typography>
          </Grid>
          <Grid item xs={6} align="left" marginY="15px">
            <Typography variant="h6">~From:</Typography>
          </Grid>
          <Grid item xs={6} align="left" marginY="15px">
            <Typography variant="h6">~To:</Typography>
          </Grid>
          <Grid item xs={6} align="left" marginY="15px">
            <Typography variant="h6">~Date:</Typography>
          </Grid>
          <Grid item xs={6} align="left" marginY="15px">
            <Typography variant="h6">~Journey Type:</Typography>
          </Grid>
          <Grid item xs={6} align="left" marginY="15px">
            <Typography variant="h6">~Bus Type:</Typography>
          </Grid>
          <Grid item xs={6} align="left" marginY="15px">
            <Typography variant="h6">~Total Amount After Taxes:</Typography>
          </Grid>

          <Grid item xs={12} marginTop="20px">
            <Button
              variant="contained"
              size="large"
              sx={{ width: { xs: '100%', sm: '50%' } }}
              startIcon={<PaymentIcon />}
            >
              Proceed to pay
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
