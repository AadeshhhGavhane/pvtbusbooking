import React from "react";
import TemplateCard from "./TemplateCard";
import RadioButtonsGroup from "./RadioButtonsGroup";
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./BusType.css";
import undrawimg from "../images/undraw_booking_re_gw4j.svg";

export default function BusType() {
  const navigate = useNavigate();

  const handleProceed = () => {
    // Handle the proceed action
    // Add your logic here

    // Navigate to the next page
    navigate("/ordersum");
  };

  return (
    <div className="big-peu">
      <div className="Bus-type-m1">
        <Typography
          variant="h4"
          component="h2"
          align="left"
          color="black"
          padding="3.1rem"
          // marginTop="1rem"
        >
          Select Bus Size
        </Typography>

        <TemplateCard />
        <RadioButtonsGroup />

        <div className="button-handle">
        <Grid container justifyContent="right" mt={4}>
          <Button onClick={handleProceed} variant="contained" color="primary">
            Proceed
          </Button>
        </Grid>
        </div>
      </div>

      <div className="Bus-type-m2">
        <img src={undrawimg} alt="not found" />
      </div>

    </div>
  );
}
