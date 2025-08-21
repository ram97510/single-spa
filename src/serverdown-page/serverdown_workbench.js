import React from 'react';

function Serverdownworkbench() {
  const isApplicationDown = true;

  if (isApplicationDown) {
    return (
      <div style={{ textAlign: 'center', marginTop:'80px' }}>
        <img
          id="error-image"
          src="src\serverdown-page\Group 1.png"
          alt="Error"
          style={{ width: '424px', height: '256.296px' }}
        />
        <h1 style={{ color: '#202124', fontFamily: 'Inter', fontSize: 26, fontWeight: 600, marginTop:'50px' }}>
          Unable to Access the Work bench Page
        </h1>
        <p style={{ color: '#5F6368', fontFamily: 'Inter', fontSize: 18, lineHeight: '140%' }}>
          We apologise for any inconvenience caused. Please retry after some time ! <br/>Thank you for your patience.
        </p>
      </div>
    );
  }

  return null;
}

export default Serverdownworkbench;
