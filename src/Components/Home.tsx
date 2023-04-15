import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import NavBar from "./Navbar";
import "../styles/home.scss";
import headerImg from "../assets/img/header-img.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import About from "./About";
import { motion as m } from "framer-motion";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

const Home = () => {
  return (
  <div>
      <Box className="container-bg">
        <NavBar />
        <Box className="main-content">
          <Box className="Intro">
            <Typography
              variant="h2"
              sx={{
                color: "white",
                mt: 2,
                fontWeight: "700",
              }}
              className="name"
            >
              Hi, I am Anurag
            </Typography>
            <Box
              className="rot-wrapper"
              sx={{
                textAlign: "left",
                marginTop: "30px",
              }}
            >
              <div className="my-ani">
                <div className="rot-item">Web Developer</div>
                <div className="rot-item">UI/UX designer</div>
                <div className="rot-item">Sports Enthusiast</div>
                <div className="rot-item">Love Reading</div>
              </div>
            </Box>
            <Box
              sx={{
                mt: 3,
                // width:"500px"
            
              }}
              className="intro-text"
            >
              <Typography
                sx={{
               
                  color: "#fff",
                 
                }}
               
              >
               I’m a Front end software developer, with a particular passion for design, creativity and I love <span style={{
                fontSize:"20px",
                color:"#61bffb"

               }}>React</span>
              </Typography>
            </Box>
            <Button
              variant="outlined"
              sx={{
                mt: 4,
              }}
              endIcon={<ArrowForwardIcon sx={{}} />}
            >
              {" "}
              Connect with me
            </Button>
          </Box>
          <Box
            className="astro"
            sx={{
              marginRight: "35px",
            }}
          >
            <img src={headerImg} alt="" />
          </Box>
        </Box>
      </Box>
      <About />
      <Skills />
      <Projects />
      <Footer />
      </div>
  
  );
};

export default Home;
