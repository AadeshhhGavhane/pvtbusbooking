import React, { useState, useEffect } from "react";
import "./index.css";
import { RingLoader } from "react-spinners";
import Navbar from "./components/Navbar/index2";
import Subnavbar from "./components/Navbar/Subnavbar";
import Footer from "./components/Navbar/Footer";
import MyAccount from "./components/Profile/MyAccount";
import MyBookings from "./components/Profile/MyBookings";
import MyProfile from "./components/Profile/MyProfile";
import ManageBookings from "./components/Profile/ManageBookings";
import HomePage from "./components/Home/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/pages/about";
import Policy from "./components/pages/Policy";
import ContactUs from "./components/pages/ContactUs";
import Faqs from "./components/pages/Faqs";
import SignUp from "./components/SignUp/Signup";
import Login from "./components/Login/Login";
import BusType from "./components/BusType/BusType";
import OrderSum from "./components/OrderSum/OrderSum";
// import MapboxAutocomplete from "./components/Home/MapboxAutocomplete";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set the time (in milliseconds) for how long the loader should be displayed
  }, []);

  return (
    <div className={`App ${isLoading ? "zoom-in" : ""}`}>
    {isLoading ? (
      <div className="preloader-wrap">
        <div className="preloader">
          <div className="loading-circle loading-circle-one"></div>
          <div className="loading-circle loading-circle-two"></div>
          <div className="loading-circle loading-circle-three"></div>
        </div>
      </div>
    ) : (
      <div className="app-content">
        <Router>
          <Navbar />
          <Footer />
          {/* <MapboxAutocomplete /> */}
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
        </div>
      )}
    </div>
  );
};

export default App;
