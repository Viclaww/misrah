import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import Eventhall from "./Pages/Eventhall";
import Workspace from "./Pages/Workspace";
import Guestroom from "./Pages/Guestroom";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="eventhall" element={<Eventhall />} />
        <Route path="workspace" element={<Workspace />} />
        <Route path="guestrooms" element={<Guestroom />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
