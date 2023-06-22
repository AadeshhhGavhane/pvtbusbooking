import React from "react";
// import "./App.css";
 import Navbar from "./components/Navbar";
import Subnavbar from "./components/Navbar/Subnavbar"
import MyAccount from "./components/Profile/MyAccount"
import MyBookings from "./components/Profile/MyBookings";
import MyProfile from "./components/Profile/MyProfile";
import ManageBookings from "./components/Profile/ManageBookings"
import HomePage from "./components/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import Policy from "./components/pages/Policy";
import ContactUs from "./components/pages/ContactUs";
import Faqs from "./components/pages/Faqs";
import SignUp from "./components/SignUp/Signup";
import Login from "./components/Login/Login";


function App({ children }) {
  return (
    <>

        <Router>
          <Navbar/>
          <Subnavbar/>
          <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/myaccount" element={<MyAccount />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
