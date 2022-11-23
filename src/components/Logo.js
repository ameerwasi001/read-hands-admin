import React from 'react';

function Logo(props) {
  return (
    <img
      style={{width: '50px', height: '50px', backgroundColor: '#FFFFFF', borderRadius: '10px'}}
      alt="Logo"
      src="/static/logo.png"
      {...props}
    />
  );
}

export default Logo;
