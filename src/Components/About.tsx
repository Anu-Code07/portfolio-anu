import { Box, Typography } from "@mui/material";
import React from "react";
import NavBar from "./Navbar";
import "../styles/about.scss";
import Anu from "../assets/img/anu.jpeg";
import { useLocation } from "react-router-dom";
import { motion as m } from "framer-motion";
function About() {
  const url = useLocation();
  const pathname = url.pathname;
  return (
      <m.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      exit={{ opacity: 0, x: -100 }}
    >
    
      <div className={pathname === "/about" ? "abg" : "jump-up"}>
        {pathname === "/about" ? <NavBar /> : ""}
        <Box className="about">
          <Box className="img-container">
            <div className="card-bg"></div>
            <div className="card">
              <img src={Anu} alt="image" className="me" />
            </div>
          </Box>
          <Box className="text-container">
            <Typography
              variant="h1"
              sx={{
                textAlign: "left",
                mb: 2,
              }}
            >
              About Me
            </Typography>
            <Box
              sx={{
                width: "90%",
                textAlign: "left",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente consectetur voluptates eveniet dolorum iste autem
                repellat deleniti nulla fuga, modi accusantium sed ipsam optio
                animi cupiditate illo praesentium atque quaerat. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Debitis, at iste.
                Eius, veniam quae? Consectetur debitis repudiandae, aliquid
                cumque, optio architecto quibusdam exercitationem dolor sed
                nesciunt vel beatae placeat voluptates. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Beatae temporibus facere
                velit, rem dolor fugiat deserunt, nobis, porro nihil in quia
                suscipit voluptatibus veritatis animi architecto. Consequuntur
                hic nihil quis.
              </p>
            </Box>
          </Box>
        </Box>
        <Box className="skills"></Box>
      </div>
      </m.div>
  
  );
}

export default About;
