import { useEffect, useState } from "react";
import { Box, Grid, TextField, Button, Container } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Rightbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [formData, setFormData] = useState({
    gender: "",
    dob: "",
    contact: ""
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    // Make a POST request to save user data
    axios.post("http://localhost:5000/sendemail", {
      name: isAuthenticated ? user.name : "",
      email: isAuthenticated ? user.email : "",
      gender: formData.gender,
      dob: formData.dob,
      contact: formData.contact
    })
      .then((response) => {
        console.log(response.data.message);
        // Add any additional logic here after the data is saved
      })
      .catch((error) => {
        console.error("Error saving user data:", error);
        // Handle error cases
      });
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Box sx={{ marginTop: '50px' , marginLeft:"150px"}}>
      <Grid container spacing={5} justifyContent="center" direction="row">
        <Grid item xs={15} md={4} marginLeft="100px">
          <TextField
            fullWidth
            className="dobby"
            label={isAuthenticated ? user.name : "First Name"}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={15} md={4}>
          <TextField
            fullWidth
            id="outlined-basic"
            className="dobby"
            label={isAuthenticated ? user.email : "Email"}
            variant="outlined"
            disabled={isAuthenticated}
          />
        </Grid>
        <Grid item xs={15} md={4} marginLeft="100px" marginTop={"20px"}>
          <TextField
            fullWidth
            className="dobby"
            label="Contact"
            variant="outlined"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={15} md={4}marginLeft={"0px"} marginTop={"20px"}>
          <TextField
            fullWidth
            id="outlined-basic"
            className="dobby"
            label="Date of Birth"
            variant="outlined"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={15} md={4} marginRight ="2px" marginLeft={"120px"} marginTop={"20px"}>
          <TextField
            fullWidth
            className="dobby"
            label="Gender"
            variant="outlined"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={15} md={8} style={{ marginLeft: "670px", marginTop: "10px"}}>
          <Button
            sx={{ width: '90', maxWidth: "200%" }}
            justifyContent="center"
            variant="contained"
            onClick={handleSubmit}
          >
            Proceed
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Rightbar;
