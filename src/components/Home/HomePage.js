import React, { useState } from "react";
import "./HomePage.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import BusType from "../BusType/BusType";
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

export default function HomePage() {
  const [showComponents, setShowComponents] = useState(false);

  const handleClick = () => {
    setShowComponents(true);
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
                <Button
                  component={Link}
                  to="/bus-type"
                  fullWidth
                  variant="contained"
                  onClick={handleClick}
                >
                  Proceed
                </Button>
              </Grid>
            </Grid>
          </Container>

          {showComponents && (
            <Container style={{ marginTop: "50px" }}>
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
