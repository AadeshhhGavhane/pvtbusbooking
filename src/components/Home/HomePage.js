
import * as React from "react";
import "./HomePage.css";
// import "firebase/database";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// import { Typewriter } from 'typewriter-effect';
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
// import { firebase } from "../Firebase/firebase";

export default function Home() {
  const HandleClick = () => {
    let b = true;
  };

  ///----------------Dont erase doing firebase connection but not getting----------
  // const handleClick = () => {
  //   // Get the values from the input fields
  //   const from = document.getElementById("outlined-basic-from").value;
  //   const to = document.getElementById("outlined-basic-to").value;
  //   const journeyType = document.getElementById("demo-simple-select").value;

  //   // Create a new reference to the database path where you want to store the data
  //   const databaseRef = firebase.database().ref("busReservations");

  //   // Push the data to the database
  //   const newReservationRef = databaseRef.push();
  //   newReservationRef
  //     .set({
  //       from: from,
  //       to: to,
  //       journeyType: journeyType,
  //     })
  //     .then(() => {
  //       console.log("Data sent to the database successfully.");
  //     })
  //     .catch((error) => {
  //       console.error("Error sending data to the database:", error);
  //     });
  // };


  //---------For typewriter effect -------------------

  // React.useEffect(() => {
  //   // Initialize the Typewriter effect
  //   new Typewriter("#typewriter-text", {
  //     strings: ["Reserve Your Private Bus", "Create Lasting Memories!"],
  //     autoStart: true,
  //     loop: true,
  //   });
  // }, []);

  return (
    <>
      <CssBaseline />
      <main>
        <div>
          <Container maxWidth="sm" style={{ marginTop: "50px" }}>
            <Typography variant="h3" align="center" color="white" gutterBottom>
              Reserve Your Private Bus and Create Lasting Memories!
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
                  // id=""
                  label="From"
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
                  >
                    <MenuItem>Journey</MenuItem>
                    <MenuItem>Return</MenuItem>
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
