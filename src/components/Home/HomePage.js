// import React, { useEffect } from "react";
// import { useState } from "react";
// import "./HomePage.css";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import Typewriter from "typewriter-effect/dist/core";
// import {
//   Button,
//   Typography,
//   Container,
//   CssBaseline,
//   makeStyles,
//   Grid,
//   TextField,
//   Select,
//   FormControl,
//   MenuItem,
//   InputLabel,
// } from "@mui/material";

// export default function Home() {
//   const HandleClick = () => {
//     let b = true;
//   };

//   useEffect(() => {
//     // Initialize the Typewriter effect
//     const typewriter = new Typewriter("#typewriter-text", {
//       strings: ["Reserve Your Private Bus", "Create Lasting Memories!"],
//       autoStart: true,
//       loop: true,
//       typeSpeed: 20,
//     });
//     return () => {
//       // Clean up the Typewriter effect
//       typewriter.stop();
//     };
//   }, []);

//   const [user, setUser] = useState({
//     from: " ",
//     to: " ",
//     date: " ",
//     journeyType: " ",
//   });

//   let name, value;
//   const getUserData = (event) => {
//     name = event.target.name;
//     value = event.target.value;
//     setUser({ ...user, [name]: value });
//   };
//   return (
//     <>
//       <CssBaseline />
//       <main>
//         <div>
//           <Container maxWidth="sm" style={{ marginTop: "50px" }}>
//             <Typography variant="h3" align="center" color="white" gutterBottom>
//               <span id="typewriter-text"></span>
//             </Typography>
//             <Typography variant="h6" align="center" color="white" paragraph>
//               Kindly Fill Out The Fields!
//             </Typography>
//           </Container>
//           <Container style={{ marginTop: "50px" }}>
//             <Grid container spacing={2} justifyContent="center" direction="row">
//               <Grid item xs={12} md={3}>
//                 <TextField
//                   fullWidth
//                   className="dobby"
//                   label="From"
//                   name="From"
//                   value={user.from}
//                   onChange={getUserData}
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12} md={3}>
//                 <TextField
//                   fullWidth
//                   id="outlined-basic"
//                   className="dobby"
//                   label="To"
//                   variant="outlined"
//                   name="To"
//                   value={user.to}
//                   onChange={getUserData}
//                 />
//               </Grid>
//               <Grid item>
//                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                   <DatePicker className="dobby" />
//                 </LocalizationProvider>
//               </Grid>
//               <Grid item xs={12} md={3}>
//                 <FormControl className="dobby" fullWidth>
//                   <InputLabel id="demo-simple-select-label">
//                     Journey Type
//                   </InputLabel>
//                   <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     label="Journey Type"
//                   >
//                     <MenuItem>Journey</MenuItem>
//                     <MenuItem>Return</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} md={3} style={{ marginTop: "30px" }}>
//                 <Button onClick={HandleClick} fullWidth variant="contained">
//                   Proceed
//                 </Button>
//               </Grid>
//             </Grid>
//           </Container>
//         </div>
//       </main>
//     </>
//   );
// }
import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Typewriter from "typewriter-effect/dist/core";
import {
  Button,
  Typography,
  Container,
  CssBaseline,
  makeStyles,
  Grid,
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";

export default function Home() {
  const HandleClick = () => {
    let b = true;
  };

  useEffect(() => {
    // Initialize the Typewriter effect
    const typewriter = new Typewriter("#typewriter-text", {
      strings: ["Reserve Your Private Bus", "Create Lasting Memories!"],
      autoStart: true,
      loop: true,
      typeSpeed: 20,
    });
    return () => {
      // Clean up the Typewriter effect
      typewriter.stop();
    };
  }, []);

  const [user, setUser] = useState({
    from: "",
    to: "",
    date: "",
    journeyType: "",
  });

  const getUserData = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <>
      <CssBaseline />
      <main>
        <div>
          <Container maxWidth="sm" style={{ marginTop: "50px" }}>
            <Typography variant="h3" align="center" color="white" gutterBottom>
              <span id="typewriter-text"></span>
            </Typography>
            <Typography variant="h6" align="center" color="white" paragraph>
              Kindly Fill Out The Fields!
            </Typography>
          </Container>
          <Container style={{ marginTop: "50px" }}>
            <Grid container spacing={2} justifyContent="center" direction="row">
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  className="dobby"
                  label="From"
                  name="from"
                  value={user.from}
                  onChange={getUserData}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  className="dobby"
                  label="To"
                  variant="outlined"
                  name="to"
                  value={user.to}
                  onChange={getUserData}
                />
              </Grid>
              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker className="dobby" />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl className="dobby" fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Journey Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Journey Type"
                    name="journeyType"
                    value={user.journeyType}
                    onChange={getUserData}
                  >
                    <MenuItem value="Journey">Journey</MenuItem>
                    <MenuItem value="Return">Return</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3} style={{ marginTop: "30px" }}>
                <Button onClick={HandleClick} fullWidth variant="contained">
                  Proceed
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </>
  );
}
