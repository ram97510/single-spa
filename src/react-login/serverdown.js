import React from 'react';

function Serverdown() {
  const isApplicationDown = true;

  if (isApplicationDown) {
    return (
      <div style={{ textAlign: 'center', marginTop:'100px' }}>
        <img
          id="error-image"
          src="src\react-login\Group 1.png"
          alt="Error"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <h1 style={{ color: '#202124', fontFamily: 'Inter', fontSize: 26, fontWeight: 600 }}>
          Under Maintenance
        </h1>
        <p style={{ color: '#5F6368', fontFamily: 'Inter', fontSize: 18, lineHeight: '140%' }}>
          We apologise for any inconvenience caused. Please check back soon! Thank you for your patience.
        </p>
      </div>
    );
  }

  return null;
}

export default Serverdown;
