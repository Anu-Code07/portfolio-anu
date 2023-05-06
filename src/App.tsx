import { Box } from "@mui/material";
import { useState } from "react";
import NavRoute from "../src/Components/NavRoutes";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";

import { useLocation } from "react-router-dom";

function App() {
  const url = useLocation();
  const pathname = url.pathname;
  return (
    <Box className="myapp-container">
      <NavRoute key={pathname} />
    </Box>
  );
}

export default App;
