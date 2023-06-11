import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homenav from './components/Homenav';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react';

function App({ children }) {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {children}
      </LocalizationProvider>
      <Navbar />
      <Homenav />
    </>
  );
}

export default App;
