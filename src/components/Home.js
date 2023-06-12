import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import MenuItem from "@mui/material/MenuItem"; // Import the MenuItem component

export default function Home() {
  const currencies = [
    {
      value: "Journey",
      label: "Journey",
    },
    {
      value: "Return",
      label: "Return",
    },
  ];

  return (
    <Container>
      <div className="container my-5">
        <form className="d-flex flex-column align-items-start">
          <div className="d-flex align-items-center">
            <TextField
              className="form-control"
              id="fromAddress"
              variant="outlined"
              size="medium"
              fullWidth
              label="From"
            />
            <TextField
              className="form-control mx-2"
              id="toAddress"
              variant="outlined"
              size="medium"
              fullWidth
              label="To"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                id="journeyDate"
                size="medium"
                fullWidth
                label="Journey Date"
              />
            </LocalizationProvider>
            <TextField
              id="outlined-select-currency"
              select
              variant="outlined"
              size="medium"
              fullWidth
              defaultValue="Journey"
              SelectProps={{
                native: true,
              }}
              label="Journey Type"
              helperText="Please select your Journey Type"
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </div>

          <div className="d-flex justify-content-center my-3">
            <Button
              className="my-button-success"
              variant="contained"
              color="success"
              size="medium"
            >
              Success
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}
