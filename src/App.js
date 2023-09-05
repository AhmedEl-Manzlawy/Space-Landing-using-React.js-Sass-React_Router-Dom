import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Destination from "./sections/Destination";
import Technology from "./sections/Technology";
import Home from "./sections/Home";
import Crew from "./sections/Crew";
import Navbar from "./component/Navbar"
import "./style.css"

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
