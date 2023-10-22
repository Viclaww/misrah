import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import Eventhall from "./Pages/Eventhall";
import Workspace from "./Pages/Workspace";
import Guestroom from "./Pages/Guestroom";
import WorkspaceBooking from "./Pages/Workspacebooking";
import Singleroom from "./Pages/singleroom";
import Doubleroom from "./Pages/doubleroom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="eventhall" element={<Eventhall />} />
        <Route path="workspace" element={<Workspace />} />
        <Route path="/workspace/booking" element={<WorkspaceBooking />} />
        <Route path="guestrooms/single" element={<Singleroom />} />
        <Route path="guestrooms/double" element={<Doubleroom />} />
        <Route path="guestrooms" element={<Guestroom />} />
      </Routes>
    </>
  );
}

export default App;
