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
              color="textPrimary"
              gutterBottom
            >
              About US
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Welcome to our bus rental app! We provide a convenient platform for booking buses for various purposes. Whether you need transportation for a school trip, corporate event, or family vacation, we've got you covered.
              Our team of experienced drivers and well-maintained buses ensures a safe and comfortable journey for all our customers. With our user-friendly app, you can easily search for available buses, compare prices, and make secure bookings.
              Feel free to explore our app and start planning your next trip with us. We look forward to serving you!
            </Typography>
          </Container>
          </div>
          </main>
    </>
  )
}
