import React from 'react';
import { useHistory } from 'react-router-dom';

function getCurrentDateTime() {
  const now = new Date();
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  };
  return now.toLocaleString('en-IN', options);
}

function Header() {
  const currentDateTime = getCurrentDateTime();

  return (
    <header>
      <>
        <h1>Attendence </h1>
        <p>{currentDateTime}</p>
        </>
    </header>
  );
}

export default Header;