import React from "react";
import TemplateCard from "./TemplateCard";
import RadioButtonsGroup from "./RadioButtonsGroup";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BusType() {
  const navigate = useNavigate();

  const handleProceed = () => {
    // Handle the proceed action
    // Add your logic here

    // Navigate to the next page
    navigate("/ordersum");
  };

  return (
    <>
      <h1>Bus Type</h1>
      <TemplateCard />
      <RadioButtonsGroup />
      <Grid container justifyContent="center" mt={3}>
      <Button onClick={handleProceed} variant="contained" color="primary">
        Proceed
      </Button>
      </Grid>
    </>
  );
}
