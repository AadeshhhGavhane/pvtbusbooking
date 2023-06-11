import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";

export default function Homenav() {
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
    <>
      <div className="container my-5">
        <form className="d-flex align-items-start">
          <div className="mb-3 me-3">
            <label htmlFor="fromAddress" className="form-label">
              From
            </label>
            <TextField
              className="form-control"
              id="fromAddress"
              style={{ width: "300px", marginBottom: "10px" }} // Adjust the width as needed
            />
          </div>
          <div className="mb-3 me-3">
            <label htmlFor="toAddress" className="form-label">
              To
            </label>
            <TextField
              className="form-control"
              id="toAddress"
              style={{ width: "300px", marginBottom: "10px" }} // Adjust the width as needed
            />
          </div>

          <div className="mb-3 me-3">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className="mb-3">
                <label htmlFor="journeyDate" className="form-label">
                  Journey Date:
                </label>
                <DatePicker
                  id="journeyDate"
                  style={{ width: "300px", marginBottom: "20px" }} // Adjust the width as needed
                />
              </div>
            </LocalizationProvider>
          </div>

          <div className="mb-3 me-3">
            <label htmlFor="journeyType" className="form-label">
              Journey Type
            </label>
            <div className="input-group">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Choose"
                  defaultValue="Journey"
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Please select your Journey Type"
                >
                  {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Box>
            </div>
          </div>
          <Button variant="contained" color="success">
            Success
          </Button>
        </form>
      </div>
    </>
  );
}
