import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home/HomePage";
import AboutUs from "./components/pages/AboutUs";
import Policy from "./components/pages/Policy";
import ContactUs from "./components/pages/ContactUs";
import Faqs from "./components/pages/Faqs";
import SignUp from "./components/SignUp/Signup";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
