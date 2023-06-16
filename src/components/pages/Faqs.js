import React from 'react'
import {CssBaseline, Container, Typography} from "@mui/material"

export default function Faqs() {
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
              style={{ color: 'white' }}
              gutterBottom
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="h4"
              align="center"
              color="textSecondary"
              style={{ color: 'white' }}
              paragraph
            >
              How do I book a bus?
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              style={{ color: 'white' }}
              paragraph
            >
              To book a bus, simply navigate to the booking page, select your desired date, destination, and number of passengers, and click the 'Book Now' button.          
            </Typography>
            <Typography
              variant="h4"
              align="center"
              color="textSecondary"
              style={{ color: 'white' }}
              paragraph
            >
                Are there any discounts available?
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              style={{ color: 'white' }}
              paragraph
            >
                Yes, we offer various discounts and promotional offers throughout the year. Keep an eye on our website or subscribe to our newsletter to stay updated with the latest deals.         
            </Typography>
            <Typography
              variant="h4"
              align="center"
              color="textSecondary"
              style={{ color: 'white' }}
              paragraph
            >
                Can I cancel my booking?
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              style={{ color: 'white' }}
              paragraph
            >
                Yes, you can cancel your booking. However, please note that cancellation policies and fees may vary depending on the type of booking and the time of cancellation. Please refer to our cancellation policy for more information.         
            </Typography>
            <Typography
              variant="h4"
              align="center"
              color="textSecondary"
              style={{ color: 'white' }}
              paragraph
            >
               How can I contact customer support?
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              style={{ color: 'white' }}
              paragraph
            >
               You can reach our customer support team by calling our toll-free number or sending an email to support@busrentalapp.com. Our team is available 24/7 to assist you with any queries or concerns.          
            </Typography>
          </Container>
          </div>
          </main>
    </>
  )
}
