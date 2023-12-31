import React from "react";
import { Routes, Route } from "react-router-dom";

// styles
import "./App.css";
import "./Utils.css";
import "./Res.css";

// screens
import Home from "./Screens/Home";
import Login from "./Screens/Login";

export const App = () => {
  return (
    <>
      
      <Routes>
        <Route path="/hostinger" element={<Home />} />
        <Route path="/hostinger/login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
