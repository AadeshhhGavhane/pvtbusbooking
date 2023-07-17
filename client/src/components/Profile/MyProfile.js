// import { useEffect, useState } from "react";
// import { Box, Grid, TextField, Button, Container } from '@mui/material';
// import { useAuth0 } from "@auth0/auth0-react";


// const Rightbar = () => {
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }

//   return (
//     <Box sx={{ marginTop: '50px' }}>
//       <Grid container spacing={9} justifyContent="center" direction="row">
//         <Grid item xs={12} md={3}>
//           <TextField
//             fullWidth
//             className="dobby"
//             label={isAuthenticated ? user.name : "First Name"}
//             variant="outlined"
//           />
//         </Grid>
//         <Grid item xs={12} md={3}>
//         <TextField
//         fullWidth
//         id="outlined-basic"
//         className="dobby"
//         label="Date of Birth"
//         variant="outlined"
//       />
//         </Grid>
//         <Grid container spacing={9} justifyContent="center" direction="column"></Grid>
//         <Grid item xs={12} md={3}>
//           <TextField
//             fullWidth
//             className="dobby"
//             label="Contact"
//             variant="outlined"
//           />
//         </Grid>
//         <Grid item xs={12} md={3}>
//           <TextField
//             fullWidth
//             id="outlined-basic"
//             className="dobby"
//             label={isAuthenticated ? user.email : "Email"}
//             variant="outlined"
//           />
//         </Grid>

//         <Grid container spacing={9} justifyContent="center" direction="column"></Grid>
//         <Grid item xs={12} md={3}>
//           <TextField
//             fullWidth
//             className="dobby"
//             label="Gender"
//             variant="outlined"
//           />
//         </Grid>
        
//         <Grid item xs={50} md={8} style={{  marginLeft: "690px" }}>
//           <Button sx={{ width: '90', maxWidth: "200%" }} justifyContent="center" variant="contained">
//             Proceed
//           </Button>
//         </Grid>
//       </Grid>
//     </Box>
//   )
// }

// export default Rightbar;


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
    <Box sx={{ marginTop: '50px' }}>
      <Grid container spacing={9} justifyContent="center" direction="row">
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            className="dobby"
            label={isAuthenticated ? user.name : "First Name"}
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
            disabled={isAuthenticated}
          />
        </Grid>
        <Grid item xs={12} md={3}>
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
        <Grid item xs={12} md={3}>
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
        <Grid item xs={12} md={3}>
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
        <Grid item xs={50} md={8} style={{ marginLeft: "690px" }}>
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