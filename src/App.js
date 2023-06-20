import React, {useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Subnavbar from "./components/Navbar/Subnavbar"
import ProfilePage2 from "./components/Profile/ProfilePage2";
import { Stack,Box} from "@mui/system";
import Rightbar from "./components/Profile/Rightbar";
import HomePage from "./components/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import Policy from "./components/pages/Policy";
import ContactUs from "./components/pages/ContactUs";
import Faqs from "./components/pages/Faqs";
import SignUp from "./components/SignUp/Signup";
import Login from "./components/Login/Login";
import TemplateCard from "./components/BusType/TemplateCard"
import MapboxAutocomplete from "./components/Home/MapboxAutocomplete";
function App({ children }) {

  return (
    <>
      <Router>
        <Navbar />
        {/* <TemplateCard></TemplateCard> */}
        {/* <MapboxAutocomplete /> */}
        <Subnavbar />
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
