import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar";
// import ProfilePage2 from "./components/Profile/ProfilePage2";
// import { Stack,Box} from "@mui/system";
// import Rightbar from "./components/Profile/Rightbar";
import HomePage from "./components/Home/HomePage";
//   import AboutUs from "./components/pages/AboutUs";
//   import Policy from "./components/pages/Policy";
//  import ContactUs from "./components/pages/ContactUs";
//  import Faqs from "./components/pages/Faqs";
//  import SignUp from "./components/SignUp/Signup";
//  import Login from "./components/Login/Login";

function App() {
  return (
    <>
    
    {/* <Box>
      <Stack direction ="row" spacing={2} justifyContent={"space-between"}>
        <ProfilePage2/> */}
        
        {/* <Rightbar/>
      </Stack>
      
    </Box> */}
    <HomePage/>
      {/* <Router> 
         
        
         <Routes> */}
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/about" element={<AboutUs />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
        </Routes> */}
      {/* </Router> */} 
    </>
  );
}

export default App;
