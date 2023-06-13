// import logo from './logo.svg';
import "./App.css";
import HomePage from "./components/Home/HomePage";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Signup from "./components/SignUp/Signup";

function App({ children }) {
  return (
    <Router>
     {/*<Navbar />*/}
      <Signup/>
      {/*<HomePage></HomePage>*/}
     {/* <Login/> */}
      {/* <Home /> */}
      <Routes>
        {/* <Route path="/" exact component={HomePage} /> */}
        {/* <Route path="/about" component={HomePage} /> */}
        {/* <Route path="/services" component={Services} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/sign-up" component={SignUp} />  */}
      </Routes>
    </Router>
  );
}

export default App;
