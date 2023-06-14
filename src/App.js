// import logo from './logo.svg';
import "./App.css";
import HomePage from "./components/Home/HomePage";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/Signup";
import Login from "./components/Login/Login";

function App({ children }) {
  return (
    <Router>
     <Navbar />
      <Routes>
        <Route exact path = "/" element={<HomePage/>}/>
        <Route exact path = "/signup" element={<SignUp/>}/>
        <Route exact path = "/login" element={<Login/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
