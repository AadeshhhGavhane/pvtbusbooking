import React, { useState } from "react";
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

import ActionAreaCard from "../BusType/TemplateCard";
import RadioButtonsGroup from "../BusType/RadioButtonsGroup";

export default function Home() {
  const [showFields, setShowFields] = useState(true);
  const [showComponents, setShowComponents] = useState(false);

  const handleClick = () => {
    setShowFields(false);
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
            {showFields && (
              <Typography variant="h6" align="center" color="white" paragraph>
                Kindly Fill Out The Fields!
              </Typography>
            )}
          </Container>

          <Container style={{ marginTop: "50px" }}>
            <Grid container spacing={2} justifyContent="center" direction="row">
              {showFields && (
                <>
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
                </>
              )}

              <Grid item xs={12} md={3} style={{ marginTop: "30px" }}>
                <Button onClick={handleClick} fullWidth variant="contained">
                  Proceed
                </Button>
              </Grid>
            </Grid>
          </Container>

          {/* Render the components when showComponents is true */}
          {showComponents && (
            <>
              <Container style={{ marginTop: "50px" }}>
                <ActionAreaCard />
              </Container>

              <Container style={{ marginTop: "50px" }}>
                <RadioButtonsGroup />
              </Container>
            </>
          )}
        </div>
      </main>
    </>
  );
}
