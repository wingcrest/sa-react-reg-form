import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Webpage from "../webpage/Webpage.js";

const FormSuccess = () => {
  return (
    <Router>
      <div className="success-container">
        <div className="success-content">
          <i className="ri-checkbox-circle-fill"></i>
          <h2>Registered successfully!</h2>
          <Link to="/webpage">Click here to be redirected.</Link>
        </div>
      </div>

      <Routes>
        <Route path="/webpage" element={<Webpage />} />
      </Routes>
    </Router>
  );
};

export default FormSuccess;
