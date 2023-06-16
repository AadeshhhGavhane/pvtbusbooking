import React from 'react'
import {CssBaseline, Container, Typography} from "@mui/material"

export default function AboutUs() {
  return (
    <>
    <CssBaseline/>
    <main>
        <div>
          <Container maxWidth="sm" style={{ marginTop: "50px" }}>
            <Typography
              variant="h2"
              align="center"
              color="white"
              gutterBottom
            >
              Contact US
            </Typography>
          </Container>
          </div>
          </main>
    </>
  )
}
