import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";
import Body from "./Body";
import Appointment from "./pages/Appointment";
import AppContextProvider from "./context/AppContext";

const App = () => {
  return (
    <div className="mx-4">
      <BrowserRouter basename="/">
        <AppContextProvider>
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/doctors/:speciality" element={<Doctors />} />
              <Route path="/my-appointments" element={<MyAppointments />} />
              <Route path="/my-profile" element={<MyProfile />} />
              <Route path="/appointment/:docId" element={<Appointment />} />
            </Route>
          </Routes>
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
