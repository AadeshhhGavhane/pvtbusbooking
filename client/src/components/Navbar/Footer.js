import React from 'react';

function Footer() {
  return (
    <footer style={{
      position: 'fixed', // Use 'fixed' instead of 'bottom' for positioning at the bottom
      bottom: 0,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '50px', // Increase the minHeight for a more prominent footer
      backgroundColor: 'blue',
      color: 'white',
      fontSize: '18px',
      textAlign: 'center',
      padding: '10px'
    }}>
      <div style={{
        maxWidth: '600px', // Limit the width of the content for responsiveness
        margin: '0 auto', // Center the content horizontally
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px'
      }}>
        &copy; 2023 PvtBusBooking. All rights reserved. T & C apply.
      </div>
    </footer>
  );
}

export default Footer;
