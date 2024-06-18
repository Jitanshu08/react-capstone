import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Info from "./pages/Info.jsx";
import Browse from "./pages/Browse.jsx";
import Selection from "./pages/MovieSelection.jsx";
import NotFound from "./pages/404.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/movieSelection" element={<Selection />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
