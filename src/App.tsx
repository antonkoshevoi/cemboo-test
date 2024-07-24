import React from 'react';
// styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// pages
import Home from "./pages/Home";

// components
import LeftSidebar from "./components/LeftSidebar";

function App() {
  return (
    <div className="flex min-h-screen w-100 flex-col bg-[#13171D] pb-7">
      <Router>
      <LeftSidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;