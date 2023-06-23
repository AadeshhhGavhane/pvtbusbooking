import React from "react";
import Navbar from "./components/Navbar";
import Subnavbar from "./components/Navbar/Subnavbar";
import MyAccount from "./components/Profile/MyAccount";
import MyBookings from "./components/Profile/MyBookings";
import MyProfile from "./components/Profile/MyProfile";
import ManageBookings from "./components/Profile/ManageBookings";
import HomePage from "./components/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import Policy from "./components/pages/Policy";
import ContactUs from "./components/pages/ContactUs";
import Faqs from "./components/pages/Faqs";
import SignUp from "./components/SignUp/Signup";
import Login from "./components/Login/Login";
import BusType from "./components/BusType/BusType";
import OrderSum from "./components/OrderSum/OrderSum";

function App({ children }) {
  return (
    <>
      <Router>
        <Navbar />
        <Subnavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/myaccount" element={<MyAccount />} />
          <Route path="/bus-type" element={<BusType />} />
          <Route path="/ordersum" element={<OrderSum />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
