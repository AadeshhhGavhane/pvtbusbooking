import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';

const Signup = () => {
  const paperStyle = { padding: '60px 30px', width: 450, margin: '40px auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const marginTop = { marginTop: 5 };

  return (
    <Grid container justifyContent="center">
      <Paper elevation={20} style={paperStyle}>
        <Grid container direction="column" alignItems="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <Typography variant="h5" style={headerStyle}>
            Sign Up
          </Typography>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account!
          </Typography>
        </Grid>
        <Stack spacing={2} component="form" container>
          <Grid item xs={12}>
            <TextField fullWidth label="Name" placeholder="Enter your name" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email" placeholder="Enter your email" />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset" style={marginTop}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" name="gender" style={{ display: 'flex' }}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Phone Number" placeholder="Enter your phone number" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Confirm Password" placeholder="Confirm your password" />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox name="checkedA" />}
              label="I accept the terms and conditions."
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Sign up
            </Button>
          </Grid>
        </Stack>
      </Paper>
    </Grid>
  );
}

export default Signup;
