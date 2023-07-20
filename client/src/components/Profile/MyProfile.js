import { Box, Grid, TextField, Button } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";


const Rightbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Box sx={{ marginTop: '50px' }}>
      <Grid container spacing={9} justifyContent="center" direction="row">
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            className="dobby"
            label={isAuthenticated ? user.name : "Name"}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={3}>
        <TextField
        fullWidth
        id="outlined-basic"
        className="dobby"
        label="Date Of Birth"
        variant="outlined"
      />
        </Grid>
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
            label={isAuthenticated ? user.email : "Email"}
            variant="outlined"
          />
        </Grid>
        <Grid container spacing={9} justifyContent="center" direction="column"></Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            className="dobby"
            label="Gender"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={50} md={8} style={{ marginTop: "10px", marginLeft: "700px" }}>
          <Button sx={{ width: '90', maxWidth: "200%" }} justifyContent="center" variant="contained">
            Proceed
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Rightbar;