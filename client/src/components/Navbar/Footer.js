import React from 'react';
function Footer() {
    return (
      <footer style={{ position: 'fixed', bottom: 0, width: '100%', justifyContent: 'center', alignItems: 'center', minHeight: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', backgroundColor: 'blue' }}>
        <p style={{ fontSize: '18px', color: 'white' }}>&copy; 2023 PvtBusBooking. All rights reserved.T & C apply.</p>
        </div>
      </footer>
    );
  }
  export default Footer;