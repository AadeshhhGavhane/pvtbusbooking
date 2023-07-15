import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import BusType from "../BusType/BusType";
import Typewriter from "typewriter-effect/dist/core";
import {
  Button,
  Typography,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

export default function HomePage() {
  const { isAuthenticated } = useAuth0();
  const [showComponents, setShowComponents] = useState(false);

  const handleClick = () => {
    setShowComponents(true);
  };

  useEffect(() => {
    const peu = document.querySelector(".peu");
    peu.classList.add("loaded");
  }, []);

  useEffect(() => {
    // Initialize the Typewriter effect
    const typewriter = new Typewriter("#typewriter-text", {
      strings: ["Reserve Your Private Bus", "Create Lasting Memories!"],
      autoStart: true,
      loop: true,
      typeSpeed: 10,
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
        <div className="peu">
          <Container maxWidth="sm" style={{ marginTop: "5rem" }}>
            <Typography variant="h3" align="center" color="white" gutterBottom>
              <span id="typewriter-text"></span>
            </Typography>
            <Typography variant="h6" align="center" color="white" paragraph>
              Kindly Fill Out The Fields!
            </Typography>
          </Container>

          <Container style={{ marginTop: "5rem" }}>
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

              <Grid item xs={12} md={3}>
                <div className="dobby">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider>
                </div>
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

              <Grid item xs={12} md={3} style={{ marginTop: "3rem" }}>
                <Button
                  component={Link}
                  to="/bus-type"
                  fullWidth
                  variant="contained"
                  onClick={handleClick}
                  disabled={!isAuthenticated}
                >
                  Proceed
                </Button>
              </Grid>
            </Grid>
          </Container>

          {showComponents && (
            <Container style={{ marginTop: "5rem" }}>
              <Routes>
                <Route path="/" element={<Outlet />} />
                <Route path="/bus-type" element={<BusType />} />
              </Routes>
            </Container>
          )}
        </div>
      </main>
    </>
  );
}

